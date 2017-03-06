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
var router_deprecated_1 = require('@angular/router-deprecated');
var movie_service_1 = require('./movie.service');
var MovieDetailComponent = (function () {
    function MovieDetailComponent(router, movieService, routeParams) {
        this.router = router;
        this.movieService = movieService;
        this.routeParams = routeParams;
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.movieService.getMovie(id)
            .then(function (movie) { return _this.movie = movie; });
    };
    MovieDetailComponent.prototype.goBack = function () {
        var link = ['LanguageGrid', { language: '' }];
        this.router.navigate(link);
    };
    MovieDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-movie-detail',
            templateUrl: 'app/movie-detail.component.html',
            styleUrls: ['app/movie-detail.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, movie_service_1.MovieService, router_deprecated_1.RouteParams])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());
exports.MovieDetailComponent = MovieDetailComponent;
//# sourceMappingURL=movie-detail.component.js.map