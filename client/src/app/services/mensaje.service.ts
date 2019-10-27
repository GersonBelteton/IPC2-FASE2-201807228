import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Usuario} from '../models/usuario'
import {AsignacionEC} from '../models/asignacionEC'
import {Mensaje} from '../models/mensaje'
@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  dir = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getMensajes(id:String){
    return this.http.get(this.dir+'/mensaje/maux/'+id);
  }


  getMensajesEst(id:String){
    return this.http.get(this.dir+'/mensaje/mest/'+id);
  }
  getMensaje(id:String){
    return this.http.get(this.dir+'/mensaje/'+id);
  }


  saveMensaje(mensaje:Mensaje){
    return this.http.post(this.dir+'/mensaje', mensaje);
  }


  deleteMensaje(id:String){
    return this.http.delete(this.dir+'/mensaje/'+id);
  }

  updateMensaje(id:String|number, updatedMensaje:Mensaje){
    return this.http.put(this.dir+'/mensaje/'+id, updatedMensaje);
  }



}
