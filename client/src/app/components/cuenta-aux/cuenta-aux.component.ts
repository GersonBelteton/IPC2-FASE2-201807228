import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta-aux',
  templateUrl: './cuenta-aux.component.html',
  styleUrls: ['./cuenta-aux.component.css']
})
export class CuentaAuxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  usuario =  JSON.parse(localStorage.getItem("sesion"))
  nombre = this.usuario.nombreAuxiliar;
  carnet = this.usuario.carnet;
  correo = this.usuario.correo;
  contrasena = this.usuario.contrasena;
}
