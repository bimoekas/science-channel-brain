#!/usr/bin/env node
// Generate voiceover per segment via Gemini TTS, concat with pauses.
// Usage: GEMINI_API_KEY=... node scripts/gemini-tts.mjs <manifest.json> [--print]
// See 03-production/GEMINI-TTS-VOICE-GUIDE.md for manifest format and tag rules.

import { readFile, writeFile, mkdtemp, rm } from "node:fs/promises";
import { execFile } from "node:child_process";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { promisify } from "node:util";

const run = promisify(execFile);
const endpoint = "https://generativelanguage.googleapis.com/v1beta/interactions";

const [manifestPath, ...flags] = process.argv.slice(2);
if (!manifestPath) {
  console.error("usage: GEMINI_API_KEY=... node scripts/gemini-tts.mjs <manifest.json> [--print]");
  process.exit(1);
}

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const { model = "gemini-3.8-flash-tts", voice = "Enceladus", output, segments } = manifest;
if (!Array.isArray(segments) || segments.length === 0) {
  console.error("manifest.segments kosong");
  process.exit(1);
}

for (const [i, seg] of segments.entries()) {
  if (typeof seg.text !== "string" || !seg.text.trim()) {
    console.error(`segmen ${i + 1}: 'text' kosong`);
    process.exit(1);
  }
}

const totalChars = segments.reduce((n, s) => n + s.text.length, 0);
const totalPause = segments.reduce((n, s) => n + Number(s.pauseAfter ?? 0), 0);
// ~15 chars/sec is a conservative estimate for measured Indonesian narration; only a gate, not a measurement.
const estimate = totalChars / 15 + totalPause;
console.log(`${segments.length} segmen, ${totalChars} karakter, jeda total ${totalPause.toFixed(1)} dtk, voice ${voice}, model ${model}`);
console.log(`estimasi durasi ≈ ${estimate.toFixed(1)} dtk` + (estimate > 90 ? "  ← di atas 90, potong teks" : ""));

if (flags.includes("--print")) {
  for (const [i, seg] of segments.entries()) {
    console.log(`\n--- [${i + 1}] style: ${seg.style || "(default)"} | pause after: ${seg.pauseAfter ?? 0}s`);
    console.log(seg.text);
  }
  process.exit(0);
}

if (estimate > 100) {
  console.error("estimasi >100 dtk — generate akan sia-sia; potong teks/jeda dulu");
  process.exit(1);
}

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("GEMINI_API_KEY tidak diset");
  process.exit(1);
}

const outPath = output ?? manifestPath.replace(/\.json$/, ".wav");
const workDir = await mkdtemp(join(tmpdir(), "gemini-tts-"));

async function synthesize(seg, index) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json", "x-goog-api-key": apiKey },
    body: JSON.stringify({
      model,
      input: [
        {
          type: "user_input",
          content: [
            {
              type: "text",
              text: seg.text,
              ...(seg.style ? { annotations: [{ type: "speech_metadata", style: seg.style }] } : {}),
            },
          ],
        },
      ],
      response_format: { type: "audio", mime_type: "audio/wav", sample_rate: 24000 },
      generation_config: { speech_config: [{ voice }] },
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`segmen ${index + 1}: HTTP ${res.status} — ${body.slice(0, 400)}`);
  }
  const json = await res.json();
  const audio = json?.output_audio?.data ?? json?.output?.[0]?.content?.[0]?.data;
  if (!audio) {
    throw new Error(`segmen ${index + 1}: respons tanpa audio — ${JSON.stringify(json).slice(0, 400)}`);
  }
  const file = join(workDir, `seg-${String(index).padStart(3, "0")}.wav`);
  await writeFile(file, Buffer.from(audio, "base64"));
  return file;
}

const files = [];
for (const [i, seg] of segments.entries()) {
  process.stdout.write(`[${i + 1}/${segments.length}] ${seg.style || "default"}... `);
  try {
    files.push(await synthesize(seg, i));
    console.log("ok");
  } catch (err) {
    console.log("gagal");
    await rm(workDir, { recursive: true, force: true });
    console.error(err.message);
    process.exit(1);
  }
}

// silence track used between segments; 'pauseAfter' is per-segment seconds
const silences = [];
for (const [i, seg] of segments.entries()) {
  if (i === segments.length - 1) break;
  const seconds = Number(seg.pauseAfter ?? 0);
  if (!seconds) continue;
  const file = join(workDir, `silence-${i}.wav`);
  await run("ffmpeg", [
    "-y", "-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono",
    "-t", String(seconds), "-c:a", "pcm_s16le", file,
  ]);
  silences[i] = file;
}

const listFile = join(workDir, "list.txt");
const lines = [];
for (const [i, file] of files.entries()) {
  lines.push(`file '${file}'`);
  if (silences[i]) lines.push(`file '${silences[i]}'`);
}
await writeFile(listFile, lines.join("\n"));

await run("ffmpeg", ["-y", "-f", "concat", "-safe", "0", "-i", listFile, "-c", "copy", outPath]);
await rm(workDir, { recursive: true, force: true });

const { stdout } = await run("ffprobe", [
  "-v", "error", "-show_entries", "format=duration",
  "-of", "csv=p=0", outPath,
]);
const seconds = Number(stdout.trim());
console.log(`\n${outPath} — ${seconds.toFixed(2)} dtk (${dirname(outPath)})`);
if (seconds < 70 || seconds > 90) {
  console.log("peringatan: durasi di luar 70–90 dtk, revisi teks/pauseAfter");
}
