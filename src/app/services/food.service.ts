import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food, Item } from './utils';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  foods: Food[] = [
    {id: 202, title: 'Amelie Crepe', image: '/assets/food/amelieCrepe.jpg', price: 12,  foodType: 'sweet' },
    {id: 203, title: 'Godzilla Bucket', image: '/assets/food/bucketGodzilla.jpg', price: 35,  isBucket: true },
    {id: 204, title: 'Taylor Bucket', image: '/assets/food/bucketTaylor.jpg', price: 42,  isBucket: true },
    {id: 205, title: 'Cheese Sticks', image: '/assets/food/cheeseSticks.jpg', price: 8,  foodType: 'snack' },
    {id: 206, title: 'Chicken Boneless', image: '/assets/food/chickenBoneless.jpg', price: 10, foodType: 'big plate' },
    {id: 207, title: 'Gerwig Roll', image: '/assets/food/GerwigRoll.jpg', price: 12,  foodType: 'sushi' },
    {id: 208, title: 'Loaded Nachos', image: '/assets/food/loadedNachos.jpg', price: 10,  foodType: 'big plate' },
    {id: 209, title: 'Lotus Waffle', image: '/assets/food/LotusWaffle.jpg', price: 14, foodType: 'sweet' },
    {id: 210, title: 'Mac & Cheese', image: '/assets/food/mac-n-cheese.jpg', price: 8,  foodType: 'snack' },
    {id: 211, title: 'Nolan Roll', image: '/assets/food/NolanRoll.jpg', price: 12, foodType: 'sushi' },
    {id: 212, title: 'Meat Lovers Pizza', image: '/assets/food/pizza_Meatlover.jpg', price: 18, foodType: 'pizza' },
    {id: 213, title: 'TMNT Pizza', image: '/assets/food/pizza_Pepperoni.jpg', price: 18, foodType: 'pizza' },
    {id: 214, title: 'Butter Popcorn', image: '/assets/food/popcorn_butter.jpg', price: 10,  foodType: 'snack' },
    {id: 201, title: 'Caramel Popcorn', image: '/assets/food/popcorn_caramel.jpg', price: 10, foodType: 'sweet' },
    {id: 215, title: 'Soda', image: '/assets/food/soda.jpg', price: 8,  foodType: 'snack' },
    {id: 216, title: 'Tarantino Roll', image: '/assets/food/TarantinoRoll.jpg', price: 12, foodType: 'sushi' },
    {id: 217, title: 'Turkey Crepe', image: '/assets/food/turkeyCrepe.jpg', price: 11,  foodType: 'big plate' },

  ]

  getFoods(): typeof this.foods {
    return this.foods;
  }

  
}

