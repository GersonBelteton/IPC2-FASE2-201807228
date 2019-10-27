import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../services/usuario.service'
import {LoginService} from '../../services/login.service'
import { Usuario } from 'src/app/models/usuario';
import {Login} from 'src/app//models/login'
import{ActivatedRoute, Router} from '@angular/router'

@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
opcion=1

  login: Login={
    correo:'',
    contrasena:''
  };
  
  data = {
    correo: '',
    contrasena: ''
  }

  usuario: Usuario={
    idEstudiante: 0,
    nombre:'',
    correo:'',
    contrasena:'',
    carnet:0
  };
  usuarioEncontrado

  usuarios: any=[];  
  
  constructor(private loginService: LoginService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    
  }
redirect(){
  if(this.opcion == 1){
    this.logIn()
  }else{
    this.logInAux()
  }
}
  logIn() {
   
    if(this.login.correo == 'admin' && this.login.contrasena == 'admin'){
      console.log('administrador')
      location.href = '/admin' 
    }else{
      console.log("login es")
      this.loginService.auth(this.login)
      .subscribe(res => {
        console.log(res)
        
        localStorage.setItem("sesion",JSON.stringify(res));
        location.href = '/user'
        
      }, error => {
        console.log('hay un error :(')
        console.log(error)
      })
    }

  }


  logInAux() {
   
    if(this.login.correo == 'admin' && this.login.contrasena == 'admin'){
      console.log('administrador')
      location.href = '/admin' 
    }else{
      console.log("console aux")
      this.loginService.auth2(this.login)
      .subscribe(res => {
        console.log(res)
        
        localStorage.setItem("sesion",JSON.stringify(res));
        location.href = '/aux'
        
      }, error => {
        console.log('hay un error :(')
        console.log(error)
      })
    }

  }

  registrar(){
    console.log('registrar')
    
     this.getUsuario();
     this.usuario.idEstudiante = this.usuarioEncontrado
    this.usuarioService.saveUsuario(this.usuario).subscribe(
     res =>{
        console.log(res);
        localStorage.setItem("sesion",JSON.stringify(this.usuario)) 
        location.href = '/user'
     },
     err => console.error(err)
    );
  }

  ingresar(userName, password){

    

      
        console.log('usuario '+userName.value)
        this.login.correo = userName.value;
        this.login.contrasena = password.value;
        

        this.loginService.login(this.login).subscribe(
          res => {
            console.log(res);
          //  this.usuarios = res;
            
          },
          err => console.log(err)
        )
       
      

    
  }

  getUsuario(){
  
    this.usuarioService.getUsuarioN(this.usuario.correo).subscribe(
      res => {
        this.usuarioEncontrado = res;

      },
      err => console.log(err)
    )
  }

 
    
 

}
