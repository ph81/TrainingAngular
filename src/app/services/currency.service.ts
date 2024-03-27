import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  currencyByCountry: 'MEX' | 'USA' | 'ES' = 'MEX';
  rates = {
    MEX: 1,
    USA: 0.060,
    ES: 0.055,
  };

  constructor() {}

  changeCurrencyTypeTo(currencyByCountry: 'MEX' | 'USA' | 'ES') {
    this.currencyByCountry = currencyByCountry;
  }

  getCorrectValue(value: number) {
    return value * this.rates[this.currencyByCountry];
  }
}
