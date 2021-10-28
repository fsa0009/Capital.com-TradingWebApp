import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
//import { UserInfo } from "os";
import { cards } from "./cards.model"
//import { UserInfo } from "./user-info.model";

@Injectable({providedIn : 'root'})
export class UserInfoService {

    private baseURL : string = 'https://capital-app-24e9a-default-rtdb.firebaseio.com/' ; 
    private endPoint : string = 'cards-list.json'; 

constructor(private http: HttpClient){

}

getCards(){
   return this.http.get<cards[]>(this.baseURL + this.endPoint);
}


modifyCardsInfo(){
    var temp: cards = {
        imagePath : "Jack",
        num: "something",
        title:"jniknjinj"
    }
    return this.http.put(this.baseURL + this.endPoint , temp)
}
addCard(data: cards) {
    return this.http.post(this.baseURL + this.endPoint,data);
}


}