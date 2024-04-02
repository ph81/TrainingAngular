import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieNow = 0;
  movies: MoviesService['movies'] = [];
  constructor(private service: MoviesService, private router: Router) {
    this.movies = service.getMovies();
}

ngOnInit(): void {}

next() {
  this.movieNow =
    this.movieNow >= this.movies.length - 1
      ? 0
      : ++this.movieNow;
}
prev() {
  this.movieNow =
    this.movieNow <= 0
      ? this.movies.length - 1
      : --this.movieNow;
}

newIndex(movie: number) {
  this.movieNow = movie;
}

selectMovie(id: number) {
  this.router.navigateByUrl(`/tickets?id=${id}`);
}
}


