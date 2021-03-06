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
var grid_view_component_1 = require('./grid-view.component');
var movie_detail_component_1 = require('./movie-detail.component');
var edit_movie_detail_component_1 = require('./edit-movie-detail.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Movie Listings @ GV Cinema';
    }
    AppComponent.prototype.onLanguageChange = function (deviceValue) {
        console.log("lang: " + deviceValue);
        var link = ['LanguageGrid', { language: deviceValue }];
        this.router.navigate(link);
    };
    AppComponent.prototype.onAudienceChange = function (deviceValue) {
        console.log(deviceValue);
        var link = ['AudienceGrid', { audience: deviceValue }];
        this.router.navigate(link);
    };
    AppComponent.prototype.onRatingChange = function (deviceValue) {
        console.log(deviceValue);
        var link = ['RatingGrid', { rating: deviceValue }];
        this.router.navigate(link);
    };
    AppComponent = __decorate([
        router_deprecated_1.RouteConfig([
            {
                path: '/:language',
                name: 'LanguageGrid',
                component: grid_view_component_1.GridViewComponent,
                useAsDefault: true
            },
            {
                path: 'audience/:audience',
                name: 'AudienceGrid',
                component: grid_view_component_1.GridViewComponent,
            },
            {
                path: 'rating/:rating',
                name: 'RatingGrid',
                component: grid_view_component_1.GridViewComponent,
            },
            {
                path: '/detail/:id',
                name: 'MovieDetail',
                component: movie_detail_component_1.MovieDetailComponent
            },
            {
                path: '/edit/:id',
                name: 'EditMovieDetail',
                component: edit_movie_detail_component_1.EditMovieDetailComponent
            }
        ]),
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                movie_service_1.MovieService
            ]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map