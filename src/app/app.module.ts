import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from '@landing-components/landing-page.component';
import { NavbarSocialComponent } from '@landing-components/navbar-social/navbar-social.component';
import { NavbarMenuComponent } from './landing-page/navbar-menu/navbar-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarSocialComponent,
    NavbarMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
