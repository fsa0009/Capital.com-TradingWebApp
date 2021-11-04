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
import { CardsComponent } from './newPages/cards.component';
import { LayoutNewpagesComponent } from './layout/layout-newpages.component';
import { HomeMainComponent } from './home/home-main.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';
import { SignupComponent } from './sign up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';

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
    HomeMainComponent,
    CardsComponent, 
    UserInfoComponent,
    SignupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'capital-app'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
