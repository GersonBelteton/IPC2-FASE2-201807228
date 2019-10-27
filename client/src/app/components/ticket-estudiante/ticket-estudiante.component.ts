import { Component, OnInit } from '@angular/core';
import {TicketService} from '../../services/ticket.service'
import {AuxiliarService} from '../../services/auxiliar.service'
import {Ticket} from '../../models/ticket'

@Component({
  selector: 'app-ticket-estudiante',
  templateUrl: './ticket-estudiante.component.html',
  styleUrls: ['./ticket-estudiante.component.css']
})
export class TicketEstudianteComponent implements OnInit {

  ticket: Ticket={
    idTicket: 0,
    descripcion:'',
    asunto:'',
    idEstudiante:0,

  };


  usuario =  JSON.parse(localStorage.getItem("sesion"))
  idEst = this.usuario.idEstudiante;
  tickets: any=[]


  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.getTickets();
  }

  getTickets(){
    this.ticketService.getTicketsEst(this.idEst).subscribe(
      res => {
        this.tickets = res;

      },
      err => console.log(err)
    )
  }

  enviar(){
    this.ticket.idEstudiante = this.idEst
    this.ticketService.saveTicket(this.ticket).subscribe(
     res =>{
       this.getTickets()
        console.log(res);
        
 
     },
     err => console.error(err)
    );
  }





}
