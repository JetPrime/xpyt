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
var youtube_service_1 = require("./youtube.service");
var AppComponent = (function () {
    function AppComponent(ytService) {
        this.ytService = ytService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getChannel();
    };
    ;
    AppComponent.prototype.getChannel = function () {
        var _this = this;
        this.ytService.getChannel().then(function (channel) {
            _this.channel = channel[0];
            _this.getPlaylists(channel[0].id);
        });
    };
    ;
    AppComponent.prototype.getPlaylists = function (pId) {
        var _this = this;
        this.ytService.getPlaylists(pId).then(function (playlists) { return _this.playlists = playlists; });
    };
    ;
    AppComponent.prototype.getPlaylist = function (pId) {
        var _this = this;
        this.ytService.getPlaylist(pId).then(function (playlist) { return _this.playlist = playlist; });
    };
    ;
    AppComponent.prototype.onSelect = function (pId) {
        this.getPlaylist(pId);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        providers: [youtube_service_1.YoutubeService]
    }),
    __metadata("design:paramtypes", [youtube_service_1.YoutubeService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map