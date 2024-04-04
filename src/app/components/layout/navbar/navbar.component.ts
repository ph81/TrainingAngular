import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { Item } from 'src/app/services/utils';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  displayMobile = false;
  public isCollapsed = true;  


  ngOnInit(): void {
 
  }

  toggleSidebar() {
    const sidebar = document.getElementById("sidebarNav");
    sidebar?.classList.toggle("active");
   
  }




  

}