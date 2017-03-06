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
var core_1 = require('@angular/core');
var Movie = (function () {
    function Movie() {
    }
    return Movie;
}());
exports.Movie = Movie;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Movie Listings @ GV Cinema';
        this.movie = {
            "id": 25,
            "name": "Disney's Zootopia",
            "description": "The modern mammal metropolis of Zootopia is a city like no other. Comprised of habitat neighborhoods like ritzy Sahara Square and frigid Tundratown, it’s a melting pot where animals from every environment live together—a place where no matter what you are, from the biggest elephant to the smallest shrew, you can be anything. But when rookie officer Judy Hopps (voice of Ginnifer Goodwin) arrives, she discovers that being the first bunny on a police force of big, tough animals isn’t so easy. Determined to prove herself, she jumps at the opportunity to crack a case, even if it means partnering with a fast-talking, scam-artist fox, Nick Wilde (voice of Jason Bateman), to solve the mystery.",
            "imgPath": "app/images/zootopia.jpg",
            "duration": 109,
            "genre": ['Animation', 'Comedy'],
            "language": "English",
            "mpaaRating": {
                "type": "PG",
                "label": "Some thematic elements, rude humour and action"
            },
            "userRating": "5"
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <h2>{{movie.name}}</h2>\n          <p>({{movie.mpaaRating.type}}: {{movie.mpaaRating.label}})</p>\n        </div>\n      </div>\n      <hr>\n        <div class=\"row\">\n        <div class=\"col-md-4\">\n          <img src=\"{{movie.imgPath}}\" />\n        </div>\n        <div class=\"col-md-8\">\n          <h3>Details</h3>\n              <p>Genre: {{movie.genre}}</p>\n              <p>Language: {{movie.language}}</p>\n          <p>Duration: {{movie.duration}} minutes</p>\n              <p>User Rating: {{movie.userRating}}</p>\n          <hr>\n          <h3>Synopsis</h3>\n          <p>{{movie.description}}</p>\n            <hr>\n            <button class=\"btn btn-default left movie-details\">Edit Movie Details</button>\n            <button class=\"btn btn-default left\">Back</button>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    .movie-details {\n      margin-right: 15px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map