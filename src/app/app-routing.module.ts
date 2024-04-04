import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { SnacksComponent } from './pages/snacks/snacks.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  {path: 'tickets', component: TicketsComponent},
  {path: 'snacks', component: SnacksComponent},
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule { }
