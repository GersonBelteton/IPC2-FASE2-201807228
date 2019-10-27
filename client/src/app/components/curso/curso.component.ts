import { Component, OnInit } from '@angular/core';
import {CursoService} from '../../services/curso.service'
import {AuxiliarService} from '../../services/auxiliar.service'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  cursos: any=[];
  /*auxiliares: any=[];*/
  auxiliar: any=[];
  editarID
  constructor(private cursoService: CursoService, private auxiliarService: AuxiliarService/*, private routerLInk: RouterLink*/) { }
  private routerLInk: RouterLink
  ngOnInit() {
    this.getCursos();
    /*this.getAuxiliares();*/

  }

  eliminar(id: String){
    console.log(id);
    this.cursoService.deleteCurso(id).subscribe(
      res=>{
        console.log(res);
        this.getCursos();
      },
      err=> console.log(err)

    )
    
  }


  agregar(){
    
  }

  editar(id:String){
  
    location.href= '/admin/cursos/form/'+id  
   
  }


  getAuxiliar(id){
    console.log('testing')

    this.auxiliarService.getAuxiliar(id).subscribe(
     res => {
        console.log(res)
        this.auxiliar[0] = res;
      },
      err => console.log(err)
    )
    return this.auxiliar[0].nombre; 
    
  }
  
  getCursos(){
  
    this.cursoService.getCursos().subscribe(
      res => {
        this.cursos = res;

      },
      err => console.log(err)
    )
  }

  
 /* getAuxiliares(){
    this.auxiliarService.getAuxiliar().subscribe(
      res => {
        this.auxiliares = res;

      },
      err => console.log(err)
    )
  }*/

}
