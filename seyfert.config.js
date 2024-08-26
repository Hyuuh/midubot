// @ts-check is better
const { config } = require("seyfert");

module.exports = config.bot({
	token: process.env.DISCORD_TOKEN ?? "",
	intents: ["Guilds", "MessageContent", "GuildMessages"],
	locations: {
		base: "src",
		output: "dist/src",
		commands: "commands",
		events: "events",
	},
});
