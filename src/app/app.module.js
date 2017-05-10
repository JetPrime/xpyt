"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var youtube_service_1 = require("./services/youtube.service");
var youtube_request_1 = require("./models/youtube-request");
var app_component_1 = require("./components/app/app.component");
var channel_component_1 = require("./components/channel/channel.component");
var playlists_component_1 = require("./components/playlists/playlists.component");
var video_component_1 = require("./components/video/video.component");
var search_component_1 = require("./components/search/search.component");
var args_1 = require("./models/args");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, channel_component_1.ChannelComponent, playlists_component_1.PlaylistsComponent, video_component_1.VideoComponent,
            search_component_1.SearchComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [youtube_request_1.YoutubeRequest, args_1.Args, youtube_service_1.YoutubeService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map