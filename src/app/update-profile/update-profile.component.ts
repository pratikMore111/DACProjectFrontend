import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/user-service.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  userEmail:string;
  userName:string;
  userMobile:string;
  userObject;

  constructor(private router:Router,private service:UserServiceService) {

   }

  ngOnInit() {
    
    this.userObject = JSON.parse(sessionStorage['userObject']);
      
    this.userEmail = this.userObject.EmailId;
    this.userName= this.userObject.Name;
    this.userMobile= this.userObject.MobileNo;

  }

  reUpdatePage(){
    this.userObject = JSON.parse(sessionStorage['userObject']);
      
    this.userEmail = this.userObject.EmailId;
    this.userName= this.userObject.Name;
    this.userMobile= this.userObject.MobileNo;
  }

  updateProfile()
  {

    this.service.updateProfile(this.userEmail,this.userName,this.userMobile).subscribe(res=>{
      var op=res.json();
      console.log(op);
      console.log(op.Status);
      if(op!=null)
      {
        if(op.Status=="Success"){
             alert("Profile updated");
             this.userObject.Name=op.Data.Name;
             this.userObject.EmailId=op.Data.EmailId;
             this.userObject.UserId=op.Data.UserId;
             this.userObject.MobileNo=op.Data.MobileNo;
             sessionStorage['userObject'] = JSON.stringify(this.userObject);
             this.ngOnInit();
             this.reUpdatePage();
             this.router.navigate(['/usrdashboard']);
        }
        else{
          alert("Profile update Failed");
        }
      }
    })
  }

}
