import { Snippet } from './snippet';

export class YoutubeSearchItem {
    id: {
        kind: string;
        channelId: string;
    };
    snippet: Snippet;
}