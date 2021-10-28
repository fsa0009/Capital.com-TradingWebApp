import { Component } from '@angular/core';
import { cards } from '../newPages/cards.model';
import { UserInfoService } from '../newPages/user-info.service';
@Component({
    selector: 'app-signup',
    templateUrl: 'sign-up.component.html',
    
})
export class SignupComponent {
    or : string = "Or"
    Email : string = "Email address"
    Password : string = "Password"

    constructor(private cardService: UserInfoService){

    }
    onAddCard(data:cards){
        console.log("you pressed a button");
        this.cardService.addCard(data).subscribe(data =>{
            console.log("Added a card");
        })
    }

}