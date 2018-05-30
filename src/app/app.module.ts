import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Complementos
import { ChartsModule } from 'ng2-charts'

//Rutas
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

//Componentes de mantenimiento
import { GeneralComponent } from './pages/general/general.component';
import { SucursalComponent } from './pages/sucursal/sucursal.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';

//Componentes de almacen
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { EntradasComponent } from './pages/entradas/entradas.component';
import { RegistroEntradaComponent } from './pages/registro-entrada/registro-entrada.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    GeneralComponent,
    SucursalComponent,
    UsuariosComponent,
    EmpleadosComponent,
    ArticulosComponent,
    CategoriasComponent,
    EntradasComponent,
    RegistroEntradaComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
