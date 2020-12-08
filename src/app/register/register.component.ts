import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  rname:string;
  userEmail:string;
  userMobile:string;
  pwd:string;
  DOB:Date;
  Gender:string;
  msg:string;

  gender = ['Male', 'Female',
  'Other'];
  
  constructor(private service: UserServiceService,private router:Router) { }

  ngOnInit() {
    if(sessionStorage['Name']!=null){
        this.router.navigate(['dashboard']);
    }
  }
    registerMe()
    {
      console.log(this.userEmail);
      console.log(this.rname);
      console.log(this.userMobile);
      console.log(this.Gender);
      console.log(this.DOB);
      this.service.register(this.userEmail,this.rname,this.pwd,this.userMobile,this.Gender,this.DOB).subscribe(res=>{
        var data = res.json();
        console.log(data);
        if(data.Status=="success"){
          alert("Successfully registored..!");
          this.router.navigate(['/login']);
        }
        else{
          alert("Something Went wrong, Try again.!");
        }

    });
  }

  myFunction(){
    console.log(this.userEmail);
    let emailobj={
      "EmailId": this.userEmail
    }
    this.service.validateEmail(emailobj).subscribe(res=>{
      var result = res.json();
      if(result.Status=="Notok"){
        this.msg="This email has already  registered.!";
          //alert("Email has already  registered.!");
      }
      else{
        this.msg=""
      }
    })
  }
  
}
