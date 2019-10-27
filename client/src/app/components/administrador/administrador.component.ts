import { Component, OnInit } from '@angular/core';
import {AuxiliarService} from '../../services/auxiliar.service'
import {CursoService} from '../../services/curso.service'
@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  auxiliares: any=[];
  constructor(private cursoService: CursoService, private auxiliarService: AuxiliarService) { }

  ngOnInit() {
    this.getAuxiliares();
    /*this.getAuxiliares();*/

  }

  getAuxiliares(){
  
    this.auxiliarService.getAuxiliares().subscribe(
      res => {
        this.auxiliares = res;

      },
      err => console.log(err)
    )
  }

  agregar(){

  }

  editar(id:String){

  }
  eliminar(id:String){

  }


}
