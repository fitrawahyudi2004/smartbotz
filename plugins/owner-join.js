let handler = async (m, { conn, text, usedPrefix, args, participants }) => {
    let time = global.db.data.users[m.sender].lastjoin + 86400000
    let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
    let delay = time => new Promise(res => setTimeout(res, time))
   
    let name = m.sender
    let fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6281262166032@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let [_, code] = text.match(linkRegex) || []
    if (!args[0]) throw `Link nya mana?` 
    if (!code) throw `Link tidak valid!`
    if (!args[1]) throw `Angakanya mana?`
    if (isNaN(args[1])) throw `Hanya angka, mewakili hari!`
    let anubot = nomorown
    m.reply(`Tunggu 3 detik bot akan join`)
    await delay(3000)
    try {
    let res = await conn.groupAcceptInvite(code)
    let b = await conn.groupMetadata(res)
    let d = b.participants.map(v => v.id)
    let member = d.toString()
    let e = await d.filter(v => v.endsWith(anubot + '@s.whatsapp.net'))
    let jumlahHari = 86400000 * args[1]
    let now = new Date() * 1
    if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
    else global.db.data.chats[res].expired = now + jumlahHari
    if (e.length) await m.reply(`Sukses invite bot ke group\n\n${await conn.getName(res)}\n\nBot akan keluar secara otomatis setelah *${msToDate(global.db.data.chats[res].expired - now)}*`)
    if (e.length)  await conn.reply(res, `
Ada @${anubot} Owner-ku Di Sini
Aku Mau Keluar Aja lah, Takut Kena Marah.

@${conn.user.jid.split(`@`)[0]} akan keluar 5 detik lagi
Bye😑
Thanks dah invite Smart Yaaaa *${m.name}*`, fkonn, {
      mentions: d
       }).then(async () => {
       await delay(7000)
       }).then( async () => {
       await conn.reply(res, `Tapi Boong 🤭`, 0)
       await conn.reply(nomorown+'@s.whatsapp.net', `*INVITING!*\n\n@${m.sender.split('@')[0]} telah mengundang ${conn.user.name} ke grup\n\n${await conn.getName(res)}\n\n${res}\n\nPesan : ${args[0]}\n\nBot akan keluar otomatis setelah \n*${msToDate(global.db.data.chats[res].expired - now)}*`, null, {mentions: [m.sender]})
       })
       if (!e.length) await conn.reply(nomorown+'@s.whatsapp.net', `*INVITING!*\n\n@${m.sender.split('@')[0]} telah mengundang ${conn.user.name} ke grup\n\n${await conn.getName(res)}\n\n${res}\n\nPesan : ${args[0]}\n\nBot akan keluar otomatis setelah *${msToDate(global.db.data.chats[res].expired - now)}*`, null, {mentions: [m.sender]})
       if (!e.length) await m.reply(`Sukses invite bot ke group\n\n${await conn.getName(res)}\n\nBot akan keluar secara otomatis setelah \n*${msToDate(global.db.data.chats[res].expired - now)}*`).then(async () => {
       let mes = `Hello Everyone👋🏻
  *${conn.user.name}* adalah salah satu Bot WhatsApp Multi-Device yang di bangun dengan Node.js, *${conn.user.name}* Baru aja di invite oleh *${m.name}*
  Untuk menggunakan *${conn.user.name}* silahkan ketik
  #menu
  @${conn.user.jid.split('@')[0]} akan keluar secara otomatis setelah *${msToDate(global.db.data.chats[res].expired - now)}*`
    await conn.sendFile(m.chat, res, 'op.jpg',mes, wm, m)
      } catch (e) {
        conn.reply(nomorown+'@s.whatsapp.net', e)
        throw `Maaf bot tidak bisa bergabung ke grup!\n *NOT AUTHORIJET (tidak diizinkan) BG :V`
        }
  }
  handler.help = ['join <chat.whatsapp.com> <day>']
  handler.tags = ['owner']
  handler.command = /^join(ewa)?$/i
  
  handler.owner = true
  
module.exports = handler
  
  function msToDate(ms) {
    let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
  }
  
/*
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner }) => {
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.groupAcceptInvite(code)
    expired = Math.floor(Math.min(999, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
    m.reply(`Berhasil join grup ${res}${expired ? ` selama ${expired} hari` : ''}`)
    let chats = global.db.data.chats[res]
    if (!chats) chats = global.db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['owner']

handler.command = /^join$/i
handler.rowner = true

export default handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))
*/