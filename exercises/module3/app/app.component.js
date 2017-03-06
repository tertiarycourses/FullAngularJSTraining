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
var movie_service_1 = require('./movie.service');
var AppComponent = (function () {
    function AppComponent(movieService) {
        this.movieService = movieService;
        this.title = 'Movie Listings @ GV Cinema';
        this.movies = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getMovies()
            .then(function (movies) { return _this.movies = movies; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"container\">\n      <h2>Popular Movies this month</h2>\n      <div class=\"row grid-view\">\n        <div *ngFor=\"let movie of movies\" class=\"col-md-3\">\n          <div class=\"movie\">\n            <img src=\"{{movie.imgPath}}\" />\n            <h3>{{movie.name}}</h3>\n            <p>{{movie.duration}}</p>\n            <p>User Rating: {{movie.userRating}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    .grid-view .movie {\n      height: 500px;\n      cursor: pointer;\n    }\n    .grid-view .movie img {\n      height: 70%;\n    }\n  "],
            providers: [
                movie_service_1.MovieService
            ]
        }), 
        __metadata('design:paramtypes', [movie_service_1.MovieService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map