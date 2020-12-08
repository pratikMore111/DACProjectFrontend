import { Component } from '@angular/core';
import { EmtrService } from './emtr.service';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/user-service.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  loginFlag="0";
  isLogin;

  constructor(private emtr:EmtrService,private router:Router,private service: UserServiceService,private authService:AuthService) {
    this.emtr.getEmittedValueForUserSwitch().subscribe(item=>this.ngOnInit());
   
    if (JSON.parse(sessionStorage.getItem("isLogin")) == true)
    this.isLogin = JSON.parse(sessionStorage.getItem("isLogin"));
     else
    this.isLogin = false;

  }


  ngOnInit() {

    this.emtr.getEmittedValueForLogbtnSwitch()
      .subscribe(item => this.isLogin = item);
  }

  logout() {
    var userId = JSON.parse(sessionStorage['userObject']).UserId;
    console.log(userId);
    this.service.OnlineUsers(userId).subscribe(res=>{

    });
    delete sessionStorage['userObject'];
    delete sessionStorage['userFlag'];
    this.isLogin = false;
    this.authService.Logout();
    sessionStorage.clear();
    //this.router.navigate(['home']);
  }

}
