import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Curso} from '../models/curso'

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  dir = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


  getCursos(){
    return this.http.get(this.dir+'/curso');
  }

  getCurso(id:String){
    return this.http.get(this.dir+'/curso/'+id);
  }



  saveCurso(curso:Curso){
    return this.http.post(this.dir+'/curso', curso);
  }



  deleteCurso(id:String){
    return this.http.delete(this.dir+'/curso/'+id);
  }

  updateCurso(id:String|number, updatedCurso:Curso){
    return this.http.put(this.dir+'/curso/'+id, updatedCurso);
  }

}
