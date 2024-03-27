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
      image: 'assets/carousel/dunepart2.jpg',
      url: ''
    },
    {
      id: 2,
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
      id: 4,
      title: 'Kung Fu Panda 4',
      image: 'assets/carousel/kungfupanda.png',
      url: ''
    }
  ];

  getCarousel(): typeof this.carousel {
    return this.carousel;
  }

}
