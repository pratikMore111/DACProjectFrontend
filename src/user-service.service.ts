import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  http: Http;
  url:string = "http://localhost:60838/api";

  constructor(http:Http, public httpclient: HttpClient) {
    this.http=http;
   }
   

   //Done
   //Register
   register(userEmail,username,password,Mobile,Gender,DOB)
   {
    let credentials = {
      "EmailId":userEmail,
      "Name":username,
      "Password":password,
      "MobileNo":Mobile,
      "Gender":Gender,
      "DOB":DOB
    }
    let header = new Headers({"content-Type":"application/json"});
    let reqOptions = new RequestOptions({
      headers:header
    });
    return this.http.post("http://localhost:60838/api/User/Registration",credentials);
   }

   //Done
   //LOGIN
   login(username,password){
    let credentials = {
      "EmailId":username,
      "Password":password
    };
    let header = new Headers({"Content-Type":"application/json"});
    let reqOptions = new RequestOptions({
      headers:header
    });
    return this.http.post(this.url+"/Login",credentials,reqOptions);
   }

   //Done
   //UPDATE
   update(oldpwd,newpwd,Id){
    let credentials = {
      "Password":oldpwd,
      "newPassword":newpwd
    };
    let header = new Headers({"Content-Type":"application/json"});
    let reqOptions = new RequestOptions({
      headers:header
    });
    var userObj = JSON.parse(sessionStorage['userObject']);
    return this.http.put(this.url+"/User/"+userObj.UserId,credentials,reqOptions);
   }

   //Done
   //GET USER LIST
   getUsers(){
    return this.http.get(this.url+"/User");
   }

   getTrainDetails(){
    return this.http.get(this.url+"/Train");
   }
   getTrainDetail(Id)
   {
    return this.http.get(this.url+"/User/"+Id);

   }
   //Done
   //GENERATE OTP
   OTPGenerate(email)
  {
    alert("inside OTPGenerate ");
    var RUser={
      "EmailId":email,
      
     };

    return this.httpclient.post(this.url+"/Account/IsExist", RUser);
  }

  //Done
  //VALIDATE OTP
  OTPValidate(otp,email)
  {
    
    alert("inside validateOTP");
    var RUser={
      "EmailId":email,
      "OTP":otp
     };

   
     console.log(RUser);
    
    return this.httpclient.post(this.url+"/Account/OTP", RUser,);
  }

  //Done
  //RESET PASSWORD
  Passwordreset(password,email)
  {

    alert("inside validateOTP");
    var RUser={
      "EmailId":email,
      "Password":password,
      
     };

      console.log(RUser);
     
    return this.httpclient.put(this.url+"/Account/UpdatePassword", RUser);
  }

  //Done
  //UPDATE PROFILE
  updateProfile(userEmail,userName,userMobile){
    var user={
      "EmailId":userEmail,  
      "Name":userName,
      "MobileNo":userMobile,
    };

    const header = new Headers({'Content-Type': 'application/json'});
    const requestOption = new RequestOptions({headers: header});
    var userObj = JSON.parse(sessionStorage['userObject']);
    return this.http.put(this.url+"/UpdateDetails/"+userObj.UserId, user, requestOption);
  }

  //Done
  //UPLOAD PHOTO
  onUpload(selectedFile){
    const uploadData = new FormData();
    uploadData.append('myFile', selectedFile, selectedFile.name);
    return this.http.post(this.url+"/Upload", uploadData)
  }
  bookTicket(bookdetails){
    return this.http.post(this.url+"/Book",bookdetails);
  }
  confirmTicket(confirmBookDetails){
    return this.http.post(this.url+"/Book/ticket",confirmBookDetails);
  }

  //DELETE USERS
  deleteUser(UserId){
    return this.http.delete(this.url+"/User/"+UserId);
  }

  //ADD TRAIN
  addTrain(myForm){
    return this.http.post(this.url+"/Train",myForm);
  }

  //DELETE TRAIN
  deleteTrain(trainId){
    return this.http.delete(this.url+"/Train/"+trainId);
  }
  deleteUser1(uid)
  {
    return this.http.delete(this.url+"/User/"+uid);
  }

  //valIDAte EmaIL
  validateEmail(userEmail){
     return this.http.post(this.url+"/User",userEmail);
  }

  //TICKET HISTORY LOG
  getTicketHistory(userId){
    return this.http.get(this.url+"/Book/"+userId);
  }

  //CHECK ONLINE USERS
  OnlineUsers(userId){
    return this.http.get(this.url+"/OTP/"+userId);
  }

}
