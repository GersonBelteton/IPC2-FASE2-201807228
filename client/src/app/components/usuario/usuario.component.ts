import { Component, OnInit, HostBinding } from '@angular/core';
import {UsuarioService} from '../../services/usuario.service'
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUsuario();

  }


  getUsuario(){
    this.usuarioService.getUsuarioN(this.correo).subscribe(
      res => {
    
        localStorage.setItem("sesion",JSON.stringify(res)) 
      },
      err => console.log(err)
    )
  }
   usuario =  JSON.parse(localStorage.getItem("sesion"))
   nombre = this.usuario.nombre;
   carnet = this.usuario.carnet;
   correo = this.usuario.correo;
   contrasena = this.usuario.contrasena;
}
