import { Component, OnInit } from '@angular/core';
import {AuxiliarService} from '../../services/auxiliar.service'
import {CursoService} from '../../services/curso.service'
@Component({
  selector: 'app-auxiliar',
  templateUrl: './auxiliar.component.html',
  styleUrls: ['./auxiliar.component.css']
})
export class AuxiliarComponent implements OnInit {

  auxiliares: any=[];
  ac: any=[];
  constructor(private cursoService: CursoService, private auxiliarService: AuxiliarService) { }

  ngOnInit() {
    this.getAuxiliares();
    this.getAuxiliaresCursos();
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


  getAuxiliaresCursos(){
  
    this.auxiliarService.getAuxiliaresCursos().subscribe(
      res => {
        this.ac = res;

      },
      err => console.log(err)
    )
  }

  agregar(){
    location.href="/admin/auxiliares/form"
  }

  editar(id:String){
    location.href="/admin/auxiliares/form/"+id;
  }
  eliminar(id:String){
      console.log(id);
      this.auxiliarService.deleteAuxiliar(id).subscribe(
        res=>{
          console.log(res);
          this.getAuxiliares();
        },
        err=> console.log(err)
  
      )
      
    
  }


}
