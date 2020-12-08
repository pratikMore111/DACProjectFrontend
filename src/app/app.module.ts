import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
//import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPwdComponent } from './forget-pwd/forget-pwd.component';
import { UserComponent } from './user/user.component';
import { BookNowComponent } from './book-now/book-now.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
//import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { TrainDetailsComponent } from './train-details/train-details.component';
import { AddtrainComponent } from './addtrain/addtrain.component';
import { UpdatetrainComponent } from './updatetrain/updatetrain.component';
import { TestComponent } from './test/test.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { UsrdashboardComponent } from './usrdashboard/usrdashboard.component';
import { TicketHistoryLogComponent } from './ticket-history-log/ticket-history-log.component';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AuthService } from './auth.service';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    RegisterComponent,
    ForgetPwdComponent,
    UserComponent,
    BookNowComponent,
    AboutComponent,
    ContactComponent,
    //DashboardComponent,
    ChangepwdComponent,
    UpdateProfileComponent,
    TrainDetailsComponent,
    AddtrainComponent,
    UpdatetrainComponent,
    TestComponent,
    ConfirmBookingComponent,
    UsrdashboardComponent,
    TicketHistoryLogComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    //AppRoutingModule,
    FormsModule ,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    
    RouterModule.forRoot([
      { path:"login",component:LoginComponent },
      //{ path:"admin",component:AdminComponent },
      { path:"user",component:UserComponent },
      { path:"",component:HomeComponent },
      { path:"home",component:HomeComponent },
      { path:"register",component:RegisterComponent },
      { path:"forgetpwd",component:ForgetPwdComponent},
      //{ path:"forgetpwd",component:ForgotPasswordComponent },
      { path:"booknow",component:BookNowComponent,canActivate: [AuthService] },
      { path:"contact",component:ContactComponent },
      { path:"about",component:AboutComponent },
      //{ path:"dashboard",component:DashboardComponent,canActivate: [AuthService] },
      { path:"updateprofile",component:UpdateProfileComponent,canActivate: [AuthService] },
      { path:"traindetails",component:TrainDetailsComponent,canActivate: [AuthService] },
      { path:"addtrain",component:AddtrainComponent,canActivate: [AuthService]},
      { path:"updatetraindetails",component:UpdatetrainComponent,canActivate: [AuthService]},
      { path:"changepassword",component:ChangepwdComponent,canActivate: [AuthService] },
      //{ path:"usrdashboard",component:UsrdashboardComponent },
      { path:"admin",component:AdminComponent,canActivate: [AuthService] },
      { path:"usrdashboard", component:UsrdashboardComponent, 
        children:[
        //{path:"",component:UsrdashboardComponent},
        {path:"updateprofile",component: UpdateProfileComponent},
        {path:"changepassword",component: ChangepwdComponent},
        {path:"booknow",component: BookNowComponent},
        {path:"tickethistory",component: TicketHistoryLogComponent},
        {path:"admin",component: AdminComponent},
        {path:"traindetails",component: TrainDetailsComponent},
        {path:"addtrain",component:AddtrainComponent},
      ]},
    ]), 
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
