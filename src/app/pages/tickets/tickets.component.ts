import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/services/utils';


@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  movie: Movie | undefined;
  movieIndex = 0;

  constructor(
    private movieTickets: MoviesService,
    private route: ActivatedRoute,
     private router: Router,
  ) {
   
  }

  ngOnInit(): void {
    const movieId = +this.movieTickets.route.snapshot.queryParamMap.get('id')!;
    if (!isNaN(movieId)) { // Check if movieId is not NaN
      const movie = this.movieTickets.getMovieById(movieId);
      if (movie) { // Check if movie exists
        this.movie = movie;
      } else {
        console.error(`Movie with ID ${movieId} not found.`);
      }
    } else {
      console.error(`Invalid movie ID.`);
    }
  }
}

