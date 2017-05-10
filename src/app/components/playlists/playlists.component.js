"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var youtube_response_1 = require("../../models/youtube-response");
var youtube_service_1 = require("../../services/youtube.service");
var PlaylistsComponent = (function () {
    function PlaylistsComponent(ytService) {
        this.ytService = ytService;
    }
    PlaylistsComponent.prototype.onPlaylistSelect = function (pId) {
        this.getPlaylist(pId);
    };
    PlaylistsComponent.prototype.getPlaylist = function (pId) {
        var _this = this;
        this.ytService.getPlaylist(pId).then(function (playlist) { return _this.playlist = playlist; });
    };
    ;
    PlaylistsComponent.prototype.onVideoSelect = function (pId) {
        this.getVideo(pId);
    };
    ;
    PlaylistsComponent.prototype.getVideo = function (pId) {
        var _this = this;
        this.ytService.getVideo(pId).then(function (video) {
            _this.video = video;
        });
    };
    ;
    return PlaylistsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", youtube_response_1.YoutubeResponse)
], PlaylistsComponent.prototype, "playlists", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", youtube_response_1.YoutubeResponse)
], PlaylistsComponent.prototype, "playlist", void 0);
PlaylistsComponent = __decorate([
    core_1.Component({
        selector: 'cmp-playlists',
        templateUrl: './playlists.component.html',
        styleUrls: ['../../../styles/app.component.css']
    }),
    __metadata("design:paramtypes", [youtube_service_1.YoutubeService])
], PlaylistsComponent);
exports.PlaylistsComponent = PlaylistsComponent;
//# sourceMappingURL=playlists.component.js.map