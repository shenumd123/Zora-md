const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
};
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "ZORA~rUcyFTgR#8vi2-AuBdgavIHz_JnmHMuT_A5Yhr7_XK1olHDF9LkM", // SESSION_ID is required to start the bot. It must begin with 'ZORA~', Example: ZORA~youruniquesessionid
  MONGODB: process.env.MONGODB || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"   // MONGODB URL is optional. Add it only if you have a valid MongoDB URI. If you don't have one, leave it empty. Do NOT insert invalid URLs – the bot won't start !!
};
