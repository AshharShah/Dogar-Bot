const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Shows you helping menu!'),
	async execute(interaction) {
		return interaction.reply('Mein aik gadha hu!\nCommands: /help	/dogar	/beep	/ping');
	},
};