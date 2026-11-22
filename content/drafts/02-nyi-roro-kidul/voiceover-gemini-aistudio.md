# Paste ke AI Studio — Nyi Roro Kidul (Gemini TTS)

Model: **Gemini 3.8 Flash TTS** (atau Flash-Lite TTS). Bahasa Indonesia terdeteksi otomatis.
Voice: uji satu per satu — **Enceladus**, **Algenib**, **Gacrux**, **Schedar**. Pilih yang paling dingin.

---

## A. Versi satu-tembak (coba ini dulu)

### Style instructions

```
deadpan, quiet, unsettling, cold narrator voice, low pitch, flat intonation, low volume, speaking slowly, measured and unhurried, confiding
```

Cadangan kalau hasilnya masih terlalu ramah: tambah `detached`, `hollow`, `slightly broken voice`. Cadangan kalau terlalu datar: tambah `ominous`, `barely above a whisper`.

Jika AI Studio hanya punya satu kotak teks: tulis blok style itu sebagai baris pertama script, lalu baris kosong, lalu transkrip. Risikonya kecil terbaca suara — kalau terbaca, hapus dan pindahkan ke kolom style.

### Script

```
Di pantai selatan, ada aturan tak tertulis. JANGAN pakai baju hijau.

<long pause>
<long pause>

Katanya, itu warna kesukaan sang ratu.

<long pause>
<long pause>

Namanya Nyi Roro Kidul. Penguasa laut selatan. Tapi ceritanya... tidak satu versi.

Ada yang menyebutnya Dewi Kadita. Putri Pajajaran. Dikutuk ibu tiri. Diusir... lalu menghilang ke dalam air.

<long pause>
<long pause>

Ada versi lain. Kulitnya rusak. Ia berkelana ke selatan. <long pause> <long pause> Ombak besar datang... dan ia tak kembali.

<long pause>
<long pause>

Dua sosok, satu nama. Dalam kepercayaan Jawa, mereka dua. Nyi Roro Kidul... dan Kanjeng Ratu Kidul.

<long pause>

Yang tercatat, bukan sosoknya. Tapi yang mereka lakukan setiap tahun.

<long pause>
<long pause>

Keraton Yogyakarta melabuh sesaji ke Pantai Parangkusumo. Kain. Kemben hijau. Sebagian dikubur di pasir hitam... tepat di atas garis air.

<long pause>
<long pause>

Naskah lama juga menyebutnya. <long pause> <long pause> Babad Tanah Jawi. <short pause> <short pause> Babad Dipanegara. <short pause> <short pause> Serat Centhini. <short pause> <breath> Dan satu kursi di Surakarta... kosong.

<long pause>
<long pause>

Di sini batasnya. Yang tersisa adalah legenda. Bukan klaim yang bisa dibuktikan.

Larangan baju hijau itu sendiri... lebih banyak beredar sebagai cerita.

<long pause>
<long pause>

Yang mencekam bukan ombaknya. Tapi satu cerita yang bertahan ratusan tahun.

<long pause>
<long pause>

Sini aku ceritain.
```

Cek setelah generate: durasi 70–90 dtk, benar-benar berbisik di baris "Katanya, itu warna kesukaan sang ratu", tidak ada nada naik di ujung kalimat, penutup "Sini aku ceritain." tetap datar.

---

## B. Versi per-segmen (kalau A terdengar rata)

Generate satu per satu, ganti `Style instructions` tiap blok, unduh tiap hasil, sambung di editor (atau beri jeda 1–1,5 dtk antar segmen). Ini satu-satunya cara mendapat kontras nada antar beat secara andal.

**1 — hook**
Style: `deadpan, unsettling, low volume, low pitch, speaking slowly, flat intonation`
```
Di pantai selatan, ada aturan tak tertulis. JANGAN pakai baju hijau.
```

**2 — larangan**
Style: `whispering, almost inaudible, intimate, close mic, very slow`
```
Katanya, itu warna kesukaan sang ratu.
```

**3 — nama**
Style: `low pitch, steady, measured, unhurried, no drama`
```
Namanya Nyi Roro Kidul. Penguasa laut selatan. Tapi ceritanya... tidak satu versi.
```

**4 — versi satu**
Style: `flat, clinical, detached, monotone, even pace`
```
Ada yang menyebutnya Dewi Kadita. Putri Pajajaran. Dikutuk ibu tiri. Diusir... lalu menghilang ke dalam air.
```

**5 — versi dua**
Style: `whispering, soft, almost inaudible, slow`
```
Ada versi lain. Kulitnya rusak. Ia berkelana ke selatan. <long pause> Ombak besar datang... dan ia tak kembali.
```

**6 — dua nama**
Style: `cold, measured, honest, slow, deliberate`
```
Dua sosok, satu nama. Dalam kepercayaan Jawa, mereka dua. Nyi Roro Kidul... dan Kanjeng Ratu Kidul.
```

**7 — pivot**
Style: `tense, unmoving, very slow, low volume, flat ending`
```
Yang tercatat, bukan sosoknya. Tapi yang mereka lakukan setiap tahun.
```

**8 — labuhan**
Style: `flat, clinical, measured, deliberate`
```
Keraton Yogyakarta melabuh sesaji ke Pantai Parangkusumo. Kain. Kemben hijau. Sebagian dikubur di pasir hitam... tepat di atas garis air.
```

**9 — naskah**
Style: `cold, deliberate, hushed, low volume`
```
Naskah lama juga menyebutnya. <long pause> Babad Tanah Jawi. <short pause> Babad Dipanegara. <short pause> Serat Centhini. <short pause> Dan satu kursi di Surakarta... kosong.
```

**10 — batas**
Style: `cold, measured, honest, slow, firm, unthreatening`
```
Di sini batasnya. Yang tersisa adalah legenda. Bukan klaim yang bisa dibuktikan.
```

**11 — pengakuan**
Style: `quiet, controlled, faint unease, speaking very slowly`
```
Larangan baju hijau itu sendiri... lebih banyak beredar sebagai cerita.
```

**12 — payoff**
Style: `calm, deeply wrong, almost whispered, slow, steady, unhurried`
```
Yang mencekam bukan ombaknya. Tapi satu cerita yang bertahan ratusan tahun.
```

**13 — penutup (fixed, jangan diubah)**
Style: `eerie, detached, hushed, barely above a whisper, flat ending`
```
Sini aku ceritain.
```

---

## Dimensi ekspresi yang tersedia

`Style instructions` bukan pilihan dari daftar — itu **teks bebas**. Yang bisa ditulis di dalamnya:

- **Emosi/nada:** `deadpan`, `cold`, `ominous`, `melancholic`, `unsettling`.
- **Gaya delivery:** `whispering`, `muttering`, `sarcastic`, `informative`, `confiding`.
- **Prosodi/pitch:** `low pitch`, `flat intonation`, `monotone`, `slightly broken voice`.
- **Pace:** `speaking slowly`, `measured pace`, `unhurried`.
- **Volume:** `low volume`, `almost inaudible`, `barely above a whisper`.
- **Aksen:** bisa, tapi docs menyarankan pakai voice regional, bukan `style`.

Boleh digabung koma: `dry, deadpan, low volume, speaking slowly, flat intonation`.

Di kolom **script** (inline), yang tersedia:

- Jeda: `<short pause>`, `<long pause>`, elipsis `...`, baris baru.
- Napas: `<breath>`, `<heavy breath>`, `<exhales>`, `<inhales deeply>`.
- Vokalisasi: `<sigh>`, `<laugh>`, `<gasp>`, `<cough>`, `<sob>`, `<snicker>`, `<giggle>`, `<yawn>`,
  `<whispers>`, `<whispering>`.
- Penekanan: KAPITAL pada kata yang ingin didorong.
- Backchannel: `|hmm|`, `|oh hmm|` — reaksi pendek, berguna kalau ada jeda yang perlu diisi napas.

Di level **voice**, persona dipilih dari 30 prebuilt atau Extended Voice Library (filter `persona`,
mis. "Narrator", "Warm, Friendly") — bukan dari `style`. `style` hanya untuk turn ini.

Yang **tidak** bisa: durasi jeda presisi, SSML, dan tag efek suara (`applause`, `explosion`,
`thud`) — docs menyarankan vokalisasi manusia saja.

## Soal jeda — kenapa cuma `<long pause>`

Itu satu-satunya tag jeda yang didokumentasikan. Tidak ada `<break time="...">`, tidak ada durasi
milidetik, dan panjang `<short pause>`/`<long pause>` tidak diukur resmi. Jeda presisi **tidak
bisa** diminta dari model. Empat cara mendapat jeda yang sebenarnya, dari paling murah:

1. **Elipsis dan baris baru.** `...` memberi jeda menggantung nyata dan bisa ditempatkan tepat di
   titik yang dituju. Baris baru antar kalimat memberi napas lebih panjang daripada koma. Ini
   kontrol paling andal — lebih andal daripada tag.
2. **Beberapa `<long pause>` berturut-turut.** `... <long pause> <long pause> ...` menumpuk jadi
   hening lebih panjang. Tidak terdokumentasi, tapi murah dicoba.
3. **`<breath>` / `<heavy breath>`** untuk jeda yang terasa bernapas. Lebih intim daripada `[silence]`
   murni, dan masih vokalisasi manusia (bukan efek suara).
4. **Jeda di post.** Generate utuh, lalu sisipkan hening eksplisit dengan FFmpeg di titik yang
   diinginkan. Ini satu-satunya cara mendapat jeda **presisi** (mis. 2,0 dtk sebelum payoff):
   ```
   ffmpeg -f lavfi -t 2 -i anullsrc=r=24000:cl=mono -c:a pcm_s16le silence-2s.wav
   ```
   lalu sambung potongan memakai `concat`. Jam jeda di `voiceover-gemini.json` → `pauseAfter`
   mengikuti pendekatan ini.

Urutan pilihan: baris baru → tumpuk `<long pause>` → `<breath>` → post. Tag hanya lapis terakhir
karena durasinya tidak bisa diprediksi.

## Aturan yang berlaku di sini

- `text` = transkrip verbatim. Jangan tulis perintah seperti "ucapkan dengan sedih" di kolom script — akan dibacakan.
- Tag inline dalam bahasa Inggris: `<short pause>`, `<long pause>`, `<whispers>`, `<breath>`, `<sigh>`. Tidak ada SSML `<break>`.
- Kapitalisasi = penekanan. Elipsis `...` = jeda menggantung.
- Tanpa tag efek suara (`applause`, `explosion`) — hanya vokalisasi manusia.
- Dengarkan utuh mata tertutup. Tidak ada titik merinding → revisi jeda/teks, bukan menambah kata dramatis.
- Klaim: semua soal sosok = legenda. Larangan hijau = cerita beredar, bukan hasil penelitian. Detail Labuhan wajib diverifikasi ke sumber Keraton sebelum upload (lihat `script.md` → Source notes).
