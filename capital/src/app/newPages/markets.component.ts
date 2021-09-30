import { Component, OnInit } from '@angular/core';
import { cards } from './cards.model';
import { mock_cards } from './mock-cards';

@Component({
  selector: 'newpages-markets',
  templateUrl: './markets.component.html',
})
export class MarketsComponent implements OnInit {

  
  cards: cards [] = [] ;

  ngOnInit(): void {
    for (var card of mock_cards){
      this.cards.push(new cards(card))
    }
  }

  
}
