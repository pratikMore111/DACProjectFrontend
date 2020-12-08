import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  UserData: any;
  constructor(public router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    {
      if(this.isLoggedIn())
      { 
        return true;
      }
      else
      {
        this.router.navigate(['login']);
        return false;
      }
    }
  }
  
  isLoggedIn()
  {
    return (sessionStorage.getItem("isLoggedIn") == "1");
  }

  Login(){
    sessionStorage.setItem("isLoggedIn", "1");
  }

  Logout(){
    sessionStorage.setItem("isLoggedIn", "0");
  }

}
