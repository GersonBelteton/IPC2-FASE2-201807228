import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Usuario} from '../models/usuario'
import {Ticket} from '../models/ticket'
@Injectable({
  providedIn: 'root'
})
export class TicketService {
  dir = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getTickets(){
    return this.http.get(this.dir+'/ticket');
  }

  getTicketsEst(id:String){
    return this.http.get(this.dir+'/ticket/test/'+id);
  }



  saveTicket(ticket:Ticket){
    return this.http.post(this.dir+'/ticket', ticket);
  }


  deleteTicket(id:String){
    return this.http.delete(this.dir+'/ticket/'+id);
  }

  updateMensaje(id:String|number, updatedTicket:Ticket){
    return this.http.put(this.dir+'/ticket/'+id, updatedTicket);
  }
}
