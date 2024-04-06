import { Pipe, PipeTransform } from '@angular/core';
import { Food } from '../services/utils';

@Pipe({
  name: 'foodByType', standalone: true
})
export class FoodByTypePipe implements PipeTransform {

  transform(items: Food[] | undefined, foodType: string): any[] {
   
    return items!.filter(item => item.foodType!.toLowerCase().includes(foodType.toLowerCase()));
  }
}
