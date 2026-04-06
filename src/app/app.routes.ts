<<<<<<< HEAD

 
import { Routes } from '@angular/router';
import { Login } from './IGU/login/login';
import { DashboardAdminComponent } from './IGU/admin-dash/admin-dash';
import { DashboardClienteComponent} from './IGU/cliente-dash/cliente-dash';
import { DashboardRecepComponent } from './IGU/recep-dash/recep-dash';
import { DashboardTerapeutaComponent } from './IGU/terapeuta-dash/terapeuta-dash';
 
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard/admin', component: DashboardAdminComponent },
  { path: 'dashboard/cliente', component: DashboardClienteComponent },
  { path: 'dashboard/recepcionista', component: DashboardRecepComponent },
  { path: 'dashboard/terapeuta', component: DashboardTerapeutaComponent },
  { path: '**', redirectTo: '/login' }
];
 
































=======
import { Routes } from '@angular/router';
import { InicioAdmi } from './pages/inicioadmi/inicioadmi';
import { RegisterComponent } from './pages/register/register';

export const routes: Routes = [
  { path: 'admin', component: InicioAdmi }, // dashboard
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'registro', component: RegisterComponent } // registro
];
>>>>>>> 86f023a76ff488390a398c9f923849d2f9312ec8
