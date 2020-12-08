import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fromStn = "PCMC";
  toStn = "Swargate";
  stations = ['PCMC', 'Bhosari','Khadki',
  'Shivaji Nagar','Swargate'];
  constructor(private router:Router) { }

  ngOnInit() {
  }

  getDetails(){

    if(this.fromStn==this.toStn){
      alert("Enter Valid Stations.!")
    }
    else{
      console.log(this.fromStn);
      console.log(this.toStn);
      sessionStorage['fromStn'] = this.fromStn;
      sessionStorage['toStn'] = this.toStn;
      this.router.navigate(['/booknow']);
    }
  }

}
