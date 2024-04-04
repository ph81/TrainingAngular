import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from './utils';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemsChanged = new Subject<void>();

  constructor() { }

  getCartItems(): Item[] {
    const cartItemsString = localStorage.getItem('cartItems');
    return cartItemsString ? JSON.parse(cartItemsString) : [];
  }

  updateCartItems(cartItems: Item[]): void {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    this.cartItemsChanged.next();
  }

  clearCart(): void {
    localStorage.removeItem('cartItems');
    this.cartItemsChanged.next();
  }
}