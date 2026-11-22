# Content Tracker

Pelacak konten short-form. `content/current/` = konten aktif yang dikerjakan/akan diupload. Setelah tayang di TikTok, YouTube Shorts, dan Instagram Reels, pindahkan ke `content/archive/NNN-<slug>/`.

## Struktur

- `_templates/` — template `script.md`, `voiceover.md`, `meta.md` untuk konten baru.
- `current/` — 1 konten aktif: `script.md` (naskah utama), `voiceover.md` (narasi VO), `meta.md` (status & tautan platform).
- `archive/NNN-<slug>/` — konten yang sudah published di 3 platform, berurut.

## Alur

1. **Mulai:** salin `_templates/*` ke `current/` (jika kosong) dan isi.
2. **Kerja:** update `script.md`, `voiceover.md`, `meta.md` (status `draft` → `siap-upload`); cek `02-content-system/FACT-CHECK-CHECKLIST.md`.
3. **Upload:** isi URL + tanggal per platform di `meta.md`.
4. **Arsip (semua 3 published):**
   - `git mv content/current content/archive/NNN-<slug>`
   - buat `content/current/` baru dari `_templates/`
   - tambah baris di tabel di bawah, commit terpisah.

File audio/video final simpan di luar repo; tautkan di `meta.md`.

## Indeks

| No | Slug | Niche | Status | TikTok | YouTube Shorts | Instagram Reels |
| --- | --- | --- | --- | --- | --- | --- |
| - | _(current)_ | - | draft | pending | pending | pending |
