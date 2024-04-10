import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FoodByTypePipe } from 'src/app/pipes/food-by-type.pipe';
import { CartService } from 'src/app/services/cart.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { FoodService } from 'src/app/services/food.service';
import { ToastService } from 'src/app/services/toast.service';
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

  constructor(
    private cartService: CartService, 
    private foodService: FoodService, 
    private toastService: ToastService, 
    private currencyService: CurrencyService) {
    
  }

  ngOnInit(): void {
    this.loadCartItems();
    this.foods = this.foodService.getFoods() || [];
    // Subscribe to currency changes
    this.currencyService.selectedCurrency.subscribe(currency => {
      this.updatePrices(currency);
    });
    // Update prices initially based on the selected currency
    this.updatePrices(this.currencyService.currencyByCountry);
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
      this.toastService.setMessage('Item removed');
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
      type: 'F',
      image: food.image
    };
    this.cartItems.push(newItem);
  }
    this.cartService.updateCartItems(this.cartItems);
    this.calculateTotalCost();
    this.toastService.setMessage('Item added to cart');
  }

  calculateTotalCost(): void {
    this.totals = this.cartItems.reduce((total, item) => total + item.foodPrice!, 0);
  }

  private updatePrices(currency: string): void {
    if (currency === 'MXN' || currency === 'USD' || currency === 'EUR') {
      this.foods?.forEach(food => {
        if (food.originalPrice === undefined) {
          food.originalPrice = food.price; // Set the original price if not already set
        }
        const convertedPrice = this.currencyService.getCorrectValue(food.originalPrice!, currency);
        food.price = convertedPrice;
      });

      this.calculateTotalCost();
    } else {
      console.error('Invalid currency code:', currency);
    }
  }


}
