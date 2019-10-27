import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-auxiliar',
  templateUrl: './nav-auxiliar.component.html',
  styleUrls: ['./nav-auxiliar.component.css']
})
export class NavAuxiliarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usuario =  JSON.parse(localStorage.getItem("sesion"))
  nombre = this.usuario.nombreAuxiliar;
  carnet = this.usuario.carnet;

}
