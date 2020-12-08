import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/user-service.service';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-train-details',
  templateUrl: './train-details.component.html',
  styleUrls: ['./train-details.component.css']
})
export class TrainDetailsComponent implements OnInit {
  train: any[];
  constructor(private service:UserServiceService,private router:Router) { }

  ngOnInit() {
    this.getTrainDetails();
  }

  getTrainDetails(){
    this.service.getTrainDetails().subscribe(  response => { 
     let result = response.json();
     this.train = result.Data;
     sessionStorage['trainDetails'] = JSON.stringify(this.train);
     console.log(this.train);
     //var array=JSON.parse(sessionStorage['trainDetails']);

   })

}
addtrain(){
  this.router.navigate(['/addtrain']);
}
updateTrain(trainId){
  console.log(trainId);
  sessionStorage['editTrainId'] = trainId;
  this.router.navigate(['updatetraindetails']);
}

deleteTrain(trainId){
  console.log(trainId);
  this.service.deleteTrain(trainId).subscribe(  response => { 
    let result = response.json();
    console.log(result);
    if(result.Status=="Success"){
      alert("Successfully deleted..!");
      this.getTrainDetails();
      this.router.navigate(['/usrdashboard/traindetails']);
    }
    else{
      alert('Try Again..!');
    }
  })
  
}

}
