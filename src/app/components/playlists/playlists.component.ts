import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { YoutubeResponse } from '../../models/youtube-response';
import { YoutubeService } from '../../services/youtube.service';


@Component({
  selector: 'cmp-playlists',
  templateUrl:'./playlists.component.html',
  styleUrls: [ '../../styles/app.component.css', './playlists.component.css' ] 
})

export class PlaylistsComponent {
  
  @Input()
  playlists : YoutubeResponse;
  @Output()
  onPlaylistEmit= new EventEmitter<YoutubeResponse>();

  playlistState = "active";
  playlist : YoutubeResponse;

  constructor( private ytService: YoutubeService){}

  onPlaylistSelect(pId: string): void {
    this.playlistState = (this.playlistState == "active") ? "inactive" : "active";
    this.getPlaylist(pId);
  }
  
  getPlaylist(pId: string): void {
    this.ytService.getPlaylist(pId).then(
      playlist => this.onPlaylistEmit.emit(playlist)
    );
  };
}