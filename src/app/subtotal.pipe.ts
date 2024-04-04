import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './services/utils';

@Pipe({
  name: 'subtotal'
})
export class SubtotalPipe implements PipeTransform {

  transform(cartItems: Item[]): number {
    if (!cartItems || !cartItems.length) {
      return 0;
    }
    return cartItems.reduce((acc, item) => {
      const price = item.ticketPrice || 0; // Use ticketPrice or default to 0
      const foodPrice = item.foodPrice || 0;   // Use foodPrice or default to 0
      return acc + price + foodPrice;
    }, 0);
  }
}
