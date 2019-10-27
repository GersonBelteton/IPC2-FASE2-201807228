import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../services/usuario.service'
@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  estudiantes: any=[]
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getEstudiantes()
  }


  getEstudiantes(){
    this.usuarioService.getUsuarios().subscribe(
      res => {
        this.estudiantes = res;

      },
      err => console.log(err)
    )
  }

}
