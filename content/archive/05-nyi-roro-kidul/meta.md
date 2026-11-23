# [05] — Legenda Nyi Roro Kidul, Ratu Pantai Selatan (nyi-roro-kidul)

- **Niche:** Horror (Misteri, Basis Real Story — legenda/kepercayaan)
- **Audiens:** 18+ (dewasa)
- **Pertanyaan inti:** Dari mana legenda Nyi Roro Kidul berasal, dan bagaimana cerita itu hidup di masyarakat pesisir selatan?
- **Ide inti / payoff:** Legenda lintas versi (Sunda/Pajajaran → Mataram) dengan jejak budaya yang bisa dirujuk — Labuhan, naskah klasik, kursi kosong Bedhaya Ketawang. Batas legenda vs fakta ditegaskan, bukan disamarkan.
- **Status:** archived (draft konten selesai; video HyperFrames check 0 error, 2026-11-23; belum render/publish)

## Tautan platform

- **TikTok:** pending
- **YouTube Shorts:** pending
- **Instagram Reels:** pending

## Aset & catatan

- **Aset eksternal:** audio dipakai HyperFrames = `video/assets/audio/voiceover-norm.mp3` (103,31 dtk); VO ElevenLabs mentah = `video/assets/audio/voiceover.mp3` (103,31 dtk). Konfigurasi Gemini: `voiceover-gemini.json` + `scripts/gemini-tts.mjs` — `output` di JSON menunjuk `voiceover-gemini.wav` yang tidak ada di disk, jadi jalur Gemini belum pernah dijalankan sampai selesai. Tidak ada klip video; semua latar adalah foto diam dari Wikimedia Commons plus tiga gravir/lukisan domain publik — kredit dan lisensi di `video/assets/images/nyi-roro-kidul/CREDITS.md`.
- **Aturan visual — foto vs gravir:** foto = yang tercatat (pantai, kraton, naskah, upacara Labuhan). Gravir/lukisan = yang dibayangkan. Dipakai di **s3, s4, s5** (tiga beat legenda) dan s7, s11 — lima dari dua belas scene. s1 (foto 1897), s2, s6, s8, s9, s10 tetap foto karena semuanya tentang sesuatu yang ada. Tidak pernah diberi keterangan tempat di layar, karena subjeknya bukan Jawa.
- **Fact-check:** selesai 2026-11-22. Detail lengkap di `script.md` → Source notes. Tiga yang dulu terbuka, hasilnya:
  1. **Larangan baju hijau — sebagian terkonfirmasi.** Ada sumber akademik: Yuwono (BRIN), *Panangkaran* 7(1) 2023, DOI 10.14421/panangkaran.v7i1.3142, hlm. 36 — mendokumentasikan kepercayaan warga Parangkusumo bahwa hijau (*gadhung mlathi*) adalah warna penghuni keraton lelembut. Catatan lama "hanya artikel populer" **keliru** dan sudah dikoreksi. Yang tetap tidak ada: penelitian yang membuktikan sebab-akibatnya. Catatan kaki scene 2 diubah jadi "Kepercayaan warga Parangkusumo. Tercatat, bukan terbukti."
  2. **Labuhan — terkonfirmasi, dua istilah salah.** Tanggal resmi **30 Rejeb** (sehari setelah Jumenengan Dalem), dari halaman Kraton sendiri; ini menggantikan keraguan sebelumnya dan sudah masuk catatan kaki scene 8. Guntingan rambut/kuku ("Pethetan Rikma lan Kenaka Dalem") dan kain hijau *Semekan Gadhung Mlathi* ada di daftar resmi. **"Kemben" tidak ada di daftar resmi** — istilahnya *semekan*; VO tetap menyebut "kemben" (audio tidak direkam ulang), figcaption scene 8 memakai istilah resmi, caption layar tetap verbatim mengikuti ucapan. **"Kain parang rusak"** juga tidak ada di daftar → dihapus dari seluruh dokumen.
  3. **Naskah klasik — ketiganya terkonfirmasi** di edisi teks: Babad Tanah Jawi (Remmelink, LUP 2022, bab 32 & 61), Babad Dipanegara (LOr 6547, terjemahan Inggris), Serat Centhini (jilid 1 bait 26). Serat Darmogandhul tidak dicek → tidak dipakai.
  Yang tidak boleh diklaim: keberadaan sosok, tahun pasti asal legenda, jumlah penampakan/korban. Pelabuhan Ratu 6 April bukan Labuhan Parangkusumo. Larangan hijau bukan tradisi keraton kuno — yang tercatat kepercayaan warga saat ini.
- **Catatan:** Audio 103,31 dtk, di atas format 70–90 dtk. Keputusan (2026-11-22): **diterima**, shot list mengikuti 103 dtk, tidak dipotong. Caption sudah diverifikasi terhadap timestamp per kata di `video/transcript.json`; rebuild caption center/lower, teks-only, font EB Garamond horror (2026-11-23). SFX payoff ditambah (`rumble-low.mp3`, `thunder-hit.mp3`, lisensi lokal ffmpeg di `video/assets/audio/sfx/LICENSE.txt`). `pnpm video:check` 0 error/0 warning.
- **Penomoran:** folder draft bernama `02-nyi-roro-kidul`; diarsipkan sebagai **05** karena `02-human-madness-wrinkly-fingers` sudah ada.
