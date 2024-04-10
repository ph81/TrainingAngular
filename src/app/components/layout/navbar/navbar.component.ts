import { Component, OnInit} from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true; 
  selectedCurrency: string = '';
  private currencySubscription: Subscription | null = null;
  
  constructor(private currencyService: CurrencyService) {
    
  }


  ngOnInit(): void {
     this.currencySubscription = this.currencyService.selectedCurrency.subscribe(
      currency => {
        this.selectedCurrency = currency;
      }
    );
    // Set the initial selected currency
    this.selectedCurrency = this.currencyService.currencyByCountry;
  }

  get currencyType() {
    return this.currencyService.currencyByCountry;
  }

  setCurrency() {
    this.currencyService.changeCurrencyTypeTo(this.getNextCurrency());
  }

  private getNextCurrency(): 'MXN' | 'USD' | 'EUR' {
    const current = this.currencyService.currencyByCountry;
    if (current === 'USD') {
      return 'MXN';
    } else if (current === 'MXN') {
      return 'EUR';
    } else {
      return 'USD';
    }
  }

  toggleSidebar() {
    const sidebar = document.getElementById("sidebarNav");
    sidebar?.classList.toggle("active");
  }

  ngOnDestroy(): void {
    this.currencySubscription?.unsubscribe();
  }


}