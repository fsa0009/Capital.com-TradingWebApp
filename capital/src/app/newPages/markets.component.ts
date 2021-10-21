import { Component, OnInit } from '@angular/core';
import { cards } from './cards.model';
import { mock_cards } from './mock-cards';
import { UserInfoService } from './user-info.service';

@Component({
  selector: 'newpages-markets',
  templateUrl: './markets.component.html',
})
export class MarketsComponent implements OnInit {

  
  cards: cards [] = [] ;

  constructor(private UserInfoService : UserInfoService){


  }

  ngOnInit(): void {
    
    this.UserInfoService.getCards().subscribe(data => {
      console.log(data);
     
      for (var item in data ) {
       console.log(data[item]);
        this.cards.push( new cards (data[item]));
      }
    })
    /*
    // getting the list of cards from the mock_cards.ts 
    //send a get request to server and get response 
    for (var card of mock_cards){
      this.cards.push(new cards(card))
    }
    */
  }
  

  
}
