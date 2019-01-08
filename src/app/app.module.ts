import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from '@landing-components/landing-page.component';
import { NavbarSocialComponent } from '@landing-components/navbar-social/navbar-social.component';
import { NavbarMenuComponent } from './landing-page/navbar-menu/navbar-menu.component';
import { MoviesFilterComponent } from './landing-page/movies-filter/movies-filter.component';
import { MainSlidesComponent } from './landing-page/main-slides/main-slides.component';
import { WeeklyBillboardsComponent } from './landing-page/weekly-billboards/weekly-billboards.component';
import { WeeklyPremieresComponent } from './landing-page/weekly-premieres/weekly-premieres.component';
import { CarouselComponent } from './landing-page/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarSocialComponent,
    NavbarMenuComponent,
    MoviesFilterComponent,
    MainSlidesComponent,
    WeeklyBillboardsComponent,
    WeeklyPremieresComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
