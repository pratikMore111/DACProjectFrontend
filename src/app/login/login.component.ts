import { Component, OnInit } from '@angular/core';
import { Services } from '@angular/core/src/view';
import { UserServiceService } from 'src/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  constructor(private service: UserServiceService,private router:Router) { }

  ngOnInit() {
  }

  login(){
    this.service.login(this.username,this.password).subscribe(res=>{
      var data = res.json();
      console.log(this.username);
      console.log(this.password);
      console.log(data[0].name);
      console.log(data[0].role);
      if(data[0]!=null){
        if(data[0].role=="Admin"){
          this.router.navigate(['/admin']);
        }
        else{
          this.router.navigate(['/user']);
        }
      }
      else{
        this.router.navigate(['/home']);
      }
    })
  }

}
