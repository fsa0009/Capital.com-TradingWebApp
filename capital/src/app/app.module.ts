import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component'; 
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';
import { loginComponent } from './login/login.component';
import { imageComponent } from './image/image.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { MiddleBarComponent } from './middlebar/middlebar.component';
import { HomeComponent } from './body/home.component';
import { MarketsComponent } from './newPages/markets.component';
import { ProductsComponent } from './newPages/products.component';
import { FortradersComponent } from './newPages/fortraders.component';
import { LearntotradeComponent } from './newPages/learntotrade.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './newPages/about.component';
import { LayoutNewpagesComponent } from './layout/layout-newpages.component';
import { HomeMainComponent } from './home/home-main.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    loginComponent,
    imageComponent, 
    LayoutMainComponent,
    MiddleBarComponent,
    HomeComponent,
    MarketsComponent,
    ProductsComponent,
    FortradersComponent,
    LearntotradeComponent,
    AboutComponent,
    LayoutNewpagesComponent,
    HomeMainComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
