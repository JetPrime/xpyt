import { Component, Input, Output, EventEmitter } from '@angular/core';

import { YoutubeResponse } from '../../models/youtube-response';
import { YoutubeSearch } from '../../models/youtube-search';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'cmp-channel',
  templateUrl:'./channel.component.html',
  styleUrls: [ '../../styles/app.component.css', './channel.component.css' ]
})

export class ChannelComponent {

  @Input()
  channelRequest: string;
  @Output()
  onPlaylistsEmit= new EventEmitter<YoutubeResponse>();
  playlists: YoutubeResponse;
  playlist: YoutubeResponse;
  channel : YoutubeSearch;

  constructor( private ytService: YoutubeService){}

  ngOnChanges(): void {
    if(this.channelRequest)
      this.getChannel();
  };

  getChannel(): void {
    this.ytService.search(this.channelRequest).then(
      channel => { 
        this.channel = channel[0];
        this.getPlaylists(channel[0].id.channelId);
      }
    );
  };

  getPlaylists(pId: string): void {
    this.ytService.getPlaylists(pId).then(
      playlists => this.onPlaylistsEmit.emit(playlists)
    );
  };

}