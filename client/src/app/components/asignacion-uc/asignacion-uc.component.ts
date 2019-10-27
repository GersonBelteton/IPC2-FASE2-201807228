import { Component, OnInit } from '@angular/core';
import {CursoService} from '../../services/curso.service'
import {UsuarioService} from'../../services/usuario.service'
import {AsignacionEC} from'../../models/asignacionEC'
@Component({
  selector: 'app-asignacion-uc',
  templateUrl: './asignacion-uc.component.html',
  styleUrls: ['./asignacion-uc.component.css']
})
export class AsignacionUcComponent implements OnInit {
  cursos: any=[]
  usuario =  JSON.parse(localStorage.getItem("sesion"))


  
  asignacionEC : AsignacionEC = {
    idAsignacionCE: 0,
    idEstudiante:0,
    codigoCurso:0,
  
  }
  constructor(private cursoService: CursoService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getCursos()
  }



  asignar(id: number){

 

    console.log('registrar')
    this.asignacionEC.idEstudiante = this.usuario.idEstudiante
    this.asignacionEC.codigoCurso = id;
    delete this.asignacionEC.idAsignacionCE;
    this.usuarioService.asignacion(this.asignacionEC).subscribe(
     res =>{
        console.log(res);
        alert('Se ha asignado con éxito')
       // location.href="admin/cursos"
 
     },
     err => console.error(err)
    );
  }

  getCursos(){
    this.cursoService.getCursos().subscribe(
      res => {
        this.cursos = res;

      },
      err => console.log(err)
    )
  }
}
