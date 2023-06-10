let handler = m => m

handler.before = async function (m) {
    conn.reply(m.chat, "*Maaf waktu untuk status premium anda telah berakhir!*\n*Chat owner untuk upgrade premium lagi*", m)
    let user = global.db.data.users[m.sender]                              
    if (new Date() - user.premiumTime > 0) {
            user.premiumTime = 0
            user.premium = false
        }
    }

module.exports = handler
