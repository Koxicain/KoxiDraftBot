const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'whois',
	description: 'Checks if a user is in the list!',
	userPerms: ['ADMINISTRATOR'],
	options: [
		{
			name: 'user',
			description: 'The user to check',
			type: 'USER',
			required: true,
		} ],
    
	run: async (client, interaction) => {
		const embed = new MessageEmbed().setColor('GREEN')
		const user = await interaction.options.getUser('user')
		const username = await user.username		

		const rows = await client.googleSheets.values.get({
			auth: client.auth,
			spreadsheetId: client.sheetId,
			range: 'Sheet1!B:T'
		})
		const data = rows.data.values.find(row => row[0] === username)

		if (data) {
			if (rows.data.values.length > 0) {
				for (let i = 0; i < rows.data.values.length; i++) {
					const row = rows.data.values[i]
					if (row[0] === username) {
						embed.setTitle(`Username: ${row[0]}`)
					}
					const classNames = rows.data.values[0]
					let classes = ''
					for (let j = 4; j < row.length; j++) {
						if (row[j]) classes += `${classNames[j].replace(/(realm ranks \[)|(\])/ig,'')}:\n `
						if (classes) embed.addFields(
							{ name: 'Classes', value: `${classes}\n`, inline: true },
							{ name: 'Rank', value: `Random`, inline: true },       )
						
					}

				}
			}
					await interaction.reply({ embeds: [embed] })
		
		} else if (!data) {
			return interaction.reply('User is not in the list!')
	    }
	}
}
