const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })

 
//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("923156598103")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://chhaseeb517:chhaseeb517@cluster0.1dtvf4q.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'alifarooqahmad@gmail.com'
global.github = 'https://github.com/chhaseeb47/HASI-MD'
global.location = 'Pakistan'
global.gurl = 'https://instagram.com/_' // add your username
global.sudo = process.env.SUDO || '923156598103'
global.devs = '923006586907';
global.website = 'https://github.com/chhaseeb47/HASI-MD' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/ea5cfd778d2004c72d965.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'FAROOQ-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'FAROOQ AHMAD S' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'HASI-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib09VUDNBYzBxNXRyVFl1TVp2dUEvT2tHWGlJSVRZRnVHNzhra2RHMDZGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYURmeFgxTGRFWm45UUVGMXNvN3UrY0ZiNkovSDV1LzdkL2hwNEdISEd4ND0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTStwNUNmMVdoSkJvNWIweU5qTDZBK3lYdGxWeDU1TzB6ekxnZlA5QlU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPUTFyYXdhUUZqdk5EUDRwbXBjbThiRkwya1EzYXdZcDljcENuMjJWQ0hRPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFNU0RBKzlBZEhpVW1vd2VZeDJuZEQ5MlBrdXdUOHk1YjVVWk5JSGo2MkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikh4VEZ3YUE4VTIyV2MybU50ZnNicEhQOWZSOFJxcklRWFpxNGtpckNjem89In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuV0VqZmpVRnNGdmRTQlY2UVFINVI0a2VJeS9wSzBJOGYwbzYvTUJpRlZFZWFNWldTc2pCVnhOQ2RJVUx1UEQvNGpoaG1NN1c5bDlLM0NBQ0VhdGVodz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjcxLCJhZHZTZWNyZXRLZXkiOiJNQW12MkpTYlcyODdNVHpBU2lhS0tjUUtVOXMyVXpMMklkNXRiam5aS0JvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5MnViWVhfYlRMeTRiTUI3Q0FVeEdBIiwicGhvbmVJZCI6ImY4MDMwMzk3LWY5NDEtNDdiZS1iNzQ1LWMyMjUwMTMzNjA5MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzc2FZN2toSUZHY0tWUmVwUm1LaGo1dTNXeUk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFkcldRZEQ4S0gxRjR4NTF1REF4M3JEcjZqaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pEYXI1VUdFTGFkeHF3R0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlpWMUgwRy9vL1JoY1JOTDdhY2orR2RZRG9OZThRclZaTmZXaXhlN1gzRVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitYSFFTMXpkVnpJeFk4Q3g1M3NUSU5GdjBUdWl1WmpBb3EwSWpKMjlJVDIzaDgvOS8wUlZjL3Qyd1pnOEFrRXMybUJrRWlvNlBrNm14MlRCU3JpaENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNVXYyT2tGT2NEYVhXaFVjTjk2TzNOVnU5Kzhxd2NxMWJRVmdQUTdxSVdUUmJJU25SVzlnRnlLbDVvSXROUFVNTExoQnFVbHlxdlgvOFduNG1JUmloQT09In0sIm1lIjp7ImlkIjoiOTIzMTU2NTk4MTAzOjU3QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE1NjU5ODEwMzo1N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXVmRSOUJ2NlAwWVhFVFMrMm5JL2huV0E2RFh2RUsxV1RYMW9zWHUxOXhFIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA0MDM4MDczfQ==' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'FAROOQ A S' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'FAROOQ-MD' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? all : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
