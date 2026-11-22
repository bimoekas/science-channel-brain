# Gemini TTS Voice Guide (Google AI Studio)

Cadangan ketika kuota ElevenLabs habis. Baca bersama `ELEVENLABS-VOICE-GUIDE.md` — aturan isi
(struktur, detail konkret, jeda sebelum detail berat, batas klaim/etika, penutup fixed
"Sini aku ceritain.") tetap berlaku sama. Yang berbeda hanya cara mengarahkan delivery.

## Perbedaan kunci vs ElevenLabs

| | ElevenLabs v4 | Gemini TTS |
| --- | --- | --- |
| Tag per baris | `[low, hushed]` di awal baris | **tidak ada** |
| Kontrol delivery | tag per kalimat | `style` per **turn/segmen** |
| Jeda | `[long pause]` sebagai teks | `<long pause>` inline, atau jeda antar segmen |
| SSML `<break>` | tidak didukung | tidak didukung |
| Penekanan | kapitalisasi | kapitalisasi |

Konsekuensi: VO dipecah jadi segmen. Satu `style` per segmen, generate per segmen, lalu sambung
dengan jeda eksplisit. Jangan kirim seluruh VO dalam satu request — kontras nada antar beat hilang.

## Model

- `gemini-3.8-flash-tts` — 130+ bahasa, kualitas penuh. Untuk produksi.
- `gemini-...-flash-lite-tts` — 100+ bahasa, lebih murah/cepat.
- **Bahasa Indonesia terdeteksi otomatis** (Flash TTS 132 bahasa, Lite 103). Tidak perlu set locale.
- Free tier limit berbentuk **RPD harian** (bukan karakter bulanan) — lihat AI Studio → rate limits.
  Untuk VO 80 dtk yang dipecah ~12 segmen, satu video = ~12 request.

## Struktur request

```json
{
  "model": "gemini-3.8-flash-tts",
  "input": [{
    "type": "user_input",
    "content": [{
      "type": "text",
      "text": "Gedung itu sunyi... <long pause> sampai satu suara memanggil namamu.",
      "annotations": [{ "type": "speech_metadata", "style": "whispered urgently, speaking slowly" }]
    }]
  }],
  "response_format": { "type": "audio", "mime_type": "audio/wav", "sample_rate": 24000 },
  "generation_config": { "speech_config": [{ "voice": "Enceladus" }] }
}
```

Tidak ada field prompt terpisah. `text` = transkrip verbatim; perintah seperti "ucapkan dengan
sedih" **akan dibacakan**. Semua arahan gaya masuk ke `style`.

## Lapis 1 — `style` (per segmen)

Contoh resmi: `whispered urgently`, `calm and relaxed`, `warm and enthusiastic`, `out of breath`,
`sarcastic`, `speaking slowly`, `speaking rapidly`, `high pitch, cheerful and excited inflection`,
`monotone and flat`. Boleh digabung dengan koma: `whispered urgently, speaking slowly`.

`style` adalah **string bebas**, bukan enum. Dimensi yang bisa ditulis di dalamnya: emosi/nada,
gaya delivery (`whispering`, `muttering`, `sarcastic`), prosodi/pitch (`high pitch`, `monotone`,
`flat intonation`), pace (`speaking slowly`), volume (`low volume`, `almost inaudible`), dan aksen.
Boleh dikombinasikan dengan koma. Dokumentasi mengingatkan: jangan encode sifat permanen (usia,
gender, nama, aksen tetap) ke `style` — itu urusan voice; dan **banyak request tidak butuh `style`
sama sekali**.

Dimensi lain yang bukan `style`:

- **Teks inline:** jeda `<short pause>`/`<long pause>`; vokalisasi `<sigh>`, `<cough>`, `<breath>`,
  `<heavy breath>`, `<exhales>`, `<gasp>`, `<sob>`, `<laugh>`, `<giggle>`, `<snicker>`, `<yawn>`,
  `<whispers>`, `<whispering>`; penekanan KAPITAL; jeda elipsis `...`.
- **Backchannel:** `|oh hmm|` ditulis langsung dalam transkrip untuk reaksi pendek/overlap.
- **Voice:** 30 prebuilt + Extended Voice Library yang bisa difilter `persona` ("Warm, Friendly",
  "Narrator") + Voice Design dari deskripsi teks.

Tangga untuk horror (padanan `Tangga tag kemencekan` ElevenLabs):

| Beat | `style` |
| --- | --- |
| Fakta, naskah, angka | `flat, clinical narration` / `deadpan, quiet, unsettling` / `monotone and flat` |
| Mitos, larangan, cerita beredar | `hushed whisper, almost inaudible` / `soft, almost inaudible whisper` |
| Momen kritis, kronologi | `low, steady, measured, unhurried` / `tense, unmoving` |
| Pemisah fakta vs mitos | `cold, measured, honest` / `cold, deliberate` |
| Payoff | `calm delivery of something deeply wrong, almost whispered` |
| Penutup | `eerie, detached, hushed` |

Aturan sama: sisakan beat yang benar-benar datar supaya kontrasnya terasa, jangan semua segmen
disuruh "seram".

## Lapis 2 — inline tag (point-in-time)

Ditulis dalam teks, dalam **bahasa Inggris** walau transkrip Indonesia.

- Jeda: `<short pause>`, `<long pause>` — satu-satunya cara jeda di dalam segmen.
- Vokalisasi: `<breath>`, `<heavy breath>`, `<exhales>`, `<sigh>`, `<laugh>`, `<giggle>`, `<cough>`,
  `<gasp>`, `<sob>`, `<snicker>`, `<yawn>`, `<whispers>`, `<whispering>`.
- **Hindari** tag efek suara (`applause`, `explosion`, `thud`) — dokumentasi menyarankan vokalisasi
  manusia saja; tag efek suara bisa terdengar palsu atau diabaikan.
- **Tidak ada SSML.** Jangan pakai `<break time="..."/>`.

## Ritme lokal

- Kapitalisasi kata = penekanan: `JANGAN pakai baju hijau.`
- Elipsis `...` = jeda menggantung. Dash `--` = potongan pendek. Koma = napas.
- Pacing global ada di `style` (`speaking slowly`), bukan per kalimat.

## Voice

30 prebuilt, deskriptor berorientasi suara English — gender/timbre untuk Bahasa Indonesia **tidak
dijamin sama**, wajib uji:

`Zephyr` (bright), `Puck` (upbeat), `Charon` (informative), `Kore` (firm), `Fenrir` (excitable),
`Leda` (youthful), `Orus` (firm), `Aoede` (breezy), `Callirrhoe` (easy-going), `Autonoe` (bright),
`Enceladus` (**breathy**), `Iapetus` (clear), `Umbriel` (easy-going), `Algieba` (smooth),
`Despina` (smooth), `Erinome` (clear), `Algenib` (**gravelly**), `Rasalgethi` (informative),
`Laomedeia` (upbeat), `Achernar` (soft), `Alnilam` (firm), `Schedar` (even), `Gacrux` (**mature**),
`Pulcherrima` (forward), `Achird` (friendly), `Zubenelgenubi` (casual), `Vindemiatrix` (gentle),
`Sadachbia` (lively), `Sadaltager` (knowledgeable), `Sulafat` (warm).

Kandidat horror: `Enceladus` (breathy), `Algenib` (gravelly), `Gacrux` (mature), `Charon`
(informative), `Schedar` (even). Uji 2–3 kandidat per episode, pilih satu, catat di VO.

## Pipeline di repo ini

```
node scripts/gemini-tts.mjs content/drafts/<slug>/voiceover-gemini.json --print   # review teks
node scripts/gemini-tts.mjs content/drafts/<slug>/voiceover-gemini.json           # generate
```

Manifest berisi `model`, `voice`, dan `segments[]` (`text`, `style`, `pauseAfter`). Runner
memanggil API per segmen, menyisipkan jeda `pauseAfter`, lalu concat jadi satu WAV.

Butuh `GEMINI_API_KEY` di environment.

## QA (sama dengan ElevenLabs)

- Durasi 70–90 dtk, integrated ≈ -14 LUFS, true peak ≤ -1 dBTP.
- Dengarkan utuh mata tertutup: harus ada minimal satu titik merinding. Tidak ada → revisi teks/jeda, bukan menambah `style` yang lebih dramatis.
- Penutup `Sini aku ceritain.` tidak diparafrase.

## Batas yang harus diingat

- Dokumentasi tidak menjamin nama model `gemini-3.8-flash-tts` stabil — kalau 404/400, cek
  daftar model di AI Studio dan ganti `model` di manifest.
- Endpoint baru (`interactions`) dan lama (`generateContent`) punya bentuk respons berbeda.
  Runner menerima keduanya, tapi yang lama mengabaikan `style`.
- Kualitas prosodi Bahasa Indonesia belum sebanding voice Gadis ElevenLabs. Uji dulu sebelum
  commit ke satu episode penuh.
