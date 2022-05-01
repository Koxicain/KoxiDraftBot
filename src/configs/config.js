const dotenv = require('dotenv')
dotenv.config()


module.exports = {
	'botToken': process.env.BOT_TOKEN,
	'spreadsheetId': process.env.SPREADSHEET_ID,
	'ownerId': 'Koxicain#7123',
	'prefix': '!',
	'error_logs': 'bot-errors'
}