import { Component, OnInit } from '@angular/core';
import {TicketService} from '../../services/ticket.service'
import {Ticket} from '../../models/ticket'

@Component({
  selector: 'app-ticket-admin',
  templateUrl: './ticket-admin.component.html',
  styleUrls: ['./ticket-admin.component.css']
})
export class TicketAdminComponent implements OnInit {
  tickets: any=[]
  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.getTickets();
  }

  getTickets(){
    this.ticketService.getTickets().subscribe(
      res => {
        this.tickets = res;

      },
      err => console.log(err)
    )
  }

}
