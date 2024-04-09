import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { MoviesService } from 'src/app/services/movies.service';
import { ToastService } from 'src/app/services/toast.service';
import { Item, Movie } from 'src/app/services/utils';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule, RouterModule, SharedModule],
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  private currencySubscription: Subscription | null = null;
  constructor(
    private movieTickets: MoviesService,
    private cartService: CartService,
    private toastService: ToastService,
    private currencyService: CurrencyService,
    private modalService: NgbModal
  ) {
   
  }
  movie: Movie | undefined;
  selectedScreeningTime: string = '';
  ticketType: string = 'adult';
  ticketQuantity: number = 0;
  ticketPrices: { type: string, price: number }[] = [
    { type: 'adult', price: 14  },
    { type: 'kids', price: 8 },
    { type: 'senior', price: 10 },
  ];
  selectedTicketPrice: number = this.ticketPrices[0].price;
  totals: number = 0;
  cartItems: Item[] = [];
  active: number = 1; // Default active tab


  ngOnInit(): void {
    const movieId = +this.movieTickets.route.snapshot.queryParamMap.get('id')!;
    if (!isNaN(movieId)) { // Check if movieId is not NaN
      const movie = this.movieTickets.getMovieById(movieId);
      if (movie) { // Check if movie exists
        this.movie = movie;
      } else {
        console.error(`Movie with ID ${movieId} not found.`);
      }
    } else {
      console.error(`Invalid movie ID.`);
    }
      // Subscribe to currency changes
      this.currencySubscription = this.currencyService.selectedCurrency.subscribe(currency => {
        this.updatePrices(currency);
      });
  
      // Update prices initially based on the selected currency
      this.updatePrices(this.currencyService.currencyByCountry);
    //clear ticket cart every time a new movie is displayed
    this.cartService.clearCart();
  }

  private updatePrices(currency: string): void {
    // Ensure that the currency is one of the valid options
    if (currency === 'MXN' || currency === 'USD' || currency === 'EUR') {
      // Iterate through ticket prices and update them to reflect the selected currency
      this.ticketPrices.forEach(ticket => {
        ticket.price = this.currencyService.getCorrectValue(ticket.price, currency);
      });
      
      // Update the selected ticket price based on the current ticket type
      this.calculatePrice();
    } else {
      console.error('Invalid currency code:', currency);
    }
  }
  

  addToCart(): void {
    // Get price based on the selected ticket type
    const totalPrice = this.selectedTicketPrice * this.ticketQuantity;
    const totals = this.calculateTotal()
      // Add selected item to cart
      this.cartItems.push({
        id: this.movie?.id,
        title: this.movie?.title,
        screeningTime: this.selectedScreeningTime,
        ticketType: this.ticketType,
        quantity: this.ticketQuantity,
        price: totalPrice,
        type: 'M',
        image: this.movie?.poster
      });
      this.cartService.updateCartItems(this.cartItems);

      //save to localstorage
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      console.log(localStorage.getItem('cartItems'))
      this.toastService.setMessage('Movie tickets added to cart');
  }


  calculatePrice(): void {
    // Find the selected ticket type
    const selectedTicket = this.ticketPrices.find(ticket => ticket.type === this.ticketType);
    // Update the selected ticket price based on the selected ticket type
    if (selectedTicket) {
      this.selectedTicketPrice = parseFloat(selectedTicket.price.toFixed(2)); 
    } else {
      this.selectedTicketPrice = 0;
    }
  }
  
  calculateTotal(): void {
    this.totals = this.cartItems.reduce((total, item) => total + parseFloat(item.price!.toFixed(2)), 0);
  }

  goToTicketsTab(): void {
    // Activate the Tickets tab programmatically
    this.active = 2
  }

  confirmPurchase(): void {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Purchase Summary';
    modalRef.componentInstance.cartItems = this.cartItems; // Pass cartItems to the modal
    modalRef.componentInstance.totals = this.totals; // Pass totals to the modal
  }
      

   // Function to toggle active tab
   toggleTab(tab: number): void {
    this.active = tab;
  }
}

