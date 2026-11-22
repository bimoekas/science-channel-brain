# SINI AKU CERITAIN — Brand & Motion System

Cara memakai identitas ini di setiap video baru. Semua nilai di sini berasal dari file yang
sudah ada di `video/`; dokumen ini menjelaskan cara memakainya, bukan menduplikasinya.

| Kebutuhan | Sumber |
| --- | --- |
| Warna, tipe, spacing, easing | `video/assets/brand/tokens.css` |
| Motion & caption utilities | `video/assets/brand/brand.js` (`window.NPL.*`) |
| Logo | `video/assets/brand/logo-*.svg` |
| Watermark | `video/compositions/brand/watermark.html` |
| Caption rail | `video/compositions/brand/captions.html` |
| Signature outro | `video/compositions/brand/signature-outro.html` |
| Audio identity | `video/assets/audio/manifest.json` |
| Contoh per niche/pillar (legacy) | `video/examples/*.html` |

---

## 1. Wiring — sekali per proyek

`video/index.html` memuat brand layer secara global, lalu me-mount tiga host di root:

```html
<link rel="stylesheet" href="assets/brand/tokens.css">
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
<script src="assets/brand/brand.js"></script>
```

```html
<div class="clip" data-composition-id="watermark" data-composition-src="compositions/brand/watermark.html"
     data-start="0" data-duration="68.6" data-track-index="2" data-track-kind="graphics"></div>
<div class="clip" data-composition-id="captions" data-composition-src="compositions/brand/captions.html"
     data-start="0" data-duration="68.6" data-track-index="4" data-track-kind="captions"></div>
<div class="clip" data-composition-id="signature-outro" data-composition-src="compositions/brand/signature-outro.html"
     data-start="68.6" data-duration="2" data-track-index="5" data-track-kind="graphics"></div>
```

Aturan:

- **Sekali di root, jangan per scene.** Scene tidak boleh menyisipkan watermark atau caption
  sendiri; itu penyebab duplikasi dan watermark ganda.
- `data-start` watermark/caption = `0`, `data-duration` = durasi film dikurangi outro.
- Outro mulai tepat di akhir durasi caption; root `data-duration` = akhir outro.
- Path `data-composition-src` dan `assets/...` **relatif ke root proyek (`video/`)**, bukan ke
  folder file yang mereferensikannya.
- CSS scene di-scope ke `[data-composition-id]`; hanya `index.html` yang global.

---

## 2. Tipografi

Tiga peran, satu keluarga dominan.

| Peran | Font | Berat | Ukuran (1080×1920) | Line-height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Hero | Inter | 900 | 110–150px (`--npl-hero-size` 132) | 0.90 | -0.045em |
| Section title | Inter | 800 | 72–96px (`--npl-section-size` 84) | 0.95 | -0.03em |
| Highlight | Inter | 800 | 56–72px (`--npl-highlight-size` 64) | 1.00 | — |
| Caption | Inter | 500–600 | 42–48px (`--npl-caption-size` 44) | 1.12 | — |
| Small label | Inter | 600 | 24–30px (`--npl-label-size` 28) | 1.10 | +0.04em, uppercase |
| Accent (sparingly) | EB Garamond italic | 400 | inherit | — | -0.01em |

Kelas siap pakai: `.npl-hero`, `.npl-section`, `.npl-highlight`, `.npl-label`,
`.npl-accent` (untuk `<em>`/`<span>` di dalam judul).

**Deviasi yang harus diketahui:** spesifikasi meminta **Instrument Serif** untuk aksen.
Instrument Serif tidak dibundel oleh HyperFrames dan tidak tersedia offline di mesin ini,
sehingga **EB Garamond** (bundled) dipakai sebagai pengganti. Cara menukarnya sudah ditulis
di komentar `tokens.css`: taruh `.woff2` di `assets/fonts/`, tambah `@font-face` di
`index.html`, lalu ubah `--npl-font-accent`.

Bobot yang tersedia: Inter 400/700/900 dibundel; 500/600 diambil dan di-cache oleh runtime.
Jangan memakai 100–300 atau 800 untuk teks panjang — 800 dirender dari 900/700 fallback dan
bisa terlihat berbeda antar-mesin.

Aturan praktis:

- Maksimal satu aksen serif per frame. Kalau semua italic, tidak ada yang italic.
- Jangan menurunkan ukuran label di bawah 24px; di 1080×1920 itu sudah batas baca.
- Teks isi tidak boleh di dalam kartu berbingkai rounded. Tipe itu sendiri adalah gambar.

---

## 3. Warna

Palet inti hitam / off-white / abu netral; aksen hanya untuk makna.

| Token | Nilai | Pakai |
| --- | --- | --- |
| `--npl-black` | `#08080a` | ground utama |
| `--npl-coal` / `--npl-graphite` | `#0f0f12` / `#17171c` | lapisan elevasi gelap |
| `--npl-gray-700` … `--npl-gray-300` | `#2a2a31` … `#b4b2ad` | garis, label, teks sekunder |
| `--npl-gray-200` | `#d6d3cc` | ground terang (opsional, mis. gaya hangat/legacy) |
| `--npl-ink` | `#f5f3ef` | teks utama di ground gelap |
| `--npl-signal` | `#7ed4ff` | data, atmosfer, instrumen |
| `--npl-alert` | `#ff5a2f` | bahaya, erupsi, penekanan keras |
| `--npl-highlight` | `#ffc94a` | reveal, payoff, kata kunci caption |

Niche aktif mengganti dua token, bukan seluruh palet:

- **Komedi:** `--npl-komedi-a` / `--npl-komedi-b` (hangat, playful)
- **Horror:** `--npl-horror-a` / `--npl-horror-b` (misterius, tegang)

Token legacy (arsip/episode lama) tetap tersedia: `--npl-earth-a/b`, `--npl-human-a/b`, `--npl-scifi-a/b`.

Ground tidak harus gelap; suhu visual mengikuti niche. Grammar tipe, watermark, caption, dan motion tetap satu identitas.

---

## 4. Logo & watermark

| Aset | File | Pakai |
| --- | --- | --- |
| Wordmark horizontal | `logo-wordmark.svg` | opening, end card, thumbnail |
| Wordmark compact | `logo-wordmark-compact.svg` | watermark, penempatan kecil |
| Symbol | `logo-symbol.svg` | avatar, watermark, closing lockup |

- Ketiga SVG memakai `font-family="Inter, Helvetica, Arial"`. Karena itu wordmark
  **bergantung pada Inter**; jangan memakai SVG ini di luar proyek yang memuat Inter.
  (Symbol tidak memuat teks — ia satu-satunya aset logo yang aman di luar konteks Inter.)
- Warna di dalam SVG di-hardcode (`#F5F3EF`, `#FF5A2F`). Di atas ground terang, ganti fill
  ke `#08080A` — jangan menaruh wordmark off-white di atas kertas off-white.
- Ukuran minimum symbol: 24px tinggi. Di bawah itu glitch shard hilang.
- **Watermark** = rail vertikal `rotate(90deg)` di `right:34px`, lebar ~30px, opasitas
  `.34`. Ia berada di luar `--npl-margin` 90px, jadi tidak menyentuh kartu, tipe, atau
  caption. Jangan menaikkan opasitas di atas `.4` — itu mulai terbaca sebagai UI.
- Watermark fade-in pada 1.4s supaya hook pembuka bersih. Pertahankan.

### 4a. Symbol (ikon) — kutip pembuka

**Makna.** Kutip pembuka berarti "ada orang yang sedang berbicara". Itu janji channel ini.
Tanda tanya ditolak: ia ikon FAQ/bantuan, dan klise nomor satu kanal misteri — ia menanyakan
cerita, bukan menceritakan.

**Konstruksi — `logo-symbol.svg`, viewBox `0 0 64 64`, tanpa stroke, semua `fill`.**

Dua blok kutip identik, tebal, miring 6px ke kanan dari atas ke bawah. Kutip kanan dipotong
`signal break`: bagian bawahnya terlepas dan bergeser +4px, diberi warna aksen.

| Bagian | Bentuk | Koordinat (polygon, x/y) | Fill |
| --- | --- | --- | --- |
| Kutip kiri | trapesium miring | `12,16 28,16 34,38 18,38` | `#F5F3EF` |
| Kutip kanan (atas) | trapesium miring, dipotong di y32 | `36,16 52,16 56,32 40,32` | `#F5F3EF` |
| Pecahan (bawah) | potongan yang terlepas, geser +4px | `44,36 60,36 63,44 47,44` | `#FF5A2F` |

- Jarak bebas: minim 6px dari tepi kiri/kanan viewBox, 16px dari atas, 20px dari bawah.
- Dua tinta saja. Jangan menambah bayangan, gradien, outline, atau sudut bulat.

**Ukuran & penempatan.**

| Pakai | Tinggi | Catatan |
| --- | --- | --- |
| Avatar / profil platform | penuh | isi kanvas, jangan tambah teks |
| Closing lockup (outro) | 88px | kanan bawah, `--npl-margin` dari tepi |
| Watermark | 30px | bagian dari rail, opasitas `.34` |
| Minimum absolut | 24px | di bawah ini pecahan aksen menyatu dengan kutip kanan |

**Larangan ikon.** Tanda tanya, lightbulb, rocket, atom, brain, mata, hantu, tengkorak, jam
pasir, teleskop, kaca pembesar, pin lokasi. Semuanya ikon klise yang sudah dipakai ribuan
kanal misteri — tidak membedakan apa pun.

**Bila mengganti symbol:** ganti `logo-symbol.svg` saja. Wordmark, watermark, dan outro
memuat file itu lewat `<img>`, jadi tidak ada markup yang perlu disentuh.

---

## 5. Caption — aturan permanen

**Sinkronisasi per frasa, bukan per kata. Karaoke kata-per-kata dilarang.**

Aturan yang mengikat setiap video:

1. Maksimal **2 baris** per grup, **2–7 kata** per grup.
2. Segmen mengikuti frasa alami bahasa Indonesia, bukan potongan mekanis.
3. Satu grup tampil pada satu waktu. Tidak ada dua caption bersamaan.
4. **Nol duplikasi: caption tidak boleh mengulang teks yang sudah tercetak di scene.** Ini
   aturan keras, bukan preferensi. Kalau sebuah baris VO sudah tampil sebagai tipe scene
   (judul, lead, kartu, badge, label), grup caption untuk baris itu **dibuang seluruhnya** —
   tidak dipendekkan, tidak diparafrase, tidak dipertahankan "biar sinkron". Dua teks identik
   di layar pada saat yang sama selalu salah, sekalipun posisinya berjauhan.

   **Tes wajib sebelum menambah grup caption:**
   - Baca markup scene yang aktif pada jendela waktu grup itu.
   - Ambil teks yang terlihat (bukan komentar, bukan `alt`, bukan kredit).
   - Bandingkan dengan teks grup. Sama? Buang grupnya. Hampir sama (hanya beda partikel,
     sinonim, atau urutan)? Tetap buang — pembaca melihatnya sebagai pengulangan.
   - Scene boleh mencetak frasa kunci dari baris itu; caption lalu **diam** untuk jendela
     tersebut. Kekosongan caption bukan cacat; pengulangan yang cacat.

   Contoh nyata kegagalan: di `s6-payoff`, `#lead` mencetak "Yang mencekam bukan kabutnya,
   tapi batas yang jelas." sementara `cap-15` mencetak kalimat yang sama persis. Yang benar:
   `#lead` mencetak kalimat itu, grup caption-nya tidak ada.
5. Highlight maksimal satu frasa per grup (`.npl-cap-key`), warna `--npl-highlight`;
   `.warm` untuk `--npl-alert`.
6. Entrance 120–180ms, opacity + y 14px, `power2.out`. Tanpa bounce.
7. Keluar keras 0.1s sebelum slot berakhir, lalu `visibility:hidden`. Jangan biarkan grup
   basi menumpuk.
8. Timing mengikuti timestamp VO eksplisit — jangan menebak dari durasi kalimat.

Implementasi: tulis markup, panggil `NPL.captions(tl, "#cap-host")`.

```html
<div class="npl-cap" id="cap-07" data-cap-start="46.50" data-cap-duration="1.20">
  <span class="npl-cap-line">Dan ini bagian</span>
</div>
```

Pakai `data-cap-*`, bukan `data-start`/`data-duration`: dua atribut itu milik kontrak clip
HyperFrames, dan grup caption bukan clip.

Posisi default `top:1300px`, kiri-kanan `--npl-margin`. Zona aman bawah 600px tetap kosong
untuk UI platform. Caption tidak boleh menutupi subjek utama; geser `top` per scene bila
perlu.

**Catatan timing:** timestamp saat ini diukur dari `voiceover.mp3` (68.597s) memakai
`ffmpeg silencedetect -32dB/0.25s`. Setelah VO diregenerasi (termasuk penutup), ukur ulang.
`hyperframes transcribe` tidak dipakai: default-nya `small.en`/`--language en` dan akan
menerjemahkan Bahasa Indonesia; whisper.cpp crash (SIGABRT) di mesin ini.

---

## 6. Motion

### REALITY SKIP

Transisi khas kanal, dipakai pada distorsi realitas yang signifikan — **bukan setiap cut**.

Urutan (total ~0.42s):

1. Micro-freeze (`steps(1)`) — frame membeku sesaat.
2. Pergeseran horizontal dua tahap ke arah berlawanan.
3. RGB channel separation lewat dua `drop-shadow` merah/cyan.
4. Mask organik atau hard cut.
5. Static tick — band scan `steps(7)` melintasi frame.

Panggilan:

```js
NPL.realitySkip(tl, { at: 4.3, target: "#eg-globe", layer: "#eg-skip", punch: 22 });
```

`layer` harus elemen `.npl-skip` berisi `.npl-skip-band` (merah dan/atau cyan).

### Hierarki transisi

| Urutan | Jenis | Kapan |
| --- | --- | --- |
| 1 (utama) | Hard cut | default; sebagian besar pergantian |
| 2 | Match cut | bentuk/gerak yang sama di dua scene |
| 3 | Organic mask wipe | perpindahan ruang/waktu |
| 4 | Whip pan | eskalasi cepat |
| 5 (cadangan) | Glitch flash / Reality Skip | hanya momen distorsi realitas |

### Easing standar

| Token | GSAP | Pakai |
| --- | --- | --- |
| `NPL.EASE.camera` | `power2.inOut` | push, pan, zoom |
| `NPL.EASE.type` | `power3.out` | reveal tipe |
| `NPL.EASE.enter` | `back.out(1.4)` | entrance objek |
| `NPL.EASE.exit` | `power2.in` | exit dramatis |
| `NPL.EASE.comic` | `elastic.out(1,0.5)` | bounce komedi, **jarang** |

### Utilities

- `NPL.reveal(tl, sel, at, {y, blur, duration, stagger})` — tipe masuk.
- `NPL.enter(tl, sel, at, {scale, y, origin, duration})` — objek masuk.
- `NPL.exit(tl, sel, at, {y, blur, duration})` — keluar.
- `NPL.drift(tl, sel, duration, {x, y})` — mikro-gerak kontinu.
- `NPL.rng(seed)` — PRNG deterministik (Lehmer). Satu-satunya sumber acak yang diizinkan.

Semua mengembalikan tween, semua deterministik, semua memakai `fromTo` dengan state awal
di tween.

---

## 7. Komposisi

Setiap scene adalah frame film.

**Wajib:** full-bleed, asimetris, kedalaman FG/MG/BG, skala dan perspektif yang berubah,
kamera yang punya alasan, metafora visual (bukan ikon generik), dan satu titik fokus per beat.

**Dilarang:** layout PowerPoint, motion graphics korporat, kartu rounded berisi teks,
dashboard statis, komposisi tengah berulang, kotak pembungkus teks dekoratif.

Praktik yang sudah terbukti di contoh:

- Tipe besar sebagai gambar utama, bukan label di atas gambar.
- Elemen dekoratif (vignette, grain, grid) di-track terpisah dengan
  `data-layout-allow-occlusion` supaya tidak dianggap menutupi teks.
- Angka/data sebagai objek grafis dengan skala besar, bukan tabel.
- Noise/grain bergerak `steps(...)` agar hidup tanpa motion spam.

---

## 8. Audio

Kebenaran status: **belum ada satu pun aset audio di repo.** `video/assets/audio/` hanya
berisi `manifest.json`. Semua entri berstatus `missing` dengan `path: null` atau path yang
belum ada di disk. Jangan mereferensikannya di komposisi sampai file-nya benar-benar ada.

Target mix (dari manifest):

- Integrated loudness **-14 LUFS**, true peak maksimum **-1 dBTP**.
- VO prioritas tertinggi.
- Music ducking **4–8 dB** selama VO.
- SFX tidak boleh menutupi narasi.
- Diam yang disengaja sebelum punchline diperbolehkan dan dianjurkan.

Signature sound: **0.5–0.8s** — signal chirp + low-frequency impact + tape-stop/static tail.
Dipakai oleh Reality Skip dan signature outro.

Palet SFX per niche (deskriptif, belum ada file):

| Niche | Karakter |
| --- | --- |
| Komedi | dry pop, tick, rubber bounce, tape stop, aksen komedi, jeda sebelum punchline |
| Horror | low drone, subtle rumble, distant creak, static crackle, reverse swell, tension hit, intentional silence |

Palet legacy (`earth-glitch`, `human-madness`, `sci-fi-parody`) tetap tercatat di `manifest.json` untuk arsip.

Musik: ambient sinematik, pulse synth halus, tension atmosferik, perkusi minimal.

**Lisensi:** jangan memakai musik atau SFX berhak cipta tanpa lisensi. Catat sumber dan
lisensi per file di `manifest.json` (`licensing.sources`) sebelum dipakai.

---

## 9. Signature outro

`video/compositions/brand/signature-outro.html` — 2,3 detik, reusable.

Urutan:

1. `SINI AKU` — kinetic type, `power3.out`, 0.42s.
2. `CERITAIN.` — scale overshoot terkendali `back.out(1.4)`, mulai 0.18s.
3. Symbol tanda tanya — `back.out(1.7)`, mulai 0.42s.
4. Rule gradien `--npl-alert` → `--npl-highlight` tergambar 0.34s.
5. Audio sting (saat aset tersedia).
6. Kamera push halus sepanjang 2s, lalu fade keluar 0.22s.

Aturan:

- Teks **tidak boleh diparafrase**. Narasi: `Sini aku ceritain.` / lockup: `SINI AKU` / `CERITAIN.`
- Outro tidak boleh memakan hook pembuka: mount setelah scene terakhir selesai.
- Ini bukan layar "subscribe" generik. Tanpa tombol, tanpa ikon sosial, tanpa CTA.
- Penutup juga diucapkan di VO (`content/current/voiceover.md`), bukan hanya di layar.
- Jika outro dipakai di video yang lebih pendek, ubah `data-duration` host-nya, bukan
  timeline internal.

---

## 10. Checklist sebelum serah (preview)

- [ ] `npm run check` → 0 error.
- [ ] Font: tidak ada family di luar Inter / EB Garamond tanpa `@font-face`.
- [ ] Wordmark terbaca pada ukuran penempatannya; warna cocok dengan ground.
- [ ] Symbol = kutip pembuka (§4a), bukan tanda tanya atau ikon klise; tinggi ≥24px;
      pecahan aksen masih terbaca.
- [ ] Watermark ada, opasitas ≤ .4, tidak menyentuh konten.
- [ ] **Opening bait screen ±3 dtk di awal**: bait (klaim/pertanyaan) + jangkar konteks, foto objek
      hanya latar — frame tetap menarik bila dijadikan thumbnail statis. Tipe terbesar, frame 0
      terisi, handover cut/fade ≤0.4 dtk ke scene 1, tidak mengulang caption atau tipe scene 1.
- [ ] Caption ≤ 2 baris, 2–7 kata. **Nol duplikasi** — tidak ada grup caption yang mengulang
      teks tipe scene yang tampil pada jendela waktu yang sama. Diperiksa per grup, bukan sekilas.
- [ ] Timing caption cocok dengan VO aktual.
- [ ] Reality Skip dipakai pada momen yang tepat, bukan setiap cut.
- [ ] Tidak ada `Date.now()`, `Math.random()`, `repeat:-1`, `tl.play()`.
- [ ] Tidak ada path audio yang belum ada di disk.
- [ ] Outro memakai teks penutup yang benar (`Sini aku ceritain.`).
- [ ] Snapshot frame di momen yang diedit sudah dibaca, bukan hanya check lulus.
