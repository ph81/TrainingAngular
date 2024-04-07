import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  currencyByCountry: 'MXN' | 'USD' | 'EUR' = 'USD';
  rates = {
    MXN: 16.45,
    USD: 1,
    EUR: 0.92,
  };

  private selectedCurrencySubject = new BehaviorSubject<string>('USD'); // Initialize with default
  selectedCurrency = this.selectedCurrencySubject.asObservable();

  constructor() {}

  changeCurrencyTypeTo(currencyByCountry: 'MXN' | 'USD' | 'EUR') {
    console.log(`Currency updated to ${currencyByCountry}`);
    this.currencyByCountry = currencyByCountry;
    this.selectedCurrencySubject.next(currencyByCountry); // Emit new currency
  }
  

  getCorrectValue(value: number, currency: 'MXN' | 'USD' | 'EUR') {
    return value * this.rates[currency];
  }
}
