# ElevenLabs Voice Guide

## Approved constraints

- Narasi harus menjaga makna ilmiah tetap utuh dan akurat.
- Narasi harus ekspresif dan terasa manusiawi; hindari kesan "AI slop" (datar, generik, atau seperti bacaan robot).
- Durasi target video: 25–60 detik (sesuaikan pace narasi).
- Audiens: semua umur (universal); penyampaian harus jelas dan aman lintas usia.

## Voice (fixed)

- **Selected voice:** **Gadis - Cheerful Indonesian** (ElevenLabs, perempuan, Bahasa Indonesia) — hangat, natural, ekspresif, cocok untuk narasi sains.
- **Voice ID:** `aMSt68OGf4xUZAnLpTU8`
- **Language and accent:** Bahasa Indonesia, aksen Indonesia umum (general).

## Pengaturan (fixed)

- **Speed:** `1.04`
- **Stability:** `Creative`
- **Similarity:** `85`
- **Style Exaggeration:** `0`
- **Speaker boost:** `On`

## Tagline penutup (fixed)

- Setiap VO diakhiri kalimat tetap: **"Penting ga penting, jawabnya serius."**
- Teks tidak diparafrase dan tidak diterjemahkan. Jeda satu beat sebelum tagline (elipsis atau baris baru), setelah kalimat closing selesai.
- Delivery: santai, sedikit jenaka, tidak ditekan keras; tetap jelas dan aman semua umur. Jangan terdengar seperti iklan.
- Tambahkan ±2,5–3 dtk ke durasi VO. Sesuaikan timing video setelah audio final diukur.
- Tagline juga muncul di layar sebagai signature outro
  (`video/compositions/brand/signature-outro.html`), bukan hanya di audio. Keduanya harus
  sinkron: saat VO tagline selesai direkam, ukur waktu mulainya lalu geser
  `data-start` host `signature-outro` di `video/index.html` ke titik itu.

**Status audio saat ini:** `video/voiceover.mp3` (68,597 dtk) adalah take **sebelum** tagline
ditambahkan. Outro di komposisi saat ini berjalan setelah VO selesai (68,6–70,9 dtk) dan
belum sinkron dengan suara. Setelah VO di-generate ulang dengan tagline, ukur ulang durasi
dan timing.

## Penyampaian

- **Pace:** Tempo sedang dan jelas, nyaman untuk semua umur, cukup untuk inti 25–60 detik. Variasikan ritme secara natural (jeda bermakna, penekanan pada momen penting) agar tidak monoton; tempo tidak terburu-buru dan sesuai caption.
- **Intonation:** Natural, ramah, dan hidup; sesuaikan nada dengan konteks (rasa ingin tahu, kejutan ringan, penegasan ilmiah) tanpa berlebihan. Tekankan kata kunci/istilah penting secukupnya.
- **Pronunciation rules:** Ucapkan istilah sains dengan jelas; konsisten untuk nama/istilah asing; siapkan catatan pelafalan per script bila perlu (termasuk singkatan dan angka/satuan).
- **Prohibited delivery traits:** Hindari nada merendahkan, menakut-nakuti, sarkastik berlebihan, atau terlalu cepat; hindari penyampaian yang membuat klaim terdengar lebih pasti daripada buktinya. Hindari ciri AI slop: nada datar/monoton, ritme repetitif mekanis, jeda/penekanan tidak alami, dan penyampaian generik tanpa nuansa.

## Best practices prompting (ElevenLabs v4)

- **No SSML `<break>`:** v4/v3 tidak mendukung `<break time="..."/>`. Atur jeda/pacing lewat struktur teks, pemenggalan kalimat/baris, tanda baca, dan elipsis (`…`/`...`).
- **Audio tags:** gunakan secukupnya untuk arah ekspresi/penyampaian (contoh: `[curious]`, `[excited]`, `[thoughtful]`, `[whispers]`, `[laughs]`, `[sighs]`); tulis spesifik ke kualitas suara, cocok dengan karakter voice, dan uji hasilnya. Hindari tag berlebihan/ambigu (bisa terbaca sebagai efek suara).
- **Tanda baca & penekanan:** elipsis memberi jeda/bobot; kapitalisasi seperlunya untuk penekanan; tanda baca standar menjaga ritme alami.
- **Pace:** Speed `1.04` + gaya penulisan naratif dan pemenggalan kalimat; hindari kalimat terlalu panjang/rapat agar tempo tidak terburu-buru.
- **Pelafalan & normalisasi teks:** tulis angka, satuan, singkatan, dan istilah agar mudah diucap (contoh: `tiga ratus ribu kilometer per detik`, `tiga ratus empat puluh tiga meter per detik`, `sekitar tiga detik`, `satu kilometer`). Untuk kasus khusus, v4 mendukung IPA dibungkus garis miring, mis. `"/.../"` (uji dengan voice terpilih).
- **Iterasi:** uji phrasing/tag dan pilih hasil terbaik; hasil bisa bervariasi per voice/kalimat.

## Catatan produksi

- Lakukan uji sampel audio 25–60 detik dan verifikasi kejelasan, ekspresi/naturality, serta makna ilmiah. (Uji dilakukan di luar repo/tool ini.)
- Simpan audio final di luar repo; catat tautan/status di repo bila perlu.
