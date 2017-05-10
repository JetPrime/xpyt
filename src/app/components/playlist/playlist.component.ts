import { Component, Input, EventEmitter, Output} from '@angular/core';

import { YoutubeResponse } from '../../models/youtube-response';
import { YoutubeService } from '../../services/youtube.service';


@Component({
  selector: 'cmp-playlist',
  templateUrl:'./playlist.component.html',
  styleUrls: [ '../../styles/app.component.css', './playlist.component.css' ]
})

export class PlaylistComponent {

    @Input()
    playlist: YoutubeResponse;
    @Output()
    onVideoEmit = new EventEmitter<YoutubeResponse>();

    video: YoutubeResponse;

    constructor( private ytService: YoutubeService){}

    onVideoSelect(pId: string): void {
        this.getVideo(pId);
    };

    getVideo(pId: string): void {
        this.ytService.getVideo(pId).then(
            video => this.onVideoEmit.emit(video)
        );
    };


}