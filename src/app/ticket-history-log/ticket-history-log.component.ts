import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/user-service.service';

@Component({
  selector: 'app-ticket-history-log',
  templateUrl: './ticket-history-log.component.html',
  styleUrls: ['./ticket-history-log.component.css']
})
export class TicketHistoryLogComponent implements OnInit {

  tickethistory:any[];
  userId:string;
  constructor(private service: UserServiceService) { }

  ngOnInit() {
    this.userId=JSON.parse(sessionStorage['userObject']).UserId;
    console.log(this.userId);
    this.service.getTicketHistory(this.userId).subscribe(res=>{
      var result = res.json();
      this.tickethistory=result.Data;
      console.log(result.Data);
    })
  }

}
