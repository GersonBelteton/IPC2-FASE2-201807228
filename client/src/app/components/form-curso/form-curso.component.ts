import { Component, OnInit } from '@angular/core';
import {CursoService} from '../../services/curso.service'
import { Curso } from 'src/app/models/curso';
import {AuxiliarService} from '../../services/auxiliar.service'
import{ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent implements OnInit {
  auxiliares: any=[];

  curso: Curso={
    codigo: 0,
    nombreCurso:'',
    descripcion:'',
    idAuxiliar:0
  
  };

  auxSelected: number
  edit: boolean = false;
  constructor( private cursoService: CursoService,  private auxiliarService: AuxiliarService, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getAuxiliares();
    this.curso.idAuxiliar = 1

    const params = this.activedRoute.snapshot.params;
    //console.log(params);
    if(params.id){
      this.cursoService.getCurso(params.id).subscribe(
        res=>{
          console.log(res);
          this.curso=res;
          this.edit = true;
        },
        err=> console.error(err)

      )
    }
    
  }


  getAuxiliares(){
    
    this.auxiliarService.getAuxiliares().subscribe(
      res => {
        this.auxiliares = res;

      },
      err => console.log(err)
    )
  }
  
  registrar(){
    console.log(this.auxSelected)
    console.log('registrar')
    delete this.curso.codigo;
    this.cursoService.saveCurso(this.curso).subscribe(
     res =>{
        console.log(res);
        location.href="admin/cursos"
 
     },
     err => console.error(err)
    );


  }


  editar(){
  
    console.log(this.curso);
    this.cursoService.updateCurso(this.curso.codigo, this.curso).subscribe(
  
      res =>{
        console.log(res);
        location.href="admin/cursos"
      },
      err=> console.error(err)
    )
  }

 
}
