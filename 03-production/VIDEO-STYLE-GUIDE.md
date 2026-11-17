# Video Style Guide

## Approved constraints

- Visual harus mendukung makna ilmiah; jangan membuat klaim terlihat lebih pasti daripada buktinya.
- Format: 25–60 detik, vertikal 9:16, satu ide inti, satu pertanyaan inti, dan satu payoff.
- Audiens: semua umur (universal); visual harus jelas dan aman lintas usia.
- Humor boleh absurd, tetapi penjelasan tetap akurat (lihat `README.md`).

## Identitas

Sumber kebenaran identitas: `01-brand/BRAND-IDENTITY.md`. Sistem visual dan motion lengkap:
`01-brand/BRAND-SYSTEM.md`.

- **Channel:** NGGAK PENTING LAB. Wordmark `NGGAK PENTING.`
- **Konsep:** *Reality is serious. Until it isn't.*
- **Art direction:** CINEMATIC ABSURDISM.
- **Handle:** `@nggakpentinglab` — usulan, belum diverifikasi. Jangan klaim tersedia.
- **Pillar:** Earth Glitch, Human Madness, Sci-Fi Parody. Satu identitas, tiga suhu visual.

## Gaya visual & penyampaian

- **Sinematik, bukan slide:** full-bleed, asimetris, berlapis (FG/MG/BG), kamera yang
  bergerak dengan alasan, tipe sebagai gambar utama.
- **Ekspresif dan relevan:** visual harus membantu menjelaskan ide, bukan menghiasinya.
- **Kejelasan:** satu fokus per beat.
- **Caption/subtitle:** wajib ada; **sinkron per frasa, bukan per kata**. Maksimal 2 baris,
  2–7 kata per grup, highlight maksimal satu frasa. Karaoke kata-per-kata dilarang.
  Detail: `BRAND-SYSTEM.md` §5.
- **Pacing:** ritme potongan mengikuti narasi (hook–penjelasan–payoff). Hard cut sebagai
  transisi utama; Reality Skip hanya untuk distorsi realitas.
- **Konsistensi:** token warna, tipe, dan motion dari `video/assets/brand/tokens.css` dan
  `video/assets/brand/brand.js`. Jangan menulis ulang nilai yang sudah ada di token.
- **Watermark:** satu rail vertikal di tepi kanan, dipasang sekali di root, opasitas ≤ .4.
- **Tagline:** setiap video ditutup dengan signature outro `PENTING GA PENTING,` /
  `JAWABNYA SERIUS.` di akhir saja, tahan ≥2 dtk. Teks tetap, jangan diparafrase.
  Teknis: `VIDEO-CODE-GUIDE.md` §4.

## Hindari (anti "AI slop")

- Layout PowerPoint, motion graphics korporat, kartu rounded berisi teks, dashboard statis,
  komposisi tengah yang berulang, kotak pembungkus teks dekoratif.
- Visual stok/generik yang tidak relevan dengan penjelasan.
- Template berulang, transisi/efek klise tanpa fungsi, atau komposisi yang berantakan.
- Teks berlebihan, sulit dibaca, atau sekadar mengulang narasi tanpa nilai tambah.
- Animasi teks acak terus-menerus; bounce berlebih; glitch di setiap cut.
- Ikon sains klise: lightbulb, rocket, atom, brain.
- Sensasionalisasi visual yang mendistorsi sains atau tidak sesuai untuk semua umur.

## Audio

- Ambient sinematik, pulse synth halus, tension atmosferik, perkusi minimal.
- Mix -14 LUFS integrated, maksimum -1 dBTP, ducking musik 4–8 dB saat VO.
- VO prioritas tertinggi; SFX tidak boleh menutupi narasi; diam sebelum punchline boleh.
- Status aset: **belum ada file audio di repo**. Lihat `video/assets/audio/manifest.json`.
  Jangan mereferensikan path yang belum ada di disk.

## Catatan produksi

- Sesuaikan visual dengan script dan hasil fact-check (`02-content-system/SCRIPT-TEMPLATE.md`,
  `02-content-system/FACT-CHECK-CHECKLIST.md`).
- Episode **1816** (`video/compositions/s1-hook.html` … `s6-closing.html`) dibangun sebelum
  token system ada dan masih memakai palet scene-local lamanya. Episode itu tidak ditulis
  ulang; brand layer (watermark, caption rail, outro) ditambahkan di atasnya. Episode baru
  wajib memakai `--npl-*` dari `tokens.css`.
