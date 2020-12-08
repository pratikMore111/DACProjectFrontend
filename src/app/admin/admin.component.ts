import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/user-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any[];
  constructor(private service:UserServiceService,private router:Router) {
    this.getUser();
   }

  ngOnInit() {
  }

  getUser(){
    this.service.getUsers().subscribe(  response => { 
     let result = response.json();
     this.users = result;
     console.log(result);
   })

}
deleteUser(UserId){
  //console.log(UserId);
  this.service.deleteUser(UserId).subscribe(  response => { 
    let result = response.json();
    //console.log(result);
    if(result.Status=="success"){
      alert("Successfully deleted..!");
      this.getUser();
      //this.router.navigate(['/usrdashboard']);
    }
    else{
      alert("Something Went wrong, Try again.!");
    }
  })
}
OnlineUsers(){

}
}
