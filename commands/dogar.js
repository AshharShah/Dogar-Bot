const { SlashCommandBuilder } = require('@discordjs/builders');
const { AttachmentBuilder } = require('discord.js');

const exampleEmbed = {
	title: 'Signature Spam Bandh Karo',
	image: {
		url: 'https://i.imgur.com/fX7s2QU.jpg',
	},
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dogar')
        .setDescription('Sends you dogar'),

    async execute(interaction) {
        return interaction.reply({ embeds: [exampleEmbed]});
    },
};