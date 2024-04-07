import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../services/utils';

@Pipe({
  name: 'subtotal',
  pure: false
})
export class SubtotalPipe implements PipeTransform {

  transform(cartItems: Item[]): number {
    if (!cartItems || !cartItems.length) {
      return 0;
    }
    return cartItems.reduce((acc, item) => {
      const price = item.price || 0; 
      return acc + price;
    }, 0);
  }
}
