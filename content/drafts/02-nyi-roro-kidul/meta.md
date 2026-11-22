# [05] — Legenda Nyi Roro Kidul, Ratu Pantai Selatan (nyi-roro-kidul)

- **Niche:** Horror (Misteri, Basis Real Story — legenda/kepercayaan)
- **Audiens:** 18+ (dewasa)
- **Pertanyaan inti:** Dari mana legenda Nyi Roro Kidul berasal, dan bagaimana cerita itu hidup di masyarakat pesisir selatan?
- **Ide inti / payoff:** Legenda lintas versi (Sunda/Pajajaran → Mataram) dengan jejak budaya yang bisa dirujuk — Labuhan, naskah klasik, kursi kosong Bedhaya Ketawang. Batas legenda vs fakta ditegaskan, bukan disamarkan.
- **Status:** draft

## Tautan platform

- **TikTok:** pending
- **YouTube Shorts:** pending
- **Instagram Reels:** pending

## Aset & catatan

- **Aset eksternal:** audio dipakai HyperFrames = `video/assets/audio/voiceover-norm.mp3` (103,31 dtk); VO ElevenLabs mentah = `video/assets/audio/voiceover.mp3` (103,31 dtk). Konfigurasi Gemini: `voiceover-gemini.json` + `scripts/gemini-tts.mjs` — `output` di JSON menunjuk `voiceover-gemini.wav` yang tidak ada di disk, jadi jalur Gemini belum pernah dijalankan sampai selesai. Belum ada klip footage Flow (`video/assets/video/` belum dibuat); komposisi sekarang murni tipografi.
- **Fact-check:** Lihat `script.md` → Source notes. Ringkas: Wikipedia ID/EN sebagai basis, dengan tiga peringatan yang **wajib ditutup sebelum upload** —
  1. **Larangan baju hijau** hanya bersumber artikel populer, bukan kajian akademik → di VO disebut kepercayaan yang beredar, bukan temuan.
  2. **Labuhan** (tanggal/bulan, detail sesaji) wajib diverifikasi ke sumber Keraton (`kratonjogja.id`) atau publikasi akademik.
  3. **Kutipan Babad Tanah Jawi / Babad Dipanegara / Serat Centhini** belum dicek ke edisi teks.
  Yang tidak boleh diklaim: keberadaan sosok, tahun pasti asal legenda, jumlah penampakan/korban. Pelabuhan Ratu 6 April bukan Labuhan Parangkusumo.
- **Catatan:** Audio 103,31 dtk, di atas format 70–90 dtk. Keputusan: diterima (shot list mengikuti 103 dtk) atau potong satu versi cerita ke ~88 dtk — belum diputuskan. Alignment kata untuk caption belum diverifikasi dengan mendengar; beat 4 dan 8 masih bertanda ⚠ di `shotlist-flow.md`.
- **Penomoran:** folder draft bernama `02-nyi-roro-kidul`, tetapi arsip sudah memakai 02 untuk episode human madness. Episode ini jatuh di urutan **05**. Ganti nama folder saat pindah ke `content/archive/`.
