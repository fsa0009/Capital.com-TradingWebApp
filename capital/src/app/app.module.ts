import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component'; 
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';
import { loginComponent } from './login/login.component';
import { imageComponent } from './image/image.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { MiddleBarComponent } from './middlebar/middlebar.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    loginComponent,
    imageComponent, 
    LayoutMainComponent,
    MiddleBarComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
