import { Component, Input } from '@angular/core';

export class Movie {
  id: number;
  name: string;
  description: string;
  imgPath: string;
  duration: number;
  genre: any;
  language: string;
  mpaaRating: any;
  userRating: string;
}

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h2>{{movie.name}}</h2>
          <p>({{movie.mpaaRating.type}}: {{movie.mpaaRating.label}})</p>
        </div>
      </div>
      <hr>
        <div class="row">
        <div class="col-md-4">
          <img src="{{movie.imgPath}}" />
        </div>
        <div class="col-md-8">
          <h3>Details</h3>
              <p>Genre: {{movie.genre}}</p>
              <p>Language: {{movie.language}}</p>
          <p>Duration: {{movie.duration}} minutes</p>
              <p>User Rating: {{movie.userRating}}</p>
          <hr>
          <h3>Synopsis</h3>
          <p>{{movie.description}}</p>
            <hr>
            <button class="btn btn-default left movie-details">Edit Movie Details</button>
            <button class="btn btn-default left">Back</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .movie-details {
      margin-right: 15px;
    }
  `]
})
export class AppComponent {
  title = 'Movie Listings @ GV Cinema';
  movie: Movie = { 
    "id": 25, 
    "name": "Disney's Zootopia",
    "description": "The modern mammal metropolis of Zootopia is a city like no other. Comprised of habitat neighborhoods like ritzy Sahara Square and frigid Tundratown, it’s a melting pot where animals from every environment live together—a place where no matter what you are, from the biggest elephant to the smallest shrew, you can be anything. But when rookie officer Judy Hopps (voice of Ginnifer Goodwin) arrives, she discovers that being the first bunny on a police force of big, tough animals isn’t so easy. Determined to prove herself, she jumps at the opportunity to crack a case, even if it means partnering with a fast-talking, scam-artist fox, Nick Wilde (voice of Jason Bateman), to solve the mystery.",
    "imgPath": "app/images/zootopia.jpg",
    "duration": 109,
    "genre": ['Animation','Comedy'],
    "language": "English",
    "mpaaRating": {
      "type" : "PG",
      "label": "Some thematic elements, rude humour and action"
    },
    "userRating": "5"
  }
}