import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtrain',
  templateUrl: './addtrain.component.html',
  styleUrls: ['./addtrain.component.css']
})
export class AddtrainComponent implements OnInit {

  etime:string;
  constructor(private service: UserServiceService,private router:Router) { }

  ngOnInit() {
  }

  addTrain(myForm){
    //console.log(myForm.form.value);
    this.service.addTrain(myForm.form.value).subscribe(res=>{
    var data = res.json();
    //console.log(data);
    if(data.Status=="Success"){
      alert("Successfully Added..!");
      this.router.navigate(['/usrdashboard/traindetails']);
    }
    else{
      alert('Try Again..!');
    }

    })   
  }
}
