const { SlashCommandBuilder } = require('@discordjs/builders');
const { AttachmentBuilder } = require('discord.js');

const exampleEmbed = {
	title: 'Signature Spam Bandh Karo',
	image: {
		url: 'https://thumbs.dreamstime.com/z/crying-asian-baby-full-body-hungry-boy-sitting-white-background-34338063.jpg',
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