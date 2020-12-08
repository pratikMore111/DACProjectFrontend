import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/user-service.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-usrdashboard',
  templateUrl: './usrdashboard.component.html',
  styleUrls: ['./usrdashboard.component.css']
})
export class UsrdashboardComponent implements OnInit {
  uname:string
  flag;
  userId:string;
  selectedFile: File;
  
  constructor(private router:Router,private service: UserServiceService,private authService:AuthService) { }

  ngOnInit() {
    if(sessionStorage['userObject']!=null){
      this.flag=sessionStorage['userFlag'] ;
      console.log(this.flag);
      this.uname=JSON.parse(sessionStorage['userObject']).Name;
      this.userId=JSON.parse(sessionStorage['userObject']).UserId;
    }else{
      this.router.navigate(['login']);
    }
  }

  logout(){
    delete sessionStorage['userObject'];
    delete sessionStorage['userFlag'];
    this.authService.Logout();
    this.router.navigate(['home']);
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  onUpload() {
    console.log(this.selectedFile);
    console.log(this.selectedFile.name);
    this.service.onUpload(this.selectedFile).subscribe(res=>{
      var data = res.json();
      console.log(data);
      if(data.Status=="Success"){
        alert("Successfully Uploaded image.!")
      }else{
        alert("image upload failed. Try again..!");
      }
    })
  }



}
