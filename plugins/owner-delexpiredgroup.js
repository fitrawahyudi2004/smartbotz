let handler = async (m, { conn, args, usedPrefix, command }) => {
    
    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    if (new Date() * 1 < global.db.data.chats[who].expired) global.db.data.chats[who].expired = false
    else global.db.data.chats[who].expired = false
    
    let caption = `Berhasil menghapus hari kadaluarsa untuk Grup ini`
    await m.reply(caption)
    
}
handler.help = ['delexpired']
handler.tags = ['owner']
handler.command = /^(delexpired|delsewa)$/i
handler.rowner = true
handler.group = true

module.exports = handler

function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}