import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent implements OnInit {

  oldpwd:string;
  newpwd:string;
  usrId:string;
  constructor(private service: UserServiceService,private router:Router) { }

  ngOnInit() {
  }

  update(){
    this.usrId=sessionStorage['UserId'];
    // console.log(this.usrId);
    this.service.update(this.oldpwd,this.newpwd,this.usrId).subscribe(res=>{
      var data = res.json();
      // console.log(this.oldpwd);
      // console.log(this.newpwd);
      // console.log(data);
      if(data.Status=="Success"){
        alert("Sucesssfully updated password");
        this.router.navigate(['/login']);
      }
      else{
        alert("something went wrong. Try again.!");
      }
      
    })
  }

}
