import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: MoviesService['movies'] = [];
  constructor(public service: MoviesService, public router: Router) {
    this.movies = service.getMovies();
}

ngOnInit(): void {}


selectMovie(id: number) {
  this.router.navigateByUrl(`/tickets?id=${id}`);
}
}


