import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() { }

  private carousel = [
    {
      id: 1,
      title: 'Dune Part 2',
      image: 'assets/carousel/dune2.jpg',
      url: ''
    },
    {
      id: 22,
      title: 'Godzilla Minus One',
      image: 'assets/carousel/godzilla-minus-one.jpg',
      url: ''
    },
    {
      id: 3,
      title: 'Past Lives',
      image: 'assets/carousel/past-lives.jpg',
      url: ''
    },
    {
      id: 9,
      title: 'Kung Fu Panda 4',
      image: 'assets/carousel/kungfupanda.jpg',
      url: ''
    },
    {
      id: 8,
      title: 'Poor Things',
      image: 'assets/carousel/poorthings.jpg',
      url: ''
    }
  ];

  getCarousel(): typeof this.carousel {
    return this.carousel;
  }

}
