import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../services/usuario.service'
@Component({
  selector: 'app-curso-usuario',
  templateUrl: './curso-usuario.component.html',
  styleUrls: ['./curso-usuario.component.css']
})
export class CursoUsuarioComponent implements OnInit {
  usuario =  JSON.parse(localStorage.getItem("sesion"))
  cursosEstudiante: any=[];
 
 

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
   
    this.getCursos(this.usuario.idEstudiante)
  }
  

  getCursos(id: String){
    this.usuarioService.getUsuarioCursos(id).subscribe(
      res => {
        this.cursosEstudiante = res;

      },
      err => console.log(err)
    )
  }

  eliminar(id: String){
    console.log(id);
    this.usuarioService.deleteAsignacion(id).subscribe(
      res=>{
        console.log(res);
        this.getCursos(this.usuario.idEstudiante)
      },
      err=> console.log(err)

    )
  }

}
