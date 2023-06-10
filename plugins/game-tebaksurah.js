let fetch = require('node-fetch')

let timeout = 180000
let poin = 1000
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebaksurah = conn.tebaksurah ? conn.tebaksurah : {}
    let id = m.chat
    if (id in conn.tebaksurah) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaksurah[id][0])
        throw false
    }

    let ran =Math.random() * 6236
    let res =  await fetch('https://api.alquran.cloud/v1/ayah/' + ran + '/ar.alafasy')
    if (res.status !== 200) throw await res.text()
    let result = await res.json()
    let json = result.data
    // if (!json.status) throw json
    let caption = `*${command.toUpperCase()}*

Number In Surah: ${json.numberInSurah}
By: ${json.edition.name} ${json.edition.englishName}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}hsur* untuk bantuan
Bonus: ${poin} XP
*Balas pesan ini untuk menjawab!*`.trim()

let captu = `
*${json.surah.englishName}*

*INFORMATION*
Surah Number: ${json.surah.number}
Surah Name: ${json.surah.name} ${json.surah.englishName}
Eng Name: ${json.surah.englishNameTranslation}
Number Of Ayahs: ${json.surah.numberOfAyahs}
Type: ${json.surah.revelationType}
`
    conn.tebaksurah[id] = [
        await m.reply(caption),
        json, poin,
        setTimeout(() => {
            if (conn.tebaksurah[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah ${captu}`, conn.tebaksurah[id][0])
            delete conn.tebaksurah[id]
        }, timeout)
    ]
    await conn.sendFile(m.chat, json.audio, 'audio.mp3', '', m)
}
handler.help = ['tebaksurah']
handler.tags = ['game']
handler.command = /^tebaksurah$/i

handler.group = false
module.exports = handler
