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
var GridViewComponent = (function () {
    function GridViewComponent(router, movieService, routeParams) {
        this.router = router;
        this.movieService = movieService;
        this.routeParams = routeParams;
        this.movies = [];
    }
    GridViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var selectedLanguage = this.routeParams.get('language');
        var selectedAudience = this.routeParams.get('audience');
        var selectedRating = this.routeParams.get('rating');
        if (selectedLanguage) {
            this.movieService.getMoviesByLanguage(selectedLanguage)
                .then(function (movies) { return _this.movies = movies; });
        }
        else if (selectedAudience) {
            this.movieService.getMoviesByAudience(selectedAudience)
                .then(function (movies) { return _this.movies = movies; });
        }
        else if (selectedRating) {
            this.movieService.getMoviesByRating(selectedRating)
                .then(function (movies) { return _this.movies = movies; });
        }
        else {
            this.movieService.getMovies()
                .then(function (movies) { return _this.movies = movies; });
        }
    };
    GridViewComponent.prototype.gotoDetail = function (movie) {
        var link = ['MovieDetail', { id: movie.id }];
        this.router.navigate(link);
    };
    GridViewComponent = __decorate([
        core_1.Component({
            selector: 'my-grid-view',
            templateUrl: 'app/grid-view.component.html',
            styleUrls: ['app/grid-view.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, movie_service_1.MovieService, router_deprecated_1.RouteParams])
    ], GridViewComponent);
    return GridViewComponent;
}());
exports.GridViewComponent = GridViewComponent;
//# sourceMappingURL=grid-view.component.js.map