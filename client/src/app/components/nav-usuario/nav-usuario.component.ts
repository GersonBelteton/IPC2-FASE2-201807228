import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-usuario',
  templateUrl: './nav-usuario.component.html',
  styleUrls: ['./nav-usuario.component.css']
})
export class NavUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  usuario =  JSON.parse(localStorage.getItem("sesion"))
  nombre = this.usuario.nombre;
  carnet = this.usuario.carnet;
}
