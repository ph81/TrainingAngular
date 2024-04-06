import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FoodByTypePipe } from 'src/app/pipes/food-by-type.pipe';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food, Item } from 'src/app/services/utils';

@Component({
  selector: 'app-snacks',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule, FoodByTypePipe],
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit {
  foods: Food[] | undefined;
  foodQuantity: number = 0;
  totals: number = 0;
  cartItems: Item[] = [];

  constructor(private cartService: CartService, private foodService: FoodService) {
    
  }

  ngOnInit(): void {
    this.loadCartItems();
    this.foods = this.foodService.getFoods() || [];
    //this.cartService.clearCart();
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalCost();
  }

  removeItem(itemId: number): void {
    const indexToRemove = this.cartItems.findIndex(item => item.id === itemId);
    if (indexToRemove !== -1) {
      this.cartItems.splice(indexToRemove, 1);
      this.cartService.updateCartItems(this.cartItems);
      this.calculateTotalCost();
    }
  }

  clearCart(): void {
    this.cartService.clearCart();
    //this.loadCartItems(); // Reload cart items after clearing
  }

  addItemToCart(food: Food): void {
    const existingItemIndex = this.cartItems.findIndex(item => item.id === food.id);
    let itemPrice = food.price! * food.quantity!;
      // If item already exists in cart, update its properties
  if (existingItemIndex !== -1) {
    this.cartItems[existingItemIndex].quantity! = food.quantity!;
    this.cartItems[existingItemIndex].price! = this.cartItems[existingItemIndex].quantity! * food.price!;
    console.log('exist')
  } else {
    console.log('new')
    // If item doesn't exist in cart, add new item
    const newItem: Item = {
      id: food.id,
      title: food.title,
      price: itemPrice,
      quantity: food.quantity,
      type: 'F'
    };
    this.cartItems.push(newItem);
  }
    this.cartService.updateCartItems(this.cartItems);
    this.calculateTotalCost();
  }

  calculateTotalCost(): void {
    this.totals = this.cartItems.reduce((total, item) => total + item.foodPrice!, 0);
  }


}
