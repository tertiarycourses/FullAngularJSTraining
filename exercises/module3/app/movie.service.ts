import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {
	getMovies() {
		return Promise.resolve(MOVIES);
	}
}