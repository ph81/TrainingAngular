import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/services/cart.service';
import { MoviesService } from 'src/app/services/movies.service';
import { Item, Movie } from 'src/app/services/utils';


@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule, RouterModule],
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  movie: Movie | undefined;
  selectedScreeningTime: string = '';
  ticketType: string = 'adult';
  ticketQuantity: number = 0;
  ticketPrices: { type: string, price: number }[] = [
    { type: 'adult', price: 14 },
    { type: 'kids', price: 8 },
    { type: 'senior', price: 10 },
  ];
  selectedTicketPrice: number = this.ticketPrices[0].price;
  totals: number = 0;
  cartItems: Item[] = [];
  active: number = 1; // Default active tab


  constructor(
    private movieTickets: MoviesService,
    private cartService: CartService,
    private route: ActivatedRoute,
     private router: Router,
  ) {
   
  }

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
    //clear ticket cart every time a new movie is displayed
    this.cartService.clearCart();
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
        type: 'M'
      });
      this.cartService.updateCartItems(this.cartItems);

      //save to localstorage
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      console.log(localStorage.getItem('cartItems'))
  }


  calculatePrice(): void {
    const selectedTicket = this.ticketPrices.find(ticket => ticket.type === this.ticketType);
    this.selectedTicketPrice = selectedTicket ? selectedTicket.price : 0;
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.ticketPrice!, 0);
  }

  goToTicketsTab(): void {
    // Activate the Tickets tab programmatically
    this.active = 2
  }

  confirmPurchase(): void {
    console.log(this.cartItems)
      
  }

   // Function to toggle active tab
   toggleTab(tab: number): void {
    this.active = tab;
  }
}

