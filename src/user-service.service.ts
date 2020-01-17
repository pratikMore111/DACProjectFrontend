import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  http: Http;
  url:string = "http://localhost:64453/api/User";

  constructor(http:Http) {
    this.http=http;
   }

   login(username,password){
    let credentials = {
      "name":username,
      "pwd":password
    };
    let header = new Headers({"Content-Type":"application/json"});
    let reqOptions = new RequestOptions({
      headers:header
    });
    return this.http.post(this.url+"/validate",credentials,reqOptions);
   }
   getUsers(){
    return this.http.get(this.url+'/UserList');
   }
}
