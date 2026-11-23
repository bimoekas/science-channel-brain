# Shot List — Nyi Roro Kidul (Google Flow / Veo)

Sumber narasi: `voiceover.md` (versi ElevenLabs) / `voiceover-gemini-aistudio.md`.
Audio final: `video/assets/audio/voiceover-norm.mp3` — **103,3 dtk** (di atas target 70–90; lihat catatan di bawah).

## Aturan sebelum generate

1. **Portrait 9:16.** Set project Flow ke portrait. Kalau tidak tersedia, generate 16:9 lalu crop
   di FFmpeg (langkah 6 di pesan sebelumnya), jangan ubah komposisi HyperFrames.
2. **Tanpa teks di dalam video.** Semua teks (badge, caption, watermark) dibuat di HTML. Teks hasil
   generate tidak bisa dikontrol dan sering salah eja.
3. **Kamera diam atau hampir diam.** `VIDEO-STYLE-GUIDE.md` §Hindari: "pan/zoom/kamera bergerak".
   Jangan minta "slow push-in", "dolly", "crane". Gerak halus boleh (ombak, api lilin, kain
   berkibar); kamera tidak.
4. **Satu klip = satu gerak.** Jangan minta rangkaian aksi dalam satu prompt.
5. **Palet horror repo:** `--npl-horror-a: #b39cff` (lavender pucat), `--npl-horror-b: #5cf2c0`
   (mint). Pakai `#5cf2c0` sebagai acuan warna kain hijau supaya klip Flow menyatu dengan overlay.
6. **Negative prompt di semua shot:** `no people, no text, no watermark, no logos, no gore`.
7. **Nama tokoh tidak dikenali model.** Deskripsikan visualnya, bukan namanya.

## Peta waktu (perkiraan — verifikasi dulu)

Diturunkan dari `silencedetect` pada `voiceover-norm.mp3`, lalu diverifikasi ulang terhadap
timestamp per kata di `video/transcript.json` (2026-11-22). Shot tidak harus tepat di batas ini —
HyperFrames memakai `data-start` sendiri, peta ini hanya untuk menentukan kapan visual berganti.

| Beat | Mulai | Durasi | Baris VO |
| --- | --- | --- | --- |
| 1. Hook | 0,0 | 8,7 | "Di pantai selatan, ada aturan tak tertulis. JANGAN pakai baju hijau." |
| 2. Larangan | 8,7 | 5,3 | "Katanya, itu warna kesukaan sang ratu." |
| 3. Nama | 14,0 | 9,9 | "Namanya Nyi Roro Kidul. Penguasa laut selatan. Tapi ceritanya… tidak satu versi." |
| 4. Versi Kadita | 23,9 | 13,6 | "Dewi Kadita. Putri Pajajaran. Dikutuk ibu tiri. Diusir… menghilang ke dalam air." |
| 5. Versi kedua | 37,5 | 7,3 | "Ada versi lain. Kulitnya rusak. Berkelana ke selatan. Ombak besar datang… tak kembali." |
| 6. Dua nama | 44,8 | 6,4 | "Dua sosok, satu nama… Nyi Roro Kidul dan Kanjeng Ratu Kidul." |
| 7. Pivot | 51,1 | 5,0 | "Yang tercatat, bukan sosoknya. Tapi yang mereka lakukan setiap tahun." |
| 8. Labuhan | 56,1 | 23,2 | "Keraton Yogyakarta melabuh sesaji… Kain. Kemben hijau. Dikubur di pasir hitam." |
| 9. Naskah | (di dalam beat 8) | — | "Babad Tanah Jawi. Babad Dipanegara. Serat Centhini. Satu kursi… kosong." |
| 10. Batas | 79,9 | 14,2 | "Di sini batasnya. Yang tersisa adalah legenda… lebih banyak beredar sebagai cerita." |
| 11. Payoff | 94,1 | 7,9 | "Yang mencekam bukan ombaknya. Tapi satu cerita yang bertahan ratusan tahun." |
| 12. Outro | 102,0 | 1,3 | "Sini aku ceritain." |

Beat 8 dan 9 terlalu panjang untuk satu klip — pecah jadi dua shot di scene yang sama.

## Daftar shot (10 klip)

### Shot 1 — Pantai selatan (hook) · 0,0–8,7
```
Cinematic wide still of a dark southern Java coastline at dusk, black volcanic rocks, heavy waves
breaking white, low mist over the water, overcast sky, desaturated teal and cold grey, no sun,
ominous quiet atmosphere, vertical 9:16 composition, no people, no text
```
Visual: objek pendukung. Yang dibaca pertama harus teks hook di HTML, bukan ombaknya.

### Shot 2 — Kain hijau (larangan) · 8,7–14,0
```
A single green silk cloth tied to a weathered wooden pole on a windy beach, dark sand, cold mist,
fabric lifting in the wind, muted mint green against deep desaturated grey, macro to medium shot,
overcast light, vertical 9:16, no people, no text
```
Warna kain mendekati `#5cf2c0`.

### Shot 3 — Air (nama) · 14,0–23,9
```
Close-up of dark sea water at dusk, deep teal surface, gentle slow swell, faint foam, no horizon
visible, low light, cinematic grain, vertical 9:16, no people, no text
```
Baris "tidak satu versi" — visual netral, tidak mengklaim sosok.

### Shot 4 — Kabut dan jalan setapak (versi Kadita) · 23,9–37,5
```
Fog covering a narrow dirt path through coastal scrubland at dawn, cold grey light, sparse dry
grass, sea barely visible in the distance, empty, unsettling stillness, vertical 9:16, no people
```
Tidak menampilkan perempuan/putri — jangan visualisasi tokoh yang statusnya legenda.

### Shot 5 — Ombak besar (versi kedua) · 37,5–44,8
```
A large wave breaking over wet black sand at night, violent white foam, darkness beyond the
shoreline, cold blue-black palette, high contrast, vertical 9:16, no people
```

### Shot 6 — Dua permukaan air (dua nama) · 44,8–51,1
```
Split composition of two bodies of water, calm shallow water on one side and deep dark ocean on
the other, faint dividing line of mist, muted teal and grey, still camera, vertical 9:16, no people, no text
```

### Shot 7 — Sesaji di pasir (labuhan) · 51,1–79,3
```
Small offerings of folded cloth and flowers on wet black sand at the shoreline, close overhead
angle, shallow depth of field, cold blue hour light, water reaching the edge of frame,
vertical 9:16, no people
```

### Shot 8 — Naskah lama (naskah) · (dalam beat 7–8, ~10 dtk)
```
Old Javanese manuscript pages with dense handwriting lying on dark aged wood, single candle flame
flickering at frame edge, warm amber light against deep shadow, still, vertical 9:16, no people,
no readable modern text
```

### Shot 9 — Kursi kosong (naskah, penutup bagian) · ~4 dtk
```
A single empty carved wooden chair in a dim hall, cold light from one side, dust in the air,
centered but slightly off-axis, oppressive quiet, vertical 9:16, no people
```
Kalau Flow menghasilkan teks/ukiran yang menyerupai tulisan, buang dan generate ulang.

### Shot 10 — Laut malam (payoff + outro) · 79,9–103,3
```
Vast open ocean at night, no land, no horizon detail, almost black water with faint moon glow,
completely still, minimal movement, vertical 9:16, no people, no text
```
Dipakai ulang dua kali di timeline — HyperFrames tidak peduli klip yang sama dipakai lagi.
Area gelap ini tempat signature outro dan caption payoff duduk.

## Konsistensi

Generate Shot 1 dulu. Simpan frame-nya, upload sebagai **ingredient/reference**, pakai di shot 2,
4, 5, 7, 8, 10. Tanpa reference, klip 1 hangat dan klip 7 biru.

Kalau butuh transisi mulus antar shot, pakai **Frames to video**: last frame shot A → first frame
shot B.

## Setelah download

Simpan ke `video/assets/video/` dengan nama `s1-coast.mp4`, `s2-cloth.mp4`, `s3-water.mp4`,
`s4-path.mp4`, `s5-wave.mp4`, `s6-split.mp4`, `s7-offering.mp4`, `s8-manuscript.mp4`,
`s9-chair.mp4`, `s10-ocean.mp4`. Lalu re-encode:

```
for f in video/assets/video/s*.mp4; do
  ffmpeg -y -i "$f" -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920" \
    -an -c:v libx264 -crf 20 -pix_fmt yuv420p "${f%.mp4}-1080.mp4"
done
```

`-an` wajib — klip Flow bersuara dan akan bertabrakan dengan `voiceover.mp3`.

## Dua hal yang dulu terbuka — keduanya sudah ditutup

1. **Audio 103,3 dtk, di atas target 70–90.** Diputuskan 2026-11-22: **diterima**. Tidak dipotong,
   shot list tetap memakai 103 dtk.
2. **Beat 4 dan 8.** Timer di tabel sekarang sudah dicek terhadap timestamp per kata di
   `video/transcript.json`, bukan cuma deteksi hening. Tanda ⚠ dihapus. Batas klip di
   `index.html` dan caption di `compositions/brand/captions.html` memakai data kata yang sama.
