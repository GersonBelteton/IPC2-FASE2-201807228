import { Component, OnInit } from '@angular/core';
import {CursoService} from '../../services/curso.service'
import { Auxiliar } from 'src/app/models/auxiliar';
import {AuxiliarService} from '../../services/auxiliar.service'
import{ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-form-auxiliar',
  templateUrl: './form-auxiliar.component.html',
  styleUrls: ['./form-auxiliar.component.css']
})
export class FormAuxiliarComponent implements OnInit {
  auxiliares: any=[];

  auxiliar: Auxiliar={
    idAuxiliar: 0,
    nombreAuxiliar:'',
    carnet:0,
    contrasena:''
  
  };

  edit: boolean = false;
  constructor( private cursoService: CursoService,  private auxiliarService: AuxiliarService, private activedRoute: ActivatedRoute) { }

  ngOnInit() {

    const params = this.activedRoute.snapshot.params;
    //console.log(params);
    if(params.id){
      this.auxiliarService.getAuxiliar(params.id).subscribe(
        res=>{
          console.log(res);
          this.auxiliar=res;
          this.edit = true;
        },
        err=> console.error(err)

      )
    }
    
  }


  registrar(){

    console.log('registrar')
    delete this.auxiliar.idAuxiliar;
    this.auxiliarService.saveAuxiliar(this.auxiliar).subscribe(
     res =>{
        console.log(res);
        location.href="admin/auxiliares"
 
     },
     err => console.error(err)
    );


  }



  
  editar(){
  
    console.log(this.auxiliar);
    this.auxiliarService.updateAuxiliar(this.auxiliar.idAuxiliar, this.auxiliar).subscribe(
  
      res =>{
        console.log(res);
        location.href="admin/auxiliares"
      },
      err=> console.error(err)
    )
  }

}
