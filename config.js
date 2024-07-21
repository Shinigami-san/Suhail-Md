const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348139039838";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_23_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1LFxuICAgICAgICA5MixcbiAgICAgICAgOTYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MixcbiAgICAgICAgMTk1LFxuICAgICAgICA5NixcbiAgICAgICAgNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODksXG4gICAgICAgIDE5LFxuICAgICAgICAzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwLFxuICAgICAgICAzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgODksXG4gICAgICAgIDEzMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTksXG4gICAgICAgIDI5LFxuICAgICAgICA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzEsXG4gICAgICAgIDQ4LFxuICAgICAgICA3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNyxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU3LFxuICAgICAgICA0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMixcbiAgICAgICAgODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgODQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA4LFxuICAgICAgICA3NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDM0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk2LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5WlFTRlBjR1lqeE8xMXBVNE9nL1NLWnFkUUpJYXBraDJaTnpaalFCeTNrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMNkZfN3RvalJqaVk1WlktVGlVRTJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImMxOTYzMzJjLThjNGMtNDc1ZS04ZWMxLTk2MGE3NWY4OWIxMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MCxcbiAgICAgIDEwNixcbiAgICAgIDE3OSxcbiAgICAgIDE0NyxcbiAgICAgIDE3MSxcbiAgICAgIDQwLFxuICAgICAgMTQwLFxuICAgICAgNzAsXG4gICAgICAxMzgsXG4gICAgICA4NSxcbiAgICAgIDE0NSxcbiAgICAgIDY0LFxuICAgICAgOTQsXG4gICAgICAzNSxcbiAgICAgIDEwOSxcbiAgICAgIDIzOSxcbiAgICAgIDE5NSxcbiAgICAgIDIzOSxcbiAgICAgIDE2MixcbiAgICAgIDEyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjcsXG4gICAgICAyMDcsXG4gICAgICAxNzUsXG4gICAgICAxNjYsXG4gICAgICAyMTgsXG4gICAgICAxOTMsXG4gICAgICAyNDYsXG4gICAgICAxNTgsXG4gICAgICA3NCxcbiAgICAgIDI2LFxuICAgICAgMTE4LFxuICAgICAgMTY2LFxuICAgICAgMjI0LFxuICAgICAgMTI4LFxuICAgICAgMjIzLFxuICAgICAgMjUsXG4gICAgICAxNDYsXG4gICAgICAyNixcbiAgICAgIDU1LFxuICAgICAgMTQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldDSEpQTFBGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM5MDM5ODM4OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjc0NzAyMDg5NjI2ODk6MzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHo4aXNvRUVOZjQ5YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxQWlzalhUOGVqdWRIdDhqZ3FzNmE0MG5FQnZWUXhKSWJydXlFZGVoRlVFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBtTUF0QjlWVW5HamVEdEU3N3MxK2xoVUxjSVlaMC9VNXV6U1h5RDdHS3RybC96VWFLbFA2MkpnaDRoVTBTWXMwYlhrSE1OWG91bHNWUE1SRmpmWUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInYwcEtKbGkvTEpZNmExS1pLS1JaQ3NoVmhkbkYwV3lkTVlUdG5QeW5nUEZPWHVvWndHR0dnM2g1a1dhdDRCRHp1RGRUam5zdEYxNVZUV1RRaExZVUJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzkwMzk4Mzg6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1OTcwMTlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Shinigami 🐦‍⬛",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
