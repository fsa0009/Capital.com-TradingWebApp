import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from './layout/layout-main.component';
import { LayoutNewpagesComponent } from './layout/layout-newpages.component';
import { AboutComponent } from './newPages/about.component';
import { FortradersComponent } from './newPages/fortraders.component';
import { LearntotradeComponent } from './newPages/learntotrade.component';
import { MarketsComponent } from './newPages/markets.component';
import { ProductsComponent } from './newPages/products.component';

const routes: Routes = [
  { path: 'markets', component: MarketsComponent },
  { path: 'fortraders', component: FortradersComponent } ,
  { path: 'products', component: ProductsComponent },
  { path: 'learntotrade', component: LearntotradeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: LayoutMainComponent }
  

];

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
   
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
