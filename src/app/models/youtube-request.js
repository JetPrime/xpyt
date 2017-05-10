"use strict";
var YoutubeRequest = (function () {
    function YoutubeRequest() {
        this.key = "AIzaSyBUE8mQYmZ_LKrizCcfBNJb3bsi0nviVTY";
        this.url = "https://www.googleapis.com/youtube/v3/";
    }
    YoutubeRequest.prototype.getUrl = function (pYoutubeRequest) {
        var request = this.url;
        request += pYoutubeRequest.item;
        request += "?key=" + this.key;
        request += "&part=";
        pYoutubeRequest.part.forEach(function (element) {
            request += element;
            if (pYoutubeRequest.part.indexOf(element) < pYoutubeRequest.part.length - 1)
                request += ",";
        });
        if (pYoutubeRequest.args != undefined) {
            pYoutubeRequest.args.forEach(function (element) {
                request += "&" + element.name;
                request += "=" + element.value;
            });
        }
        return request;
    };
    return YoutubeRequest;
}());
exports.YoutubeRequest = YoutubeRequest;
//# sourceMappingURL=youtube-request.js.map