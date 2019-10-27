import { Component, OnInit } from '@angular/core';
import {MensajeService} from '../../services/mensaje.service'
import {AuxiliarService} from '../../services/auxiliar.service'
import {Mensaje} from '../../models/mensaje'
@Component({
  selector: 'app-mensajes-estudiante',
  templateUrl: './mensajes-estudiante.component.html',
  styleUrls: ['./mensajes-estudiante.component.css']
})
export class MensajesEstudianteComponent implements OnInit {

  mensaje: Mensaje={
    idMensaje: 0,
    descripcion:'',
    asunto:'',
    idEstudiante:0,
    idAuxiliar:0,
    remitente:''
  };

  usuario =  JSON.parse(localStorage.getItem("sesion"))
  idEst = this.usuario.idEstudiante;
  mensajes: any=[]
  auxiliares: any=[]

  constructor(private mensajeService: MensajeService, private auxiliarService: AuxiliarService) { }

  ngOnInit() {
    this.getMensajes();
    this.getAuxiliares();
  }

  getAuxiliares(){
    this.auxiliarService.getAuxiliares().subscribe(
      res => {
        this.auxiliares = res;

      },
      err => console.log(err)
    )
  }

  getMensajes(){
  
    this.mensajeService.getMensajesEst(this.idEst).subscribe(
      res => {
        this.mensajes = res;

      },
      err => console.log(err)
    )
  }

  enviar(){
    this.mensaje.remitente = 'estudiante'
    this.mensaje.idEstudiante = this.idEst
    this.mensajeService.saveMensaje(this.mensaje).subscribe(
     res =>{
       this.getMensajes()
        console.log(res);
        
 
     },
     err => console.error(err)
    );
  }



}
