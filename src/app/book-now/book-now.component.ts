import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/user-service.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {

  fromStn:string;
  toStn:string;
  count=1;
  userId:string;
  flag=0;
  TotalFare: string
  TotalDistance: string
  TravelTime: string
  BookTime:string;
  uname:string;
  constructor(private router:Router,private service:UserServiceService) {
    if(sessionStorage['userObject']!=null){
      this.fromStn = sessionStorage['fromStn'];
      this.toStn = sessionStorage['toStn'];
      this.userId=JSON.parse(sessionStorage['userObject']).UserId;
      this.uname=JSON.parse(sessionStorage['userObject']).Name;
      //console.log(this.uname);
    }else{
      this.router.navigate(['login']);
    }
   }

  ngOnInit() {
  }

  bookTicket(){
    let bookObj={
      "Userid":this.userId,
      "Source":this.fromStn,
      "Destination":this.toStn,
      "Count":this.count
    }

    this.service.bookTicket(bookObj).subscribe(res=>{
      var result = res.json();
      console.log(result);
      if(result.Status=="success"){
        console.log("inside sucsess");
        this.TotalFare = result.Data.TotalFare;
        this.TotalDistance = result.Data.TotalDistance;
        this.TravelTime = result.Data.TravelTime;
        //console.log(this.TotalFare,this.TotalDistance,this.TravelTime);
        this.flag=1;
        //this.router.navigate(['/confirmbooking']);
      }
      else{
        alert("Something Went wrong. Try again.!");
      }
    })
  }

  confirmTicket(){
    this.flag=3;
  }
  return(){
    this.flag=0;
  }

  makePayment(){
    let bookObj={
      "Userid":this.userId,
      "Source":this.fromStn,
      "Destination":this.toStn,
      "Count":this.count,
      "fare":this.TotalFare
    }
    //console.log(bookObj);
    this.service.confirmTicket(bookObj).subscribe(res=>{
      var result=res.json();
     // console.log(result);
      if(result.Status=="Booked"){
          alert("Ticked Booked Sucessfully.! Check your mail.")
          this.BookTime=result.Data.BookTime;
          this.flag=2;
          
      }
      else{
        alert("Something error, Try again.!");
      }
    })
  }

}
