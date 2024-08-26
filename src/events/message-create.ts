import { db } from "@/db";
import { createEvent } from "seyfert";

export default createEvent({
	// botReady executes when all shards and guilds are ready.
	data: { name: "messageCreate" },
	async run(message, client) {
		if (message.author.bot) return;
		const userDb = await db.user.upsert({
			create: {
				id: message.author.id,
				username: message.author.username,
				avatar_url: message.author.avatarURL(),
			},
			update: {},
			where: {
				id: message.author.id,
			},
		});
		await client.messages.write(message.channelId, {
			content: `\`\`\`json\n${JSON.stringify(userDb, null, 2)}\n\`\`\``,
		});
		// client.logger.info(`${user.username} is ready`);
	},
});
