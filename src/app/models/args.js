"use strict";
var Args = (function () {
    function Args() {
        this.ytPart = {
            auditDetails: "auditDetails",
            brandingSettings: "brandingSettings",
            contentDetails: "contentDetails",
            contentOwnerDetails: "contentOwnerDetails",
            id: "id",
            invideoPromotion: "invideoPromotion",
            localizations: "localizations",
            player: "player",
            snippet: "snippet",
            statistics: "statistics",
            status: "status",
            topicDetails: "topicDetails"
        };
        this.ytParams = {
            channelId: "channelId",
            playlistId: "playlistId",
            categoryId: "categoryId",
            forUsername: "forUsername",
            id: "id",
            managedByMe: "managedByMe",
            mine: "mine",
            mySubscribers: "mySubscribers",
            maxResults: "maxResults"
        };
        this.ytItem = {
            channels: "channels",
            playlists: "playlists",
            playlistItems: "playlistItems",
            videos: "videos",
            hl: "hl",
            maxResults: "maxResults",
            onBehalfOfContentOwner: "onBehalfOfContentOwner",
            pageToken: "pageToken"
        };
    }
    return Args;
}());
exports.Args = Args;
//# sourceMappingURL=args.js.map