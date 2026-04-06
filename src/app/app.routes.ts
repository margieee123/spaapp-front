
 
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
 
































