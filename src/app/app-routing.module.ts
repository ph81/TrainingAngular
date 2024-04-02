import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './pages/tickets/tickets.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  {path: 'tickets', component: TicketsComponent},
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule { }
