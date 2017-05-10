import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { YoutubeResponse } from '../models/youtube-response';
import { YoutubeRequest } from '../models/youtube-request';
import { YoutubeArgs } from '../models/youtube-args';
import { Args } from '../models/args';

@Injectable()
export class YoutubeService {

    constructor(
        private http: Http,
        private args: Args
    ) { }

    getChannel(pChannel: string): Promise<YoutubeResponse> {

        let request = new YoutubeRequest();
        request.item = this.args.ytItem.channels;
        request.part = [];
        request.part.push(this.args.ytPart.snippet);
        request.part.push(this.args.ytPart.id);
        request.args = [
            new YoutubeArgs(this.args.ytParams.forUsername, pChannel)
        ];

        return this.http.get(request.getUrl(request))
                .toPromise()
                .then(response => response.json().items as YoutubeResponse)
                .catch(this.handleError);
    };

    getPlaylists(pId: string): Promise<YoutubeResponse> {
        let request = new YoutubeRequest();
        request.item = this.args.ytItem.playlists;
        request.part = [];
        request.part.push(this.args.ytPart.snippet);
        request.part.push(this.args.ytPart.id);
        request.args = [
            new YoutubeArgs(this.args.ytParams.channelId, pId),
            new YoutubeArgs(this.args.ytParams.maxResults, "50")
        ];

        return this.http.get(request.getUrl(request))
                .toPromise()
                .then(response => response.json().items as YoutubeResponse)
                .catch(this.handleError);        
    };

    getPlaylist(pId: string): Promise<YoutubeResponse> {
         let request = new YoutubeRequest();
        request.item = this.args.ytItem.playlistItems;
        request.part = [];
        request.part.push(this.args.ytPart.snippet);
        request.part.push(this.args.ytPart.id);
        request.args = [
            new YoutubeArgs(this.args.ytParams.playlistId, pId),
            new YoutubeArgs(this.args.ytParams.maxResults, "50")
        ];

        return this.http.get(request.getUrl(request))
                .toPromise()
                .then(response => response.json().items as YoutubeResponse)
                .catch(this.handleError);        
    };

    getVideo(pId: string): Promise<YoutubeResponse> {
         let request = new YoutubeRequest();
        request.item = this.args.ytItem.videos;
        request.part = [];
        request.part.push(this.args.ytPart.player);
        request.args = [
            new YoutubeArgs(this.args.ytParams.id, pId),
        ];

        return this.http.get(request.getUrl(request))
                .toPromise()
                .then(response => response.json().items as YoutubeResponse)
                .catch(this.handleError);        
    };

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}