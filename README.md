<h3 align="center">Koxies Draft Bot</h3>
<p align="center">
	Koxies Draft bot is a discord bot that allows you to read, write and remove data from Google Sheets. Thanks to Sheetsbot
</p>

## Requirements
- Discord.js v13 or higher (`npm install discord.js@latest`)
- NodeJS v16.6 or higher
- Google APIs Client Library for NodeJS (`npm install googleapis`)
- `applications.commands` scope enabled for your bot in [developer portal](https://discord.com/developers)
- Basic knowlegde of Discord.js or JavaScript or NodeJS

## Configuration
- Edit the `config.json` file
```json
{
	"botToken": "ENTER_YOUR_BOT_TOKEN_HERE",
	"spreadsheetId": "ID_OF_THE_GOOGLE_SHEET",
	"ownerId": "ENTER_YOIUR_ID_HERE",
	"prefix": "ANY_PREFIX_OF_YOUR_CHOICE",
	"error_logs": "ENTER_THE_ERROR_LOGS_CHANNEL_ID_HERE"
}
```
- `botToken` is the token of your bot
- `spreadsheetId` is the ID of the Google Sheet you want to use
- `ownerId` is the ID of the owner of the bot
- `prefix` is the prefix of the bot
- `error_logs` is the ID of the channel where you want to send the error logs
- You will also need an additional credentials file to use this bot.
- **Watch this video to see the full Google Sheets API Tutorial:**
- [![GoogleAPI Tutorial](http://img.youtube.com/vi/PFJNJQCU_lo/0.jpg)](http://www.youtube.com/watch?v=PFJNJQCU_lo "MongoDB Tutorial")

## Star the Repo if you liked it!
