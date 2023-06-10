let handler  = async (m, { conn, usedPrefix: _p }) => {
let cap = `On Kak @${m.sender.split`@`[0]}`
conn.reply(m.chat, cap, m, { mentions: await conn.parseMention(cap) } )
}
handler.customPrefix = /^(pp|p|pee|pe|bot|bot?|bott)$/i
handler.command = new RegExp

module.exports = handler