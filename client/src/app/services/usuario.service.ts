import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Usuario} from '../models/usuario'
import {Login} from '../models/login'
import {AsignacionEC} from '../models/asignacionEC'
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  dir = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

 getUsuarios(){
    return this.http.get(this.dir+'/user');
  }

  getUsuario(id:String){
    return this.http.get(this.dir+'/user/'+id);
  }

  getUsuarioCursos(id:String){
    return this.http.get(this.dir+'/user/ec/'+id);
  }

  getUsuarioN(nameUser:String){
    return this.http.get(this.dir+'/user/email/'+nameUser);
  }

  saveUsuario(usuario:Usuario){
    return this.http.post(this.dir+'/user', usuario);
  }

  asignacion(asignacion:AsignacionEC){
    return this.http.post(this.dir+'/user/aec', asignacion);
  }

  login(login:Login){
    return this.http.post(this.dir+'/login',login);
  }

  deleteAsignacion(id:String){
    return this.http.delete(this.dir+'/user/aec/'+id);
  }

  deleteUsuario(id:String){
    return this.http.delete(this.dir+'/user/'+id);
  }

  updateUsuario(id:String|number, updatedUsuario:Usuario){
    return this.http.put(this.dir+'/user/'+id, updatedUsuario);
  }


}
