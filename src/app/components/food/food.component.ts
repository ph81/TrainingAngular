import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FoodService } from 'src/app/services/food.service';
import { Food, Item } from 'src/app/services/utils';

@Component({
  selector: 'app-food',
  standalone: true,
   imports: [FormsModule, NgbModule, RouterModule, CommonModule],
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  foods: Food[] = [];
  cart: Item[] = [];
  @Output() updateQuantity = new EventEmitter<any>();
  @Output() removeItemFromCart = new EventEmitter<Item>();
  @Output() getCartTotal = new EventEmitter<number>();

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.foods = this.foodService.getFoods();
  }

  addToCart(food: any) {
    const existingItem = this.cart.find(item => item.id === food.id);
    if (existingItem) {
      existingItem.quantity!++;
    } else {
      this.cart.push({ ...food, quantity: 1 });
    }
  }

  emitUpdateQuantity(item: Item, delta: number) {
    this.updateQuantity.emit({ item, delta });
  }

  emitRemoveItemFromCart(item: Item) {
    this.removeItemFromCart.emit(item);
  }

  getCartTotalFn() {
    let total = 0;
    this.cart.forEach(item => (total += item.quantity! * item.foodPrice!));
    this.getCartTotal.emit(total);
  }
}
