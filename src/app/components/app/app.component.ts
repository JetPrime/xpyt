import { Component, ViewChild, ElementRef } from '@angular/core';
import { YoutubeResponse } from '../../models/youtube-response';

@Component({
  selector: 'app',
  templateUrl:'./app.component.html',
  styleUrls: [ '../../styles/app.component.css' ]
})
export class AppComponent
{ 
  channelRequest: string;
  playlists: YoutubeResponse;
  playlist: YoutubeResponse;
  video: YoutubeResponse;

  onRequest(pChannelRequest: string) {
    this.channelRequest = pChannelRequest;
  };

  onPlaylistsEmit(pPlaylists: YoutubeResponse){
    this.playlists = pPlaylists;
  };

  onPlaylistEmit(pPlaylist: YoutubeResponse){
    this.playlist = pPlaylist;
  };

  onVideoEmit(pVideo: YoutubeResponse){
    this.video = pVideo;
  };

}