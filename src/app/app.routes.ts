import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../app/pages/dashboard/dashboard.component';
import { LoginComponent } from '../app/pages/login/login.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: DashboardComponent}
]