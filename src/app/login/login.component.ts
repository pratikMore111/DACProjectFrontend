import { Component, OnInit } from '@angular/core';
import { Services } from '@angular/core/src/view';
import { UserServiceService } from 'src/user-service.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { EmtrService } from '../emtr.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "Language-Nationalism";
  username:string;
  pwd:string;
  msg:string;
  constructor(private service: UserServiceService,private router:Router, private emte:EmtrService,private translateService: TranslateService,private authService:AuthService) {
    
    translateService.addLangs(["en", "ge", "hi"]);
    translateService.setDefaultLang("en");
   }

  ngOnInit() {
  }


  switchLanguage(language: string) {
    this.translateService.use(language);
  }


  login(){
    console.log(this.username);
    console.log(this.pwd);
    this.service.login(this.username,this.pwd).subscribe(res=>{
      var data = res.json();

      console.log(data.Status);
      if(data.Status=="Success"){
        sessionStorage['userObject'] = JSON.stringify(data.Data);
        console.log(sessionStorage['userObject']);
        var userobj = JSON.parse(sessionStorage['userObject']);
        console.log(userobj.Name);
        
        sessionStorage['isLogin']=true;
        this.emte.logInBtnSwitch(true);

        this.authService.Login();

        if(data.Data.RoleId==1){
          sessionStorage['userFlag'] = "1";
          this.router.navigate(['/usrdashboard']);
        }
        else{
          console.log("inside else");
          sessionStorage['userFlag'] = "2";
          this.router.navigate(['/usrdashboard']);
        }
      }else{
        alert("invalid user Name or Password");
      }


    })
  }

}
