import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  displayMobile = false;
  public isCollapsed = true;  

  constructor(private currencyService: CurrencyService) {}

  get currencyType() {
    return this.currencyService.currencyByCountry;
  }

  setCurrency() {
    const current = this.currencyService.currencyByCountry;
    if (current === 'MEX') {
      this.currencyService.currencyByCountry = 'USA';
    } else if (current === 'USA') {
      this.currencyService.currencyByCountry = 'ES';
    } else {
      this.currencyService.currencyByCountry = 'MEX';
    }
  }

  ngOnInit(): void {}

}