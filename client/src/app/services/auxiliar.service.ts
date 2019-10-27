import { Injectable } from '@angular/core';
//import {HttpClient} from '@angular/common/http'
import {Auxiliar} from '../models/auxiliar'
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuxiliarService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private handleError(error:HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.log(error.error)
    } else {
      console.error(error)
    }
    return throwError('D: Backend Error')
  }
  dir = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getOne(id:String):Observable<any> {
    let url = this.dir+'/auxiliar/'+id;
    return this.http.get(url, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  getAuxiliares(){
    return this.http.get(this.dir+'/auxiliar');
  }

  getAuxiliaresCursos(){
    return this.http.get(this.dir+'/auxiliar/ac');
  }


  getAuxiliar(id:String){
    console.log('testing2')
    return this.http.get(this.dir+'/auxiliar/'+id);
  }



  saveAuxiliar(auxiliar:Auxiliar){
    return this.http.post(this.dir+'/auxiliar', auxiliar);
  }



  deleteAuxiliar(id:String){
    return this.http.delete(this.dir+'/auxiliar/'+id);
  }

  updateAuxiliar(id:String|number, updatedAuxiliar:Auxiliar){
    return this.http.put(this.dir+'/auxiliar/'+id, updatedAuxiliar);
  }
}
