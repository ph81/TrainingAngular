import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeroComponent } from './components/layout/hero/hero.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { FoodComponent } from './components/food/food.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ErrorComponent } from './pages/error/error.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SnacksComponent } from './pages/snacks/snacks.component';
import { SubtotalPipe } from './pipes/subtotal.pipe';



@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeroComponent,
        ContactComponent,
        HomeComponent,
        MoviesComponent,
        ErrorComponent,
      NavbarComponent, SidebarComponent, SubtotalPipe
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule, NgbModule
    ]
})
export class AppModule { }
