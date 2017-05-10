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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var youtube_request_1 = require("../models/youtube-request");
var youtube_args_1 = require("../models/youtube-args");
var args_1 = require("../models/args");
var YoutubeService = (function () {
    function YoutubeService(http, args) {
        this.http = http;
        this.args = args;
    }
    YoutubeService.prototype.getChannel = function (pChannel) {
        var request = new youtube_request_1.YoutubeRequest();
        request.item = this.args.ytItem.channels;
        request.part = [];
        request.part.push(this.args.ytPart.snippet);
        request.part.push(this.args.ytPart.id);
        request.args = [
            new youtube_args_1.YoutubeArgs(this.args.ytParams.forUsername, pChannel)
        ];
        return this.http.get(request.getUrl(request))
            .toPromise()
            .then(function (response) { return response.json().items; })
            .catch(this.handleError);
    };
    ;
    YoutubeService.prototype.getPlaylists = function (pId) {
        var request = new youtube_request_1.YoutubeRequest();
        request.item = this.args.ytItem.playlists;
        request.part = [];
        request.part.push(this.args.ytPart.snippet);
        request.part.push(this.args.ytPart.id);
        request.args = [
            new youtube_args_1.YoutubeArgs(this.args.ytParams.channelId, pId),
            new youtube_args_1.YoutubeArgs(this.args.ytParams.maxResults, "50")
        ];
        return this.http.get(request.getUrl(request))
            .toPromise()
            .then(function (response) { return response.json().items; })
            .catch(this.handleError);
    };
    ;
    YoutubeService.prototype.getPlaylist = function (pId) {
        var request = new youtube_request_1.YoutubeRequest();
        request.item = this.args.ytItem.playlistItems;
        request.part = [];
        request.part.push(this.args.ytPart.snippet);
        request.part.push(this.args.ytPart.id);
        request.args = [
            new youtube_args_1.YoutubeArgs(this.args.ytParams.playlistId, pId),
            new youtube_args_1.YoutubeArgs(this.args.ytParams.maxResults, "50")
        ];
        return this.http.get(request.getUrl(request))
            .toPromise()
            .then(function (response) { return response.json().items; })
            .catch(this.handleError);
    };
    ;
    YoutubeService.prototype.getVideo = function (pId) {
        var request = new youtube_request_1.YoutubeRequest();
        request.item = this.args.ytItem.videos;
        request.part = [];
        request.part.push(this.args.ytPart.player);
        request.args = [
            new youtube_args_1.YoutubeArgs(this.args.ytParams.id, pId),
        ];
        return this.http.get(request.getUrl(request))
            .toPromise()
            .then(function (response) { return response.json().items; })
            .catch(this.handleError);
    };
    ;
    YoutubeService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return YoutubeService;
}());
YoutubeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        args_1.Args])
], YoutubeService);
exports.YoutubeService = YoutubeService;
//# sourceMappingURL=youtube.service.js.map