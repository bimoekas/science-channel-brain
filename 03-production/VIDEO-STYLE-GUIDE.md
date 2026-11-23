# Video Style Guide

## Approved constraints

- Visual harus mendukung makna dan suasana; jangan membuat klaim terlihat lebih pasti daripada buktinya. Bedakan fakta terverifikasi vs kesaksian/cerita beredar/mitos/legenda/fiksi bila relevan.
- Format: 70–90 detik, vertikal 9:16, satu ide inti, satu pertanyaan inti, dan satu payoff.
- Audiens: 18+ (dewasa), bukan semua umur; visual harus jelas dan ditujukan untuk audiens dewasa.
- Target 18+ (dewasa). Komedi: humor absurd-relatable. Horror: tegang/misterius, **wajib berbasis real story** (kesaksian/narasumber/cerita orang, fakta sejarah, atau mitos/legenda daerah — bukan karangan ngawang), seram dari detail konkret, jeda, kontras. Deviasi user-approved (2026-05): jumpscare/klimaks terkontrol boleh untuk seram; tetap tanpa gore/kekerasan eksplisit-grafis, tanpa glorifikasi, tidak berlebihan. (lihat `README.md`).

## Identitas

Sumber kebenaran identitas: `01-brand/BRAND-IDENTITY.md`. Sistem visual dan motion lengkap:
`01-brand/BRAND-SYSTEM.md`.

- **Channel:** SINI AKU CERITAIN. Wordmark `SINI AKU CERITAIN.`
- **Konsep:** *Sini aku ceritain.* — bercerita dengan konteks padat dan penuh isi.
- **Art direction:** Sinematik, padat, dan fokus cerita.
- **Handle:** `@siniakuceritain` — usulan, belum diverifikasi. Jangan klaim tersedia.
- **Niche:** Komedi (relatable harian) dan Horror (misteri, non-grafis). Satu identitas, dua suhu visual. Token/palet legacy pillar tetap ada untuk arsip.

## Format Teks & Karakter Simbol (Wajib)

- **Dilarang keras memakai raw LaTeX atau markup mentah:** jangan pernah menulis `$\rightarrow$`, `\rightarrow`, `&rarr;`, atau sintaks matematika/LaTeX lainnya di dalam teks HTML visual maupun subtitle.
- **Gunakan karakter literal yang bersih:** gunakan panah literal `→` atau `>` atau `—` langsung agar tidak bocor sebagai kode mentah di layar video.

## Gaya Visual Storytelling (Berkas Kasus)

Gaya kanal adalah **berkas kasus yang dibuka di layar**, bukan kartu ilustrasi. Bukan slide, bukan
kartun berbingkai: ground gelap sinematik, satu baris konteks yang selalu hadir, dan klaim yang
distempel statusnya saat diucapkan. Semua bahan sudah ada di `video/assets/brand/tokens.css` —
pakai yang sudah didefinisikan, jangan menulis ulang nilainya.

**Gambar**
- Ground sinematik penuh: `.npl-ground` + `.npl-vignette`. Grain sudah terpasang sekali di root
  (`compositions/brand/grain.html`, opasitas .03 — lebih tinggi dari itu menurunkan teks abu-abu di
  bawah WCAG AA). Jangan tambah lapis grain kedua di dalam scene.
- Foto arsip/lokasi yang relevan, **full-bleed**, desaturasi penuh (Horror) atau warna penuh (Komedi).
  Foto dipakai sebagai bukti, bukan hiasan; jangan tampilkan orang/manusia nyata.
- Tanpa kartu berbingkai, tanpa rounded frame, tanpa karakter kartun 2D. Ilustrasi hanya bila tidak
  ada foto — bentuk vektor flat sederhana, berlabel, palet terbatas.

**Baris konteks (pengganti wajah presenter)**
- Satu baris di rail atas, hadir di setiap scene, nilainya berubah per beat:
  `KASUS 004 · SUKHOI SUPERJET 100 · 2012`. Pakai `.npl-case` (`<b>` untuk angka/kata kunci, `<i>`
  garis alert). Komedi: konteks nyata (`SENIN · 07:12 · KANTOR`), bukan punchline.
- **Sudah terpasang sekali di root**, bukan per scene:
  `video/compositions/brand/case-rail.html`, di-`data-start` 0–101.60 dan diganti nilainya
  dengan `tl.set` di batas beat (bukan slide). Untuk episode baru: ganti tiga baris `<p class="npl-case">`
  dan tiga angka waktu. Jangan salin rail ini ke dalam scene — dua rail akan bertumpuk.
- **Isinya status, bukan pengulangan tipe scene.** Kalau scene sudah mencetak "Pesisir selatan Jawa"
  sebagai kicker, rail tidak boleh mencetaknya lagi. Isi rail = status klaim (`LEGENDA · SUMBER LISAN`,
  `TERCATAT · PRAKTIK & NASKAH`, `BATAS BUKTI · LEGENDA ≠ FAKTA`).
- Ini yang mengikat penonton tanpa presenter di layar. Jangan dihilangkan, jangan dibuat mewah.

**Stempel status klaim (Horror)**
- Saat VO menyebut status sebuah klaim, stempelkan di layar: `.npl-stamp.fact` (`#7ed4ff`),
  `.npl-stamp.hypo` (`#ffc94a`), `.npl-stamp.fiction` (`#ff5a2f`). Kotak keras, radius 0, border 4px.
- Pakai `NPL.stamp()` — animasi "dijatuhkan lalu ditahan" adalah bahasa stempel, bukan dekorasi.
  Maksimal satu stempel per beat; jangan di setiap klaim (jadi ramai dan kehilangan bobot).
  Contoh hidup: `s8-labuhan.html` (`#s8-stamp` `.fact`, jatuh bersama garis air di 57.20).
- Komedi: tidak memakai stempel klaim. Suhu kedua ada di palet, bukan di label.

**Garis pemisah fakta ↔ mitos**
- `.npl-waterline` menarik garis saat cerita berpindah dari legenda ke catatan tercatat (atau
  sebaliknya). Satu tarikan garis, sekali, dengan alasan naratif. Bukan hiasan setiap cut.

**Yang tidak berubah antar niche**
- Kamera: default diam, perubahan lewat cut. Deviasi horror (user-approved, 2026-05): boleh slow zoom-in + camera drift deterministik hemat pada wrapper gambar (`NPL.horrorCamera`).
- Tipe adalah gambar: `.npl-hero`/`.npl-section`, satu kata berwarna aksen, tanpa kartu pembungkus.
- Satu sensor visual per video: Horror desaturasi, Komedi jenuh. Jangan dicampur.

## Opening Bait Screen (layar pembuka, ±3 detik)

Layar pembuka bukan "hook 3 detik berisi tipe". Ia adalah **cover/thumbnail yang bergerak**: frame
yang dilihat orang saat video masih diam di feed, sebelum ada klik. Ukur keberhasilannya dari satu
pertanyaan: *kalau frame ini jadi gambar statis, apakah orang berhenti menggulir?*

- **Wajib ada, ±3 detik pertama.** Detik 0–3 adalah layar ini, bukan langsung kronologi.
- **Bait dulu, bukan subjek dulu.** Foto pesawat/gunung/objek adalah **pendukung**, bukan isi
  layar. Kalau yang tampil hanya objeknya ("ini pesawat"), layar gagal. Yang harus dibaca pertama
  adalah **klaim atau pertanyaan yang bikin penasaran**, dengan objek sebagai latar.
  - Benar: "Pesawat ini hilang dari radar. Apa yang terjadi?" + foto pesawat.
  - Salah: foto pesawat + label "Sukhoi Superjet 100".
- **Struktur 3 lapis, maksimal:**
  1. Bait — satu klaim/pertanyaan, **tipe terbesar di film**, ≥56px, maksimal 2 baris.
  2. Jangkar konteks — tanggal / tempat / angka, satu baris kecil, memberi rasa nyata.
  3. Objek — foto/visual kuat mengisi frame, di bawah atau di belakang tipe.
  Tanpa paragraf, tanpa tiga kartu, tanpa daftar.
- **Bait harus jujur.** Pertanyaan yang dijawab video, bukan clickbait yang tidak dibayar.
  Untuk horror: petunjuk nyata (hilang kontak, rute, tanggal) jauh lebih menahan daripada kata
  "mengerikan". Jangan menyatakan mitos sebagai fakta di layar pembuka — tapi mitos bersumber boleh
  jadi subjek bait, asalkan berbentuk "yang diceritakan orang", bukan "yang terjadi".
- **Frame 0 langsung penuh** — foto/gradien kuat + tipe sudah terpasang di frame pertama. Bukan
  hitam, bukan fade-in dari kosong, bukan logo saja.
- **Tidak boleh menduplikasi caption atau tipe scene 1.** Kalau bait sudah mencetak frasa itu,
  grup caption dan tipe scene berikutnya tidak mengulanginya.
- **Handover:** sambung mulus ke scene 1 di detik ke-3 — hard cut atau fade ≤0.4 dtk, tanpa
  lompatan layout yang tak terjelaskan.
- **Terbaca:** bait tampil penuh ≥1.5 dtk, kontras AA terhadap ground.
- Teknis (durasi, pemisahan komposisi, `data-hold`, override bila VO memaksa): `VIDEO-CODE-GUIDE.md` §8.2.

## Subtitle / Caption

- **Desain caption:** teks telanjang di atas *garis air* — tanpa kartu, tanpa kotak, tanpa pill.
  `.npl-cap-line` di `captions.html` menimpa token: background none, border 0, hairline mint 2px di
  bawah frasa (3px untuk baris punch), text-shadow gelap supaya terbaca di atas visual apa pun.
  Caption adalah tulisan di atas bukti, bukan badge mengapung di atasnya.
- **Ukuran Font Caption:** `var(--npl-caption-size)` = 44px / 600 / 1.12 (rentang 42–48px). Jangan
  menulis angka sendiri; baca token.
- **Safe Area:** Tetap menjaga jarak aman dari sisi bawah (TikTok/Reels UI).
- **Gerak:** default cut/fade sederhana. Deviasi horror (user-approved, 2026-05): boleh slow zoom-in + camera drift deterministik pada wrapper gambar, hemat. Tetap hindari slide liar, parallax berat, partikel/SVG kompleks, mikro-gerak kontinu tak bermakna.
- **Relevan:** visual membantu menjelaskan ide, bukan menghiasinya.
- **Hierarki teks:** **caption (sinkron audio notes/VO) adalah teks utama dan terbesar** di layar.
  Teks lain hanya info/label pendukung (konteks, data, nama) — lebih kecil, ringkas, dan ditempatkan
  di atas zona caption agar **tidak tumpang tindih**.
- **Nol duplikasi caption.** Kalau sebuah baris VO sudah tampil sebagai tipe scene (judul, lead,
  kartu, badge, label), **jangan** buat grup caption untuk baris itu. Bukan dipendekkan, bukan
  diparafrase, bukan "dibiarkan biar sinkron" — grupnya dibuang. Dua teks yang sama berbunyi di
  layar bersamaan selalu salah, walau jaraknya jauh. Kekosongan caption selama scene mencetak
  frasanya adalah hasil yang benar. Tes: baca markup scene pada jendela waktu grup, ambil teks
  yang terlihat, bandingkan dengan teks grup — sama atau nyaris sama berarti buang.
  Detail & contoh gagal: `BRAND-SYSTEM.md` §5 butir 4.
- **Caption/subtitle:** wajib ada untuk baris VO yang **tidak** tercetak sebagai tipe scene;
  **sinkron per frasa/key note dengan audio (VO)**, bukan per kata dan tidak diam statis.
  Maksimal 2 baris, 2–7 kata per grup, satu grup tampil pada satu waktu.
  Tipografi caption jelas & menonjol (ukuran dominan, kontras kuat, mudah dibaca). Karaoke kata-per-kata
  dilarang. Gerak caption ringan (fade sederhana). Detail: `BRAND-SYSTEM.md` §5.
- **Pacing:** ritme potongan mengikuti narasi (hook–penjelasan–payoff). Hard cut/fade sederhana
  sebagai transisi utama.
- **Konsistensi:** token warna/tipe dari `video/assets/brand/tokens.css` dan utilitas
  `video/assets/brand/brand.js` bila relevan. Jangan menulis ulang nilai yang sudah ada di token.
- **Watermark:** satu rail vertikal di tepi kanan, dipasang sekali di root, opasitas ≤ .4.
  Isinya symbol (kutip pembuka) + wordmark compact. Symbol ikut aturan `BRAND-SYSTEM.md` §4a.
- **Penutup:** setiap video ditutup dengan signature outro `SINI AKU` / `CERITAIN.` (narasi: “Sini aku ceritain.”) di akhir saja, tahan ≥2 dtk. Teks tetap, jangan diparafrase.
  Teknis: `VIDEO-CODE-GUIDE.md` §4.

## Hindari (anti "AI slop")

- Layout PowerPoint, motion graphics korporat, kartu rounded berisi teks, dashboard statis,
  komposisi tengah yang berulang, kotak pembungkus teks dekoratif.
- Visual stok/generik yang tidak relevan dengan penjelasan.
- Template berulang, transisi/efek klise tanpa fungsi, atau komposisi yang berantakan.
- Teks berlebihan, sulit dibaca, atau tumpang tindih dengan caption.
- **Caption kembar:** grup caption yang mengulang kalimat yang sudah tercetak sebagai tipe
  scene. Ini pelanggaran langsung, bukan sekadar kurang rapi — buang grupnya.
- Animasi berat/berlebihan: slide-slide, pan/zoom/kamera bergerak, blur/scale berlebihan, bounce,
  glitch di setiap cut, mikro-gerak kontinu, partikel/SVG animasi rumit, loop hiasan tanpa fungsi.
- Ikon sains klise: lightbulb, rocket, atom, brain.
- Sensasionalisasi visual yang mendistorsi fakta/klaim/cerita. Horror: dilarang horor ngawang/atmosfer kosong tanpa kronologi-temuan; tanpa glorifikasi/eksploitasi; hindari gore atau visual kekerasan eksplisit-grafis. Visual/teks bantu tampilkan konteks faktual (waktu, tempat, temuan) secara ringkas bila relevan.

## Audio

- Ambient sinematik, pulse synth halus, tension atmosferik, perkusi minimal.
- Mix -14 LUFS integrated, maksimum -1 dBTP, ducking musik 4–8 dB saat VO.
- VO prioritas tertinggi; SFX tidak boleh menutupi narasi; diam sebelum punchline boleh.
- Status aset: cek `video/assets/audio/manifest.json` dan file di disk. Jangan mereferensikan path yang belum ada.

### SFX & ambience horror (wajib mendukung narasi)

- **Perbanyak SFX relevan cerita**, bukan dekorasi acak. Pilih SFX yang tumbuh dari konteks/topik: contoh Nyi Roro Kidul/laut selatan — gamelan Jawa pelan, kenong/gong jarak, ombak, angin pesisir, bel kecil, drone rendah; sesuaikan topik lain (hutan, rumah tua, jalan malam, ritual, dll.). Hindari SFX generik yang tidak nyambung.
- **Layering:** bed/drone rendah kontinu tipis, ambience lokasi, accent/foley, hit/jumpscare terkontrol. Bed ducking saat VO; accent boleh naik di jeda/punchline/payoff.
- **Kontras & timing:** hening 200–400ms sebelum hit/jumpscare meningkatkan kaget. Jumpscare/SFX tajam singkat, terkontrol, tanpa gore/grafis. Jangan menumpuk SFX keras sepanjang durasi.
- **Lisensi:** pakai aset CC0/royalty-free/berlisensi jelas. Catat sumber/lisensi di `video/assets/audio/sfx/LICENSE.txt` atau manifest. Jangan pakai aset lisensi tidak jelas.
- **Narasi tetap utama:** SFX mendukung narasi naskah yang detail, jeda, dan kontras; seram dari fakta/suasana, bukan adjektiva. Styling/visual brand tetap mengikuti sistem SINI AKU CERITAIN.

## Catatan produksi

- Sesuaikan visual dengan script dan hasil fact-check bila ada klaim/cerita (`02-content-system/SCRIPT-TEMPLATE.md`, `02-content-system/FACT-CHECK-CHECKLIST.md`). Horror: berbasis real story (kesaksian/narasumber, fakta sejarah, mitos/legenda daerah), misteri/tegang non-grafis. Label kepastian di Source notes/catatan kaki; di layar/VO hindari disclaimer meta yang mematahkan dread.
- **Visual horror: foto atau lukisan/gravir, dua-duanya boleh.** Pilih yang melayani dread dan konsisten secara tone. Foto = jejak yang tercatat; lukisan/gravir = yang dibayangkan — boleh dipakai untuk beat legenda/mitos. Perlakuan gelap (desaturasi, kontras, vignette, invert untuk etsa) wajib supaya menyatu. Jangan pernah memberi label tempat/orang nyata pada lukisan/gravir yang bukan dokumentasi tempat itu. Lisensi tetap wajib jelas di CREDITS.
- Episode legacy (mis. 1816/pilar lama) tidak ditulis ulang; brand layer dapat ditambahkan di atasnya. Episode baru wajib memakai `--npl-*` dari `tokens.css` (`--npl-komedi-*` / `--npl-horror-*`).
