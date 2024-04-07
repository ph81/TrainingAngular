import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ToastService } from 'src/app/services/toast.service';
import { Item } from 'src/app/services/utils';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  cartItems: Item[] = [];
  private localStorageSubscription: Subscription = new Subscription();

  constructor(private cartService: CartService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.loadCartItems();
    this.subscribeToLocalStorageChanges();
  }

  ngOnDestroy(): void {
    this.localStorageSubscription.unsubscribe();
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
    console.log(this.cartItems)
  }

  clearCartItems(): void {
    this.cartService.clearCart();
    //this.loadCartItems(); // Update cartItems after clearing the cart
  }

  removeCartItems(item: Item): void {
    this.cartService.removeItem(item);
    this.toastService.setMessage('Item removed');
    this.loadCartItems();
  }

  subscribeToLocalStorageChanges(): void {
    this.localStorageSubscription = this.cartService.cartItemsChanged.subscribe(() => {
      this.loadCartItems();
    });
  }
 
}
