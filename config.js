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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_34_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MixcbiAgICAgICAgMjgsXG4gICAgICAgIDY5LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDgyLFxuICAgICAgICAxODUsXG4gICAgICAgIDU2LFxuICAgICAgICA2OSxcbiAgICAgICAgNSxcbiAgICAgICAgODgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxODksXG4gICAgICAgIDI1MixcbiAgICAgICAgNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzMsXG4gICAgICAgIDUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDMxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDUxLFxuICAgICAgICA0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDczLFxuICAgICAgICA2NSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDcwLFxuICAgICAgICA1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDMsXG4gICAgICAgIDYsXG4gICAgICAgIDI4LFxuICAgICAgICA0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDUxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxODksXG4gICAgICAgIDU4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU1LFxuICAgICAgICA4MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDU2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS3QyaTdZOVFNT2szdDRFQzdST0xJRktHZ2VXRW5Ob1gvbFFHVDV6KzlKYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTM5MDM5ODM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyQTFFRTA4Q0I5Qjk4MDZBRUQzMEY5RjZGRThBMTkwQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1OTc2NjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZXBXWnI1QS1RdmlEVU8zRTl6ZTZjZ1wiLFxuICBcInBob25lSWRcIjogXCI1Mzg1ZGYyZi1kNjUzLTRlNGMtYjEzMC02MTJlZDFhNGE3NzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE0LFxuICAgICAgMTc4LFxuICAgICAgMTIwLFxuICAgICAgMzIsXG4gICAgICAzMyxcbiAgICAgIDExMyxcbiAgICAgIDI0LFxuICAgICAgMjA2LFxuICAgICAgODQsXG4gICAgICAxMzIsXG4gICAgICAyOCxcbiAgICAgIDIxMyxcbiAgICAgIDI0MixcbiAgICAgIDQxLFxuICAgICAgMjQ1LFxuICAgICAgNjgsXG4gICAgICA0NSxcbiAgICAgIDEzMSxcbiAgICAgIDcxLFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjMsXG4gICAgICAxOTIsXG4gICAgICAxMDYsXG4gICAgICAxNDgsXG4gICAgICAxNDIsXG4gICAgICA0MSxcbiAgICAgIDczLFxuICAgICAgMjQwLFxuICAgICAgMjA1LFxuICAgICAgMTgyLFxuICAgICAgMTkwLFxuICAgICAgMTU4LFxuICAgICAgMzksXG4gICAgICA0MSxcbiAgICAgIDk4LFxuICAgICAgMTk2LFxuICAgICAgMjE1LFxuICAgICAgMjA0LFxuICAgICAgNTQsXG4gICAgICA3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzVldDOTFHNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzOTAzOTgzODozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI3NDcwMjA4OTYyNjg5OjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AzOGlzb0VFTlQ5OWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicUFpc2pYVDhlanVkSHQ4amdxczZhNDBuRUJ2VlF4SklicnV5RWRlaEZVRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpWFVaekdrc3JrZG1IRWM4THdNWWJNY3ZkM29yY1ZQMjh5bWZ6bHB3bzZmdWgvL0FKenNZZWx4eDVZcjFDUGpYMlNhNGhRWFVtZ2xpR3ZHc1ptQXJEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqOFdJMUw0WUphaTR4OVNQb1BPd0VQYzYrNzNsbE11OFNuOElrVkl1UUJqeUNKN1MrRFlKaUdvWWZrQ0dwV093RGg3NVdMSkpFT1B6cW8vRy8vbUhDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM5MDM5ODM4OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTk3NjU3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTXdzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNd3MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuL1R2ZEcraDVOd3YzeURhb1orWVo4YjJxK1FrWERSZDg2RkJTcW9QVERRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMjkxMTA5MDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE1OTc1NzI0MDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
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
