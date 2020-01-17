import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
//import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPwdComponent } from './forget-pwd/forget-pwd.component';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    RegisterComponent,
    ForgetPwdComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    //AppRoutingModule,
    FormsModule ,
    RouterModule.forRoot([
      { path:"login",component:LoginComponent },
      { path:"admin",component:AdminComponent },
      { path:"user",component:UserComponent },
      { path:"",component:HomeComponent },
      { path:"home",component:HomeComponent },
      { path:"register",component:RegisterComponent },
      { path:"forgetpwd",component:ForgetPwdComponent },
    ]), 
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
