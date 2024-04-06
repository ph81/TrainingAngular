import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food, Item } from './utils';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  foods: Food[] = [
    {id: 112, title: 'Amelie Crepe', image: '/assets/food/amelieCrepe.jpg', price: 12,  foodType: 'sweet', quantity: 1 },
    {id: 203, title: 'Godzilla Bucket', image: '/assets/food/bucketGodzilla.jpg', price: 35,  isBucket: true, quantity: 1 },
    {id: 204, title: 'Taylor Bucket', image: '/assets/food/bucketTaylor.jpg', price: 42,  isBucket: true , quantity: 1},
    {id: 103, title: 'Cheese Sticks', image: '/assets/food/cheeseSticks.jpg', price: 8,  foodType: 'snack', quantity: 1 },
    {id: 104, title: 'Chicken Boneless', image: '/assets/food/chickenBoneless.jpg', price: 10, foodType: 'big plate', quantity: 1 },
    {id: 107, title: 'Gerwig Roll', image: '/assets/food/GerwigRoll.jpg', price: 12,  foodType: 'sushi', quantity: 1 },
    {id: 105, title: 'Loaded Nachos', image: '/assets/food/loadedNachos.jpg', price: 10,  foodType: 'big plate', quantity: 1 },
    {id: 113, title: 'Lotus Waffle', image: '/assets/food/LotusWaffle.jpg', price: 14, foodType: 'sweet', quantity: 1 },
    {id: 106, title: 'Mac & Cheese', image: '/assets/food/mac-n-cheese.jpg', price: 8,  foodType: 'snack', quantity: 1 },
    {id: 108, title: 'Nolan Roll', image: '/assets/food/NolanRoll.jpg', price: 12, foodType: 'sushi' , quantity: 1},
    {id: 109, title: 'Meat Lovers Pizza', image: '/assets/food/pizza_Meatlover.jpg', price: 18, foodType: 'pizza', quantity: 1 },
    {id: 110, title: 'TMNT Pizza', image: '/assets/food/pizza_Pepperoni.jpg', price: 18, foodType: 'pizza', quantity: 1 },
    {id: 100, title: 'Butter Popcorn', image: '/assets/food/popcorn_butter.jpg', price: 10,  foodType: 'snack' , quantity: 1},
    {id: 101, title: 'Caramel Popcorn', image: '/assets/food/popcorn_caramel.jpg', price: 10, foodType: 'sweet' , quantity: 1},
    {id: 102, title: 'Soda', image: '/assets/food/soda.jpg', price: 8,  foodType: 'snack' , quantity: 1},
    {id: 109, title: 'Tarantino Roll', image: '/assets/food/TarantinoRoll.jpg', price: 12, foodType: 'sushi', quantity: 1 },
    {id: 111, title: 'Turkey Crepe', image: '/assets/food/turkeyCrepe.jpg', price: 11,  foodType: 'big plate', quantity: 1 },

  ]

  getFoods(): typeof this.foods {
    return this.foods.slice().sort((a, b) => a.id - b.id);
  }

  
}

