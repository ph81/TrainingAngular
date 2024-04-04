import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { Item } from 'src/app/services/utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  displayMobile = false;
  public isCollapsed = true;  

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
 
  }

  toggleSidebar() {
    const sidebar = document.getElementById("sidebarNav");
    sidebar?.classList.toggle("active");
   
  }


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

  

}