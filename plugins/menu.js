const { version } = require('yargs')

let handler = async (m, { usedPrefix }) => {
await conn.sendPresenceUpdate('recording',m.chat)
const os = require('os')
    let context = `
╔══════════════════════
║
╠❐ اسم البوت  : BOBIZ BOT
║
╠❐ صاحب البوت   :   noureddine ouafy
║
╠❐ 𝐔𝐏𝐓𝐈𝐌𝐄    : ${uptime}
║
╠❐ 𝐕𝐄𝐑𝐒𝐈𝐎𝐍   : 2.0.2(ʙᴇᴛᴀ)
║
╠❐ 𝐒𝐓𝐀𝐓𝐔𝐒    : 𝐀𝐋𝐈𝐕𝐄
║
╠❐ 𝐓𝐎𝐓𝐀𝐋 𝐔𝐒𝐄𝐑𝐒 : ${user}
║
╠❐ 𝐑𝐄𝐆𝐈𝐒𝐓𝐄𝐑𝐄𝐃 : ${users+5}
║
╠❐ 𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌: ${os.type()}
║
╚════════════════════════`
await conn.sendTBI2(m.chat, context.trim(), wm,thumburl,`انستغرامي `, `instagram.com/noureddine_ouafy`, null,null, `جميع الاوامر`, `${ usedPrefix}lst`,m)
}
handler.help = ['ᴍᴇɴᴜ']
handler.tags = ['main']
handler.command = /^(menu|help|list)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
