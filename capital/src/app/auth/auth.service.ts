import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthResponse } from "./auth.Response";

@Injectable({
    providedIn: 'root'
})
export class AuthService{
//https://identitytoolkit.googleapis.com/v1/accounts
//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

private baseUrl:string="https://identitytoolkit.googleapis.com/v1/accounts";
private signUpEndpoint:string ="signUp";
private signInEndpoint:string = "signInWithPassword";

constructor(private http:HttpClient){

}

public signUp(email:string , password:string){

    const requestBody = {
        "email": email, 
        "password": password,
        "returnSecureToken": true
    }

    return this.http.post<AuthResponse>(this.baseUrl + ':' + this.signUpEndpoint + 
                                '?' + 'key=' + environment.firebase.apiKey, requestBody);
}

public login(email:string, password:string){
    const requestBody = {
        "email": email, 
        "password": password,
        "returnSecureToken": true
    }

    return this.http.post<AuthResponse>(this.baseUrl + ':' + this.signInEndpoint + 
                                '?' + 'key=' + environment.firebase.apiKey, requestBody);

}

}