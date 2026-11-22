# CLAUDE.md — SINI AKU CERITAIN

Aturan kerja untuk AI di repo ini. Baca ini dulu sebelum menyentuh konten.

## Peta dokumen — baca yang relevan, bukan semuanya

| Kalau tugasnya | Wajib baca |
| --- | --- |
| Menulis / merevisi naskah | `02-content-system/SCRIPT-TEMPLATE.md`, `02-content-system/CONTENT-PILLARS.md`, `02-content-system/FACT-CHECK-CHECKLIST.md` |
| Menulis / merevisi VO | `03-production/ELEVENLABS-VOICE-GUIDE.md` §Penyampaian + §Aturan keras VO di bawah. Kuota EL habis → tambah `03-production/GEMINI-TTS-VOICE-GUIDE.md` |
| Menyentuh `video/` | `video/CLAUDE.md`, `03-production/VIDEO-STYLE-GUIDE.md`, `03-production/VIDEO-CODE-GUIDE.md` |
| Mengubah identitas / visual brand | `01-brand/BRAND-IDENTITY.md` (+ `01-brand/BRAND-SYSTEM.md` untuk token & motion) |
| Mencari ide topik | `02-content-system/IDEA-BANK.md` |
| Menyentuh klaim / fakta / cerita | `02-content-system/FACT-CHECK-CHECKLIST.md` + §Aturan keras klaim di bawah |

`01-brand/BRAND-IDENTITY.md` adalah sumber kebenaran identitas channel. Bila dua dokumen bertabrakan soal brand, ia yang menang.

## Aturan keras: menulis VO

Bila tugas menyentuh `voiceover.md` (siapa pun yang memintanya):

- Baca `03-production/ELEVENLABS-VOICE-GUIDE.md` §Penyampaian — termasuk **Target kemencekan** dan **Tangga tag kemencekan**.
- VO horror **harus** melewati dua sanksi itu sebelum dianggap selesai:
  1. **Sanity struktur** — kalimat pendek per baris, detail konkret (nama, tanggal, tempat, angka), bukan adjektiva seperti "sangat mengerikan". Jeda (`[long pause]`/elipsis) ditempatkan **sebelum** detail berat.
  2. **Sanity tag** — pakai tangga tag dari guide; maksimal satu tag per baris; sisakan baris datar supaya kontras; frasa deskriptif panjang (`[Quietly, with controlled fear]`, `[calm delivery of something wrong]`) dipakai hemat.
- Voice fixed: Gadis - Cheerful Indonesian, `aMSt68OGf4xUZAnLpTU8`, model `eleven_v4`, stability 40–50, similarity 75–85, tanpa SSML.
- **Fallback Gemini TTS**: hanya saat kuota ElevenLabs habis. Baca `03-production/GEMINI-TTS-VOICE-GUIDE.md`; aturan isi VO sama. Voice Gemini **bukan** identitas brand — dipilih per episode, dicatat di VO, dan tidak menggantikan voice fixed di atas. Konfigurasi: `content/drafts/<slug>/voiceover-gemini.json` + `scripts/gemini-tts.mjs`.
- Penutup fixed: `Sini aku ceritain.` — tidak diparafrase, tidak diterjemahkan.
- Tag yang belum ada di contoh resmi docs ElevenLabs harus ditandai "uji dulu" di VO.
- Jangan menaikkan kemencekan dengan kata seram. Mencekam = detail nyata + jeda + kontras nada.

## Aturan keras: klaim & etika

- Bedakan tegas: fakta terverifikasi / fakta sejarah / teori / hipotesis / spekulasi / kesaksian / mitos / legenda / fiksi. Jangan sajikan mitos sebagai fakta.
- Mitos bersumber boleh **jadi isi utama**, tidak wajib dibantah. Syarat: sebut sumbernya, serahkan sikap ke penonton ("percaya atau tidak, ini yang diceritakan orang") — bukan "ini yang terjadi".
- Sumber wajib dicantumkan di `script.md` → Source notes, dengan tanggal akses.
- Klaim yang sumbernya lemah (mis. artikel populer, Wikipedia tanpa catatan kaki) harus disebut lemah di Source notes dan di VO disebut sebagai "kepercayaan/cerita yang beredar", bukan temuan.
- Audiens 18+. Hormati korban/keluarga/masyarakat/kepercayaan. Tanpa glorifikasi, tanpa gore/kekerasan eksplisit-grafis.

## Aturan keras: jangan timpa konten aktif

- `content/current/` = satu konten aktif. Jangan timpa. Bila konten baru dikerjakan sementara `current/` masih terpakai, tulis di `content/drafts/<NN-slug>/`.
- Brand voice tidak diubah tanpa persetujuan.

## Video

Untuk kerja di `video/`: baca `video/CLAUDE.md` dan ikuti skill HyperFrames. Kontrak ringkas ada di `03-production/VIDEO-CODE-GUIDE.md`.
