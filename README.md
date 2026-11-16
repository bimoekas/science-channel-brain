# Science Channel Brain

Repository pusat referensi untuk channel sains short-form di TikTok, YouTube Shorts, dan Instagram Reels.

## Tujuan

Menyimpan brand identity, content system, workflow riset, scriptwriting, voice generation, dan video production agar AI memahami konteks channel secara konsisten.

## Format

- Durasi: 25–60 detik
- Orientasi: vertikal 9:16
- Satu video: satu ide inti
- Hook: 0–2 detik
- Penjelasan: 6–30 detik
- Payoff/ending: 30–60 detik

## Content pillars

1. Earth Glitch
2. Human Madness
3. Sci-Fi Parody

## Aturan utama

- Akurasi ilmiah adalah fondasi utama.
- Fokus pada fakta sains yang aneh, unik, nyeleneh, atau mengejutkan—bukan sekadar fakta umum—dari berbagai bidang sains (bukan hanya hewan), dengan penjelasan tetap akurat dan terverifikasi.
- Humor boleh absurd, tetapi penjelasan harus akurat.
- Bedakan fakta, teori, hipotesis, spekulasi, dan fiksi.
- Jangan memosisikan channel sebagai komedi murni atau edukasi kering.
- Setiap video punya satu pertanyaan inti dan satu payoff.

## Cara AI menggunakan repo

Untuk membuat ide, script, caption, atau prompt produksi:

1. Baca [identitas brand](01-brand/BRAND-IDENTITY.md).
2. Baca [content pillars](02-content-system/CONTENT-PILLARS.md).
3. Ikuti [script template](02-content-system/SCRIPT-TEMPLATE.md).
4. Gunakan [fact-check checklist](02-content-system/FACT-CHECK-CHECKLIST.md).
5. Ikuti [ElevenLabs voice guide](03-production/ELEVENLABS-VOICE-GUIDE.md).
6. Kerjakan konten aktif di [`content/current/`](content/current/) (`script.md`, `voiceover.md`, `meta.md`); mulai dari [`content/_templates/`](content/_templates/).
7. Jangan mengubah brand voice tanpa persetujuan.

## Workflow konten & arsip

- **Aktif (teks):** [`content/current/`](content/current/) = naskah/VO/metadata konten yang dikerjakan. `script.md` naskah utama, `voiceover.md` narasi VO, `meta.md` status & tautan platform.
- **Aktif (video):** [`video/`](video/) = HyperFrames composition project (portrait 9:16, 1080×1920) untuk konten aktif. Jalankan dari root via script `npm run ...` (lihat [HyperFrames (CLI)](#hyperframes-cli)).
- **Upload:** catat URL + tanggal TikTok, YouTube Shorts, Instagram Reels di `meta.md`.
- **Arsip (setelah published di 3 platform):** `git mv content/current content/archive/NNN-<slug>` → buat `content/current/` baru dari `content/_templates/` → tambah baris di [`content/README.md`](content/README.md). (Arsipkan/salin komposisi `video/` sesuai kebutuhan produksi.)
- Detail alur & indeks: [`content/README.md`](content/README.md).

## Peta repo

- [`01-brand/BRAND-IDENTITY.md`](01-brand/BRAND-IDENTITY.md): identitas dan positioning.
- [`02-content-system/CONTENT-PILLARS.md`](02-content-system/CONTENT-PILLARS.md): pilar konten.
- [`02-content-system/IDEA-BANK.md`](02-content-system/IDEA-BANK.md): bank ide pilot.
- [`02-content-system/SCRIPT-TEMPLATE.md`](02-content-system/SCRIPT-TEMPLATE.md): struktur script.
- [`02-content-system/FACT-CHECK-CHECKLIST.md`](02-content-system/FACT-CHECK-CHECKLIST.md): pemeriksaan klaim.
- [`03-production/ELEVENLABS-VOICE-GUIDE.md`](03-production/ELEVENLABS-VOICE-GUIDE.md): panduan voice generation.
- [`03-production/VIDEO-STYLE-GUIDE.md`](03-production/VIDEO-STYLE-GUIDE.md): panduan gaya visual dan editing.
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
