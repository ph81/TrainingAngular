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

  removeItem(itemToRemove: Item): void {
    let cartItems: Item[] = this.getCartItems();
    const updatedCartItems = cartItems.filter(item => item.id !== itemToRemove.id);
    this.updateCartItems(updatedCartItems);
  }

  clearCart(): void {
    console.log(localStorage.getItem('cartItems'))
    localStorage.removeItem('cartItems');
    localStorage.setItem('cartItems', JSON.stringify([])); // Force clearing
    console.log(localStorage.getItem('cartItems'))
    this.cartItemsChanged.next();
  }
}