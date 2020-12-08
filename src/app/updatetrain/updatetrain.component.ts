import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-updatetrain',
  templateUrl: './updatetrain.component.html',
  styleUrls: ['./updatetrain.component.css']
})
export class UpdatetrainComponent implements OnInit {

  src:string
  dest:string
  stime:Time
  etime:Time
  tcapacity:string
  seatcapacity:string
  standcapacity:string
  trainObject;
  constructor() {  }

  ngOnInit() {
      console.log('Inside update');
      var array=JSON.parse(sessionStorage['trainDetails']);
      var trainid = sessionStorage['editTrainId'];
      for(var index=0;index<array.length;index++){
        if(array[index].Id==trainid){
          console.log('inside if');
          this.trainObject = array[index];
        }
      }
      console.log(this.trainObject);
      this.src=this.trainObject.Source;
      this.dest=this.trainObject.Destination;
      this.stime=this.trainObject.StartTime;
      this.etime=this.trainObject.EndTime;
      this.tcapacity=this.trainObject.Capacity;
      this.seatcapacity=this.trainObject.SeatCapacity;
      this.standcapacity=this.trainObject.StandCapacity;
      }
      

  }