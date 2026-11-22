# ElevenLabs Voice Guide

## Approved constraints

- Narasi harus menjaga makna tetap utuh dan akurat; jika ada klaim/fakta, sesuaikan kepastian dengan bukti.
- Narasi harus ekspresif dan terasa manusiawi; hindari kesan "AI slop" (datar, generik, atau seperti bacaan robot).
- Durasi target video: 70–90 detik (sesuaikan pace narasi).
- Audiens: 18+ (dewasa), bukan semua umur; penyampaian jelas dan ditujukan untuk audiens dewasa. Horror: tegang/atmosferik dan tema dewasa/gelap boleh, tanpa glorifikasi kekerasan/pelaku; hindari deskripsi kekerasan/gore eksplisit-grafis.

> **Fallback:** bila kuota ElevenLabs habis, baca `GEMINI-TTS-VOICE-GUIDE.md`. Aturan isi VO di
> dokumen ini tetap berlaku; hanya cara mengarahkan delivery dan voice-nya yang berbeda. Voice
> Gemini dipilih per episode dan tidak menggantikan voice fixed di bawah.

## Voice & Model (fixed)

- **Model:** **Eleven v4** (`eleven_v4`) — kualitas tertinggi, akurasi suara, audio tags generasi baru, dan natural multilingual delivery (90+ bahasa termasuk Indonesia `id`).
- **Selected voice:** **Gadis - Cheerful Indonesian** (ElevenLabs, perempuan, Bahasa Indonesia) — hangat, natural, ekspresif, cocok untuk narasi konten.
- **Voice ID:** `aMSt68OGf4xUZAnLpTU8`
- **Language and accent:** Bahasa Indonesia, aksen Indonesia umum (general). Eleven v4 menghasilkan bahasa target secara alami dan fasih.

## Pengaturan Model di Eleven v4

> **Penting (Perubahan v4):** Slider *Style Exaggeration* dan *Speed* **tidak tersedia** di Eleven v4. Pacing dikendalikan sepenuhnya melalui struktur teks, tanda baca, dan audio tags.
> Pengaturan v4 hanya menggunakan 2 slider utama:

- **Stability:** `40% - 50%` (nilai lebih rendah memberi delivery lebih ekspresif dan dinamis; hindari terlalu tinggi agar tidak kaku).
- **Similarity:** `75% - 85%` (menjaga karakter vokal asli tetap kuat tanpa mengorbankan naturalitas).
- **Clone Strength (Khusus PVC):** `0%` (default, fleksibilitas performa optimal).
- **No SSML:** Tag `<break time="..."/>` dan XML SSML **tidak didukung** di v4. Gunakan audio tags `[...]` dan elipsis `...`.

## Penutup (fixed)

- Setiap VO diakhiri kalimat tetap: **"Sini aku ceritain."**
- Teks tidak diparafrase dan tidak diterjemahkan. Jeda satu beat sebelum penutup (elipsis atau baris baru), setelah kalimat closing selesai.
- Delivery: hangat, jelas, mengajak; bercerita padat dan penuh isi, tetap untuk audiens dewasa (18+). Horror/seram: bisa lebih pelan, rendah, berbisik — mis. tag `[whispers]`, `[low, hushed, eerie]`, atau `[soft, ominous]` (uji dengan voice). Jangan terdengar seperti iklan.
- Tambahkan ±2,5–3 dtk ke durasi VO. Sesuaikan timing video setelah audio final diukur.
- Penutup juga muncul di layar sebagai signature outro
  (`video/compositions/brand/signature-outro.html`), bukan hanya di audio. Keduanya harus
  sinkron: saat VO penutup selesai direkam, ukur waktu mulainya lalu geser
  `data-start` host `signature-outro` di `video/index.html` ke titik itu.

**Status audio saat ini:** `video/voiceover.mp3` (68,597 dtk) adalah take **sebelum** penutup baru
ditambahkan. Outro di komposisi saat ini berjalan setelah VO selesai (68,6–70,9 dtk) dan
belum sinkron dengan suara. Setelah VO di-generate ulang dengan penutup, ukur ulang durasi
dan timing.

## Penyampaian

- **Pace:** Tempo sedang dan jelas, nyaman didengar untuk audiens dewasa (18+), cukup untuk inti 70–90 detik. Variasikan ritme secara natural (jeda bermakna, penekanan pada momen penting) agar tidak monoton; tempo tidak terburu-buru dan sesuai caption.
- **Intonation:** Natural, ramah, dan hidup; sesuaikan nada dengan konteks (rasa ingin tahu, kejutan ringan, penegasan ilmiah) tanpa berlebihan. Tekankan kata kunci/istilah penting secukupnya.
- **Horror (Misteri, Real Story) — wajib seram/tegang, runut faktual (ringkas, ala storyteller misteri tenang-dingin):** narator **tenang, dingin, terkontrol** (bukan histeris/dramatis berlebihan). Susun **runut**: buka fakta/konteks → **kronologi** jelas → **temuan/keterangan** (apa yang ditemukan/tercatat) → pisahkan **mitos/cerita beredar**. Tiap kalimat membawa informasi; **seram/mencekam lahir dari detail nyata & kontras fakta**, bukan dari kata-kata seram/atmosfer kosong yang ngambang. Tetap **ringkas (70–90 dtk)**, jelas, dan jujur soal tingkat kepastian/sumber. Gunakan tempo lebih pelan, nada rendah/berbisik, jeda menggantung, dan audio tags secukupnya (mis. `[low, hushed, eerie]`, `[whispers]`, `[ominous]`, `[tense]`, `[measured, cold]`, `[slow, uneasy]`) sesuai karakter voice. Hormati korban/keluarga/masyarakat/kepercayaan; tanpa glorifikasi; hindari deskripsi gore/kekerasan eksplisit-grafis atau sensasionalisasi yang menyesatkan.
- **Target kemencekan (horror, wajib dicek sebelum render):** tingkat "seram" harus cukup untuk menahan scroll, bukan sekadar nada rendah.
  - **Kalimat pendek, bukan paragraf.** Satu kalimat = satu fakta. Pecah kalimat panjang jadi 2–3 baris di VO; fragmentasi lebih mencekam daripada kalimat rapi.
  - **Turunkan volume di ujung kalimat.** Akhiri kalimat penting dengan nada turun/hampir berbisik, bukan naik. Tag `[low, hushed]` sebelum kalimat penutup beat.
  - **Jeda menggantung sebelum detail kunci.** Pakai elipsis atau `[slow pause]` tepat *sebelum* fakta paling berat (nama, tanggal, lokasi, temuan), bukan sesudahnya.
  - **Sebut detail konkret, jangan menaikkan intensitas kata.** Ganti "sangat mengerikan" → nama tempat, tanggal, nama naskah, angka. Mencekam = informasi, bukan adjektiva.
  - **Kontras nada, bukan nada rata.** Beat fakta = datar-cold. Beat cerita/mitos = hushed, setengah berbisik. Beat pemisah = pelan dan tegas. Tanpa kontras, audio terdengar monoton walau nadanya rendah.
  - **Tutup beat dengan hening.** Beri `[long pause]` 1–2 dtk sebelum payoff; tanpa hening, payoff tidak mencekam.
  - **Uji telinga:** dengarkan utuh dengan mata tertutup. Kalau tidak ada satu titik yang bikin merinding, VO belum siap — revisi teks/jeda, jangan tambah tag.
  - **Batas:** kemencekan dari struktur & detail nyata. Tetap tanpa sensasionalisasi, tanpa glorifikasi, tetap hormati korban/kepercayaan.
- **Tangga tag kemencekan (horror).** Tag bukan enum tertutup — dokumentasi ElevenLabs menyebut daftarnya *non-exhaustive*, dan frasa deskriptif panjang lebih kuat daripada satu kata. Pilih per beat, jangan pakai semua:
  - **Datar/dingin (fakta, naskah, angka):** `[measured, cold]`, `[deadpan]`, `[flat, clinical]`, `[matter-of-fact, unsettling]`.
  - **Turun/berbisik (mitos, larangan, cerita beredar):** `[low, hushed]`, `[whispers]`, `[hushed, close mic]`, `[softly, almost inaudible]`.
  - **Tegang (momen kritis, hilang kontak, puncak kronologi):** `[building tension, measured pace]`, `[low, steady voice, restrained urgency]`, `[tense, unmoving]`, `[slow, uneasy]`.
  - **Seram/dingin-final (pemisah fakta-vs-mitos, payoff):** `[ominous, soft]`, `[cold, final]`, `[eerie, detached]`.
  - **Frasa deskriptif (paling kuat, pakai hemat — 1–2 per VO):** `[Quietly, with controlled fear]`, `[calm delivery of something wrong]`, `[low, gravelly voice]`, `[Softening, reflective]`.
  - **Non-verbal (jeda bernapas, bukan efek suara):** `[exhales]`, `[swallows]`, `[inhales deeply]`, `[short pause]`, `[long pause]`.
  - **Aturan pakai:** maksimal satu tag per kalimat; tag di awal baris; sisakan beberapa baris tanpa tag (datar) supaya kontrasnya terasa; jangan tumpuk 3+ deskriptor dalam satu bracket; tulis spesifik ke kualitas suara agar tidak dibaca sebagai efek suara (`[pacing]`, `[standing]`, `[music]` dinyatakan tidak berfungsi).
  - **Verifikasi:** dokumentasi ElevenLabs mencantumkan audio tags eksplisit untuk *Eleven v4 Turbo* dan *v3 Conversational* — belum tentu identik di `eleven_v4` biasa. Uji tag baru dengan voice Gadis sebelum dipakai produksi; perilaku tag bergantung voice.
- **Pronunciation rules:** Ucapkan istilah sains dengan jelas; konsisten untuk nama/istilah asing; siapkan catatan pelafalan per script bila perlu (termasuk singkatan dan angka/satuan).
- **Prohibited delivery traits:** Hindari nada merendahkan, sarkastik berlebihan, atau terlalu cepat; hindari penyampaian yang membuat klaim/cerita terdengar lebih pasti daripada buktinya. Hindari ciri AI slop: nada datar/monoton, ritme repetitif mekanis, jeda/penekanan tidak alami, dan penyampaian generik tanpa nuansa.

## Best practices prompting (ElevenLabs v4)

- **No SSML `<break>`:** v4/v3 tidak mendukung `<break time="..."/>`. Atur jeda/pacing lewat struktur teks, pemenggalan kalimat/baris, tanda baca, dan elipsis (`…`/`...`).
- **Audio tags:** gunakan secukupnya untuk arah ekspresi/penyampaian (contoh: `[curious]`, `[excited]`, `[thoughtful]`, `[whispers]`, `[laughs]`, `[sighs]`); tulis spesifik ke kualitas suara, cocok dengan karakter voice, dan uji hasilnya. Hindari tag berlebihan/ambigu (bisa terbaca sebagai efek suara).
- **Tanda baca & penekanan:** elipsis memberi jeda/bobot; kapitalisasi seperlunya untuk penekanan; tanda baca standar menjaga ritme alami.
- **Pace:** Speed `1.04` + gaya penulisan naratif dan pemenggalan kalimat; hindari kalimat terlalu panjang/rapat agar tempo tidak terburu-buru.
- **Pelafalan & normalisasi teks:** tulis angka, satuan, singkatan, dan istilah agar mudah diucap (contoh: `tiga ratus ribu kilometer per detik`, `tiga ratus empat puluh tiga meter per detik`, `sekitar tiga detik`, `satu kilometer`). Untuk kasus khusus, v4 mendukung IPA dibungkus garis miring, mis. `"/.../"` (uji dengan voice terpilih).
- **Iterasi:** uji phrasing/tag dan pilih hasil terbaik; hasil bisa bervariasi per voice/kalimat.

## Catatan produksi

- Lakukan uji sampel audio 70–90 detik dan verifikasi kejelasan, ekspresi/naturality, serta kesesuaian makna/klaim. (Uji dilakukan di luar repo/tool ini.)
- Simpan audio final di luar repo; catat tautan/status di repo bila perlu.
