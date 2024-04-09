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
import { MoviesComponent } from './pages/movies/movies.component';
import { ErrorComponent } from './pages/error/error.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToastComponent } from './components/toast/toast.component';
import { ModalComponent } from './components/modal/modal.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeroComponent,
        HomeComponent,
        MoviesComponent,
        ErrorComponent,
      NavbarComponent, SidebarComponent, ToastComponent, ModalComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule, NgbModule, SharedModule
    ]
})
export class AppModule { }
