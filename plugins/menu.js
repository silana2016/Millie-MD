const { version } = require('yargs')

let handler = async (m, { usedPrefix }) => {
await conn.sendPresenceUpdate('recording',m.chat)
const os = require('os')
    let context = `
╔══════════════════════

   اسم البوت:BOBIZ BOT

 صاحب البوت :noureddine ouafy

 


██████╗░░█████╗░████████╗
██╔══██╗██╔══██╗╚══██╔══╝
██████╦╝██║░░██║░░░██║░░░
██╔══██╗██║░░██║░░░██║░░░
██████╦╝╚█████╔╝░░░██║░░░
╚═════╝░░╚════╝░░░░╚═╝░░░
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
