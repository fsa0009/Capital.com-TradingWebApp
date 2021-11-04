import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from "rxjs";
import { cards } from "./cards.model";
@Injectable({
  providedIn: 'root'  
})
export class DatabaseService {
    items: Observable<cards[]>;
constructor(private db: AngularFireDatabase){

    console.log("setting up Firebase commmunication");

    this.items = this.db.list<cards>('cards-list').valueChanges();

}

public showData(){
    this.items.subscribe((data: cards[])=>{
        console.log("data received");
        //console.log(data);
        for (let item of data){
            console.log(item);
        }
    })
}

}