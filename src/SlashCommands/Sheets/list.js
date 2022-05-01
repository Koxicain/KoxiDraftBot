const { MessageEmbed, Interaction } = require('discord.js')

module.exports = {
	name: 'list',
	description: 'Shows all the users added to the list!',
	userPerms: ['ADMINISTRATOR'],
	options: null,
	run: async(client, interaction) => {
		const embed = new MessageEmbed()
			.setColor('GREEN')
			.setDescription('List of Users')

		const rows = await client.googleSheets.values.get({
			auth: client.auth,
			spreadsheetId: client.sheetId,
			range: 'Sheet1!B1:AZ'
		})

		
		if(rows.data.values.length > 0) {
			const classNames = rows.data.values[0]
			for(let i = 1; i < rows.data.values.length; i++) {
				const row = rows.data.values[i]
				let classes = ''
				for(let j = 4; j < row.length; j++) {
					if(row[j]) classes += `${classNames[j].replace(/(realm ranks \[)|(\])/ig, '')}: Rank ${row[j]} \n`
				}
				if(classes) embed.addField(`${row[0]}`, `${classes}`, true)
			}
		} else {
			embed.setDescription('No users added to the list!')
		}
		await interaction.reply({ embeds: [embed] })

	}

}
