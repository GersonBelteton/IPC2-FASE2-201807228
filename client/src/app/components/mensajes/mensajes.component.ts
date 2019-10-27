import { Component, OnInit } from '@angular/core';
import {MensajeService} from '../../services/mensaje.service'
import {UsuarioService} from '../../services/usuario.service'
import {Mensaje} from '../../models/mensaje'

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  mensaje: Mensaje={
    idMensaje: 0,
    descripcion:'',
    asunto:'',
    idEstudiante:0,
    idAuxiliar:0,
    remitente:''
  };

  usuario =  JSON.parse(localStorage.getItem("sesion"))
  idAux = this.usuario.idAuxiliar;
  mensajes: any=[]
  estudiantes: any=[]
  constructor(private mensajeService: MensajeService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getMensajes();
    this.getEstudiantes();

  }
  getEstudiantes(){
    this.usuarioService.getUsuarios().subscribe(
      res => {
        this.estudiantes = res;

      },
      err => console.log(err)
    )
  }

  getMensajes(){
  
    this.mensajeService.getMensajes(this.idAux).subscribe(
      res => {
        this.mensajes = res;
        
      },
      err => console.log(err)
    )
  }

  enviar(){
    this.mensaje.remitente = 'auxiliar'
    this.mensaje.idAuxiliar = this.idAux
    this.mensajeService.saveMensaje(this.mensaje).subscribe(
     res =>{
       this.getMensajes()
        console.log(res);
        
 
     },
     err => console.error(err)
    );
  }

}
