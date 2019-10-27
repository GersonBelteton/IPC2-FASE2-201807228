import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { CursoComponent } from './components/curso/curso.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { FormCursoComponent } from './components/form-curso/form-curso.component';
import { AuxiliarComponent } from './components/auxiliar/auxiliar.component';
import { FormAuxiliarComponent } from './components/form-auxiliar/form-auxiliar.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { NavUsuarioComponent } from './components/nav-usuario/nav-usuario.component';
import { InfoUsuarioComponent } from './components/info-usuario/info-usuario.component';
import { CursoUsuarioComponent } from './components/curso-usuario/curso-usuario.component';
import { AsignacionUcComponent } from './components/asignacion-uc/asignacion-uc.component';
import { CuentaAuxComponent } from './components/cuenta-aux/cuenta-aux.component';
import { NavAuxiliarComponent } from './components/nav-auxiliar/nav-auxiliar.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { FormMensajeComponent } from './components/form-mensaje/form-mensaje.component';
import { MensajesEstudianteComponent } from './components/mensajes-estudiante/mensajes-estudiante.component';
import { TicketEstudianteComponent } from './components/ticket-estudiante/ticket-estudiante.component';
import { TicketAdminComponent } from './components/ticket-admin/ticket-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    AdministradorComponent,
    CursoComponent,
    NavAdminComponent,
    FormCursoComponent,
    AuxiliarComponent,
    FormAuxiliarComponent,
    EstudianteComponent,
    NavUsuarioComponent,
    InfoUsuarioComponent,
    CursoUsuarioComponent,
    AsignacionUcComponent,
    CuentaAuxComponent,
    NavAuxiliarComponent,
    MensajesComponent,
    FormMensajeComponent,
    MensajesEstudianteComponent,
    TicketEstudianteComponent,
    TicketAdminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
