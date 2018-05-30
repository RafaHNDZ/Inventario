import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../app/pages/dashboard/dashboard.component';
import { LoginComponent } from '../app/pages/login/login.component';
import { GeneralComponent } from './pages/general/general.component';
import { SucursalComponent } from './pages/sucursal/sucursal.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { EntradasComponent } from './pages/entradas/entradas.component';
import { RegistroEntradaComponent } from './pages/registro-entrada/registro-entrada.component';

export const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},    
    {path: 'login', component: LoginComponent},
    {path: '', component: DashboardComponent},
    //Rutas Mantenimiento
    {path: 'general', component: GeneralComponent},
    {path: 'sucursal', component: SucursalComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'empleados', component: EmpleadosComponent},
    //Rutas Almacen
    {path: 'articulos', component: ArticulosComponent},
    {path: 'categorias', component: CategoriasComponent},
    //Rutas Compras
    {path: 'entradas', component: EntradasComponent},
    {path: 'entradas/nuevo', component: RegistroEntradaComponent}
]