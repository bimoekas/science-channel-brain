# Science Channel Brain

Repository pusat referensi untuk channel short-form **SINI AKU CERITAIN** di TikTok, YouTube Shorts, dan Instagram Reels.

## Tujuan

Menyimpan brand identity, content system, workflow riset, scriptwriting, voice generation, dan video production agar AI memahami konteks channel secara konsisten.

## Format

- Durasi: 70–90 detik
- Orientasi: vertikal 9:16
- Satu video: satu ide inti
- Hook: 0–2 detik
- Penjelasan: 3–50 detik
- Payoff/ending: 50–90 detik

## Content niches

1. **Komedi** — relatable harian, absurd-realita keseharian Indonesia.
2. **Horror** — misteri/tegang berbasis real story (kesaksian/narasumber/cerita orang, fakta sejarah, atau mitos/legenda daerah), bukan karangan ngawang. Target 18+ (dewasa): tema gelap/mature boleh, tanpa glorifikasi kekerasan/pelaku, tidak mengeksploitasi; hindari visual/deskripsi gore atau kekerasan eksplisit-grafis; label & bedakan cerita/kesaksian/mitos vs fakta terverifikasi.

## Aturan utama

- Satu video punya satu ide inti dan satu payoff. Target audiens 18+ (dewasa), bukan semua umur.
- **Komedi:** humor boleh absurd, relatable, dan ringan.
- **Horror:** wajib berbasis real story (kesaksian/narasumber/cerita orang, fakta sejarah, atau mitos/legenda daerah) — bukan ngawang; cantumkan asal/sumber cerita. Tegang/merinding dan tema dewasa/gelap boleh, tanpa glorifikasi kekerasan/pelaku, tidak mengeksploitasi; hindari visual/deskripsi gore atau kekerasan eksplisit-grafis.
- Jika ada klaim/fakta/cerita: jaga akurasi, bedakan fakta, fakta sejarah terverifikasi, teori, hipotesis, spekulasi, kesaksian/cerita beredar, rumor/legenda/mitos, dan fiksi. Jangan menyajikan cerita/rumor sebagai fakta terverifikasi.
- Jangan mengubah brand voice tanpa persetujuan.

## Cara AI menggunakan repo

Untuk membuat ide, script, caption, prompt produksi, atau **kode video**:

0. Baca [`CLAUDE.md`](CLAUDE.md) — aturan keras repo (VO, klaim/etika, jangan timpa `content/current/`).
1. Baca [identitas brand](01-brand/BRAND-IDENTITY.md).
2. Baca [content pillars/niches](02-content-system/CONTENT-PILLARS.md).
3. Ikuti [script template](02-content-system/SCRIPT-TEMPLATE.md).
4. Gunakan [fact-check checklist](02-content-system/FACT-CHECK-CHECKLIST.md).
5. Ikuti [ElevenLabs voice guide](03-production/ELEVENLABS-VOICE-GUIDE.md).
6. Ikuti [video style guide](03-production/VIDEO-STYLE-GUIDE.md) dan [video code guide (HyperFrames)](03-production/VIDEO-CODE-GUIDE.md) saat generate/edit kode video (`video/`).
7. Kerjakan konten aktif di [`content/current/`](content/current/) (`script.md`, `voiceover.md`, `meta.md`); mulai dari [`content/_templates/`](content/_templates/).
8. Jangan mengubah brand voice tanpa persetujuan.

## Workflow konten & arsip

- **Aktif (teks):** [`content/current/`](content/current/) = naskah/VO/metadata konten yang dikerjakan. `script.md` naskah utama, `voiceover.md` narasi VO, `meta.md` status & tautan platform.
- **Aktif (video):** [`video/`](video/) = HyperFrames composition project (portrait 9:16, 1080×1920) untuk konten aktif. Jalankan dari root via script `npm run ...` (lihat [HyperFrames (CLI)](#hyperframes-cli)).
- **Upload:** catat URL + tanggal TikTok, YouTube Shorts, Instagram Reels di `meta.md`.
- **Arsip (setelah published di 3 platform):** `git mv content/current content/archive/NNN-<slug>` → buat `content/current/` baru dari `content/_templates/` → tambah baris di [`content/README.md`](content/README.md). (Arsipkan/salin komposisi `video/` sesuai kebutuhan produksi.)
- Detail alur & indeks: [`content/README.md`](content/README.md).

## Peta repo

- [`01-brand/BRAND-IDENTITY.md`](01-brand/BRAND-IDENTITY.md): identitas dan positioning.
- [`01-brand/BRAND-SYSTEM.md`](01-brand/BRAND-SYSTEM.md): sistem visual & motion (tipografi, caption, logo, Reality Skip, audio, outro) beserta cara memakainya.
- [`02-content-system/CONTENT-PILLARS.md`](02-content-system/CONTENT-PILLARS.md): niche konten (Komedi, Horror).
- [`02-content-system/IDEA-BANK.md`](02-content-system/IDEA-BANK.md): bank ide pilot.
- [`02-content-system/SCRIPT-TEMPLATE.md`](02-content-system/SCRIPT-TEMPLATE.md): struktur script.
- [`02-content-system/FACT-CHECK-CHECKLIST.md`](02-content-system/FACT-CHECK-CHECKLIST.md): pemeriksaan klaim.
- [`03-production/ELEVENLABS-VOICE-GUIDE.md`](03-production/ELEVENLABS-VOICE-GUIDE.md): panduan voice generation.
- [`03-production/VIDEO-STYLE-GUIDE.md`](03-production/VIDEO-STYLE-GUIDE.md): panduan gaya visual dan editing.
- [`03-production/VIDEO-CODE-GUIDE.md`](03-production/VIDEO-CODE-GUIDE.md): panduan AI generate kode video HyperFrames (struktur, kontrak, style, 3D, QA).
- [`content/README.md`](content/README.md): pelacak konten & alur arsip.
- [`content/current/`](content/current/): konten aktif teks (`script.md`, `voiceover.md`, `meta.md`).
- [`content/_templates/`](content/_templates/): template konten baru.
- [`content/archive/`](content/archive/): konten published (`NNN-<slug>/`).
- [`video/`](video/): HyperFrames composition project untuk konten aktif (portrait 9:16, 1080×1920).
- [`package.json`](package.json): script HyperFrames & utilitas root.
- [`.gitignore`](.gitignore): abaikan `node_modules/`, `renders/`, `.hyperframes/`, snapshot, dll.

## HyperFrames (CLI)

Syarat: Node.js 22+, FFmpeg, pnpm. Jalankan dari root repo (script memakai `pnpm dlx hyperframes@latest`, tanpa pin versi, install global tidak wajib):

| Script | Fungsi |
| --- | --- |
| `pnpm hf:doctor` | Cek lingkungan (Chrome, FFmpeg, dll) |
| `pnpm video:dev` | Buka preview Studio untuk `video/` |
| `pnpm video:lint` | Lint komposisi |
| `pnpm video:check` | Gate: lint + runtime + layout + contrast |
| `pnpm video:snapshot` | Ambil frame PNG (cek visual) |
| `pnpm video:render` | Render `renders/current.mp4` (quality `looks`) |
| `pnpm video:render:draft` | Render cepat `renders/current-draft.mp4` |
| `pnpm video:info` | Metadata proyek video |
| `pnpm video:timeline` | Tampilkan track/clip timeline |
| `pnpm content:status` | Pengingat alur konten aktif |

`renders/`, `.hyperframes/`, `node_modules/` di-ignore (`.gitignore`). Output render simpan/tautkan di luar repo bila final; saat iterasi lokal bisa di `renders/` (tidak di-commit). Instal skill HyperFrames (opsional, langkah user): `pnpm dlx hyperframes@latest skills update`.

## Catatan media

Jangan simpan video/audio final berukuran besar di repo. Simpan di Google Drive atau YouTube unlisted, lalu catat tautan dan status produksi di `content/current/meta.md` (atau `content/archive/.../meta.md`).