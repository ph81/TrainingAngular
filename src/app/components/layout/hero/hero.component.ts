import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselService } from 'src/app/services/carousel.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit  {
  movieNow = 0;
  carousel: CarouselService['carousel'] = [];
  constructor(private service: CarouselService, private router: Router) {
    this.carousel = service.getCarousel();
  }

  ngOnInit(): void {}

  next() {
    this.movieNow =
      this.movieNow >= this.carousel.length - 1
        ? 0
        : ++this.movieNow;
  }
  prev() {
    this.movieNow =
      this.movieNow <= 0
        ? this.carousel.length - 1
        : --this.movieNow;
  }

  newIndex(movie: number) {
    this.movieNow = movie;
  }

  selectMovie(index: number) {
    this.router.navigateByUrl(`/tickets?id=${index}`);
  }
}
