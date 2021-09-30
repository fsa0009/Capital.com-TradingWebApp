import { Component, Input } from '@angular/core';

@Component({
  selector: 'newpages-cards',
  templateUrl: './cards.component.html',
  styleUrls : ['./cards.component.css']
})
export class CardsComponent  {

    @Input()
  imagePath! : string ; 
  

    @Input()
  num! : string ; 
  
    @Input()
  title! : string; 


}