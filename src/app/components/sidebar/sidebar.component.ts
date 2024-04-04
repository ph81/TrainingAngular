import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { Item } from 'src/app/services/utils';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  cartItems: Item[] = [];
  private localStorageSubscription: Subscription = new Subscription();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadCartItems();
    this.subscribeToLocalStorageChanges();
  }

  ngOnDestroy(): void {
    this.localStorageSubscription.unsubscribe();
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  clearCartItems(): void {
    this.cartService.clearCart();
    this.loadCartItems(); // Update cartItems after clearing the cart
  }

  subscribeToLocalStorageChanges(): void {
    this.localStorageSubscription = this.cartService.cartItemsChanged.subscribe(() => {
      this.loadCartItems();
    });
  }
 
}
