let handler = async (m, { conn, usedPrefix, command }) => {
	let chat = global.db.data.chats[m.chat]
	if (!chat.nsfw) throw `*Grup Ini Tidak Mengizinkan NSFW*\nIzinkan Dengan *.enable 33*`
  await m.reply(`*Memproses Permintaan...*`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
conn.sendFile(m.chat, pickRandom(konachan), null, `*Sukses*`, m)
 // conn.sendButton(m.chat, `Nih *${name}*`, botdate, pickRandom(konachan), [['Next', `/konachan`]],m)
}
handler.help = ['konachan']
handler.tags = ['nsfw', 'anime']
handler.command = /^(konachan)$/i
handler.premium = true
handler.register = true
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const konachan = [

  "https://konachan.com/sample/79580dfece36d208c76d55fe22ca21ec/Konachan.com%20-%20316451%20sample.jpg",
    "https://konachan.com/sample/737a707688c52fdfdd74797e76d67ee2/Konachan.com%20-%20316192%20sample.jpg",
    "https://konachan.com/sample/d274dae687e5755fa73dfe709de90b47/Konachan.com%20-%20316017%20sample.jpg",
    "https://konachan.com/sample/e94bc73cafb5d81656f0f54051a3676f/Konachan.com%20-%20313642%20sample.jpg",
    "https://konachan.com/sample/b3c757c85db4a1fd6715d87539d17cd4/Konachan.com%20-%20317400%20sample.jpg",
    "https://konachan.com/sample/c7d25d49db9857a6dbb8a45c0ab76dad/Konachan.com%20-%20317300%20sample.jpg",
    "https://konachan.com/sample/8f46ff65ee4b208316a0c4bdcc989370/Konachan.com%20-%20317317%20sample.jpg",
    "https://konachan.com/sample/2009598d749a5a111e61d5c65e3c757c/Konachan.com%20-%20317279%20sample.jpg",
    "https://konachan.com/sample/74f1ce532d4c347be6adaba1a57ac3ca/Konachan.com%20-%20317199%20sample.jpg",
    "https://konachan.com/sample/a43380a7d8d1e68d3fa3fcfb920119e6/Konachan.com%20-%20314913%20sample.jpg",
    "https://konachan.com/sample/8960664dbe1cb632e8a536be6124082e/Konachan.com%20-%20314170%20sample.jpg",
    "https://konachan.com/sample/7945931e487e718eddf4a3ac01b34426/Konachan.com%20-%20315274%20sample.jpg",
    "https://konachan.com/image/1bd456b822451d2d252c957466b3f3eb/Konachan.com%20-%20313319%20ass%20brown_hair%20edogawa_roman%20fellatio%20long_hair%20male%20original%20panties%20short_hair%20underwear.jpg",
    "https://konachan.com/sample/61b3fae697a0d0dd6b044114946875b3/Konachan.com%20-%20313145%20sample.jpg",
    "https://konachan.com/jpeg/5f228c2ea3a3d24b53816b1356503bfc/Konachan.com%20-%20313112%20blue_eyes%20daruzenon%20fellatio%20original%20penis%20uncensored.jpg",
    "https://konachan.com/sample/2ae3f719c828d198d9eed04150a76f94/Konachan.com%20-%20311198%20sample.jpg",
    "https://konachan.com/sample/8ab665e14e643263cbc71b8e5d0f97bd/Konachan.com%20-%20311137%20sample.jpg",
    "https://konachan.com/sample/1a673910ee1120f32777f279be8683e4/Konachan.com%20-%20310110%20sample.jpg",
    "https://konachan.com/sample/2b1a6987a70ae6e293c4ed3bbc7631b7/Konachan.com%20-%20306841%20sample.jpg",
    "https://konachan.com/sample/4c927111f51f3ea4da389d0e370cedae/Konachan.com%20-%20304452%20sample.jpg",
    "https://konachan.com/sample/39efd4561b8b3816e41597aa65cb57ee/Konachan.com%20-%20304449%20sample.jpg",
    "https://konachan.com/image/c9cae6f76871cbd7e92e83b188c31b9d/Konachan.com%20-%20307462%20atelier%20atelier_ryza%20blush%20breasts%20brown_hair%20cleavage%20close%20cropped%20fellatio%20gloves%20hat%20necklace%20penis%20reisalin_stout%20ricegnat%20short_hair%20uncensored.jpg",
    "https://konachan.com/sample/bc2cb7a28e1fb1afc3fb8ff8238ed167/Konachan.com%20-%20304447%20sample.jpg",
    "https://konachan.com/sample/fb7957ee7d9e7b26f7e971108150f05c/Konachan.com%20-%20304389%20sample.jpg",
    "https://konachan.com/jpeg/c020568ac67e2c1b86ee56cf1594f6bb/Konachan.com%20-%20304342%20blue_eyes%20blush%20breasts%20chinese_dress%20dress%20fellatio%20long_hair%20nipples%20no_bra%20nopan%20penis%20purple_hair%20pussy%20sex%20twintails%20uncensored%20zuo_wei_er.jpg",
    "https://konachan.com/jpeg/e293bcb5f8baffb95660f00221615d9a/Konachan.com%20-%20304128%20anus%20ass%20blue_eyes%20blush%20breasts%20catgirl%20censored%20cosplay%20cunnilingus%20dress%20fellatio%20game_cg%20headband%20long_hair%20nipples%20penis%20pussy%20tail%20thighhighs.jpg",
    "https://konachan.com/jpeg/fdba3a52f6659d02a934ece28e8357d6/Konachan.com%20-%20303095%20anus%20ass%20black_hair%20blush%20breasts%20dress%20fellatio%20gloves%20long_hair%20neocoill%20nipples%20penis%20purple_eyes%20pussy%20sex%20uncensored%20waifu2x%20watermark%20wink.jpg",
    "https://konachan.com/sample/de5266077a6bdc0b5ff4cbafd769a1d7/Konachan.com%20-%20303287%20sample.jpg",
    "https://konachan.com/sample/a26adbcd771dbce3b9ee23bb6ea23553/Konachan.com%20-%20303451%20sample.jpg",
    "https://konachan.com/image/47a3dc8079eaf6769d0be6d88b33d20a/Konachan.com%20-%20302206%20breasts%20brown_eyes%20brown_hair%20censored%20computer%20fellatio%20navel%20nipples%20nude%20penis%20pubic_hair%20pussy%20sex%20short_hair%20shungikuten%20spread_legs.jpg",
    "https://konachan.com/jpeg/403354ba220e70b078c527a6f13f90b6/Konachan.com%20-%20300981%20blue_eyes%20bow%20close%20fellatio%20handjob%20long_hair%20neocoill%20orange_hair%20penis%20ponytail%20river_city_girls%20uncensored%20waifu2x%20watermark.jpg",
    "https://konachan.com/image/13d7298aa4e20bf3e0085e72fc986791/Konachan.com%20-%20295618%20censored%20fellatio%20fingering%20jpeg_artifacts%20munashi_mujou%20no_bra%20nopan%20original%20penis%20pussy%20school_uniform.jpg",
    "https://konachan.com/image/a36fd99e28c693036a13c5ff4b6c6947/Konachan.com%20-%20295519%20anal%20anthropomorphism%20breasts%20censored%20fellatio%20group%20kantai_collection%20kashima_%28kancolle%29%20nipples%20nironiro%20nude%20sex.jpg",
    "https://konachan.com/sample/75f9da00eac3de0294fdd731274192ed/Konachan.com%20-%20294796%20sample.jpg",
    "https://konachan.com/sample/fb540e3bc9c5e67e210dfbb45b93b0b5/Konachan.com%20-%20294128%20sample.jpg",
    "https://konachan.com/sample/40c947426130d0390c7147a9263b183e/Konachan.com%20-%20290991%20sample.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770968293778784256/18068030.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/770969026473230356/ecab4fac-072b-4574-8d1d-b451dd0a027d.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/770969364655505408/GIF_59.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/770986528008044554/3440-Y4PqZXs5bXM.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770987463882571826/0e96f106-9582-4057-a4c0-45b62219fc0c.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770987504266117160/4d57f6f2-eba8-4351-97f0-c226fae40f94.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770987584360022016/8b13e084-4982-438b-9ab9-f79c59522019.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/770987655781023775/40d5401c-06f8-4596-bcd0-5758844a2bdc.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770987668716519434/6b8ad91e-0291-41c8-8a3e-fefff28bfde6.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/770987738677116948/61bd0b39-e8c1-45ba-b4d3-cf2ca8e85508.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/770987801256525894/79bd6b11-4d8c-4e45-8ac5-2805b7642277.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/770987844567040020/2725de0f-33fb-4636-8382-94971baf916d.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770987901634215966/87608b54-075c-4fb9-869d-6595b5d1b909.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/770988097767997470/015128b1-fd75-46be-a523-f81947d005ba.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/770988121088983050/9931e03f-9d4e-4823-ab56-d074d25ec887.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/770988149211136020/12092a05-9c50-4972-8ca6-8b092ca682ed.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/770988159953141800/b27c1e99-433b-438f-8ae0-14125fb5002b.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/770988174943322132/20170604_193259.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/771001443595321344/0530-5zeihiLhcWA.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771002204998860850/0596-60zzeLzSqeU.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771002458888470588/0613-F9J046Su2Oo.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771015661089980427/1634-pjF5xdLo3WU.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771026536094629908/e731a0dc-9755-402f-af98-4b00717bcb1e.png"
]