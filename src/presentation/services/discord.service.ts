import { envs } from '../../config';

export class DiscordService {
    private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;
    constructor() {}
    async notify(message: string): Promise<boolean> {
        const body = {
            content: message,
            embeds: [
                {
                    image: {
                        url: 'https://media.giphy.com/media/SJXzadwbexJEAZ9S1B/giphy.gif',
                    },
                },
            ],
        };
        const resp = await fetch(this.discordWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        if (!resp.ok) {
            console.error('Failed to notify Discord');
            return false;
        }
        return true;
    }
}
