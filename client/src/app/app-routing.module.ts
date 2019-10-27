import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import {UsuarioComponent} from './components/usuario/usuario.component'
import {AdministradorComponent} from './components/administrador/administrador.component'
import {CursoComponent} from './components/curso/curso.component'
import {NavAdminComponent} from './components/nav-admin/nav-admin.component'
import {FormCursoComponent} from './components/form-curso/form-curso.component'
import {AuxiliarComponent} from './components/auxiliar/auxiliar.component'
import {FormAuxiliarComponent} from './components/form-auxiliar/form-auxiliar.component'
import {EstudianteComponent} from './components/estudiante/estudiante.component'
import {CursoUsuarioComponent} from './components/curso-usuario/curso-usuario.component'
import {AsignacionUcComponent} from './components/asignacion-uc/asignacion-uc.component'
import {CuentaAuxComponent} from './components/cuenta-aux/cuenta-aux.component'
import {MensajesComponent} from './components/mensajes/mensajes.component'
import {FormMensajeComponent} from './components/form-mensaje/form-mensaje.component'
import {MensajesEstudianteComponent} from './components/mensajes-estudiante/mensajes-estudiante.component'
import {TicketEstudianteComponent} from './components/ticket-estudiante/ticket-estudiante.component'
import {TicketAdminComponent} from './components/ticket-admin/ticket-admin.component'
const routes: Routes = [

{
  path:'',
  redirectTo:'/login',
  pathMatch:'full'
},
{
  path:'login',
  component: LoginComponent
},
{
  path:'user',
  component: UsuarioComponent
},
{
  path: 'admin',
  component: AdministradorComponent
},
{
  path: 'admin/cursos',
  
  component: CursoComponent
},
{
  path: 'admin/cursos/form',
  component: FormCursoComponent
},
{
  path: 'admin/cursos/form/:id',
  component: FormCursoComponent
},
{
  path: 'admin/auxiliares',
  component: AuxiliarComponent
},
{
  path: 'admin/auxiliares/form',
  component: FormAuxiliarComponent
},
{
  path: 'admin/auxiliares/form/:id',
  component: FormAuxiliarComponent
},
{
  path: 'admin/estudiantes',
  component: EstudianteComponent
},
{
  path: 'user/cursos',
  component: CursoUsuarioComponent
},
{
  path: 'user/asignacion',
  component: AsignacionUcComponent
},
{
  path:'aux',
  component: CuentaAuxComponent
},
{
  path: 'aux/mensajes',
  component: MensajesComponent
},
{
  path: 'formMensaje',
  component: FormMensajeComponent
},
{
  path: 'user/mensajes',
  component: MensajesEstudianteComponent
},
{
  path: 'user/tickets',
  component: TicketEstudianteComponent
},
{
  path: 'admin/tickets',
  component: TicketAdminComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
