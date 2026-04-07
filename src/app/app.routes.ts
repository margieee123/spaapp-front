import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { InicioAdmi } from './pages/inicioadmi/inicioadmi';
import { InicioclienteComponent } from './pages/iniciocliente/iniciocliente';
import { IniciorecepComponent } from './pages/iniciorecep/iniciorecep';
import { IniciospeciComponent } from './pages/inicioespeci/inicioespeci';
import { RegisterComponent } from './pages/register/register';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard/admin', component: InicioAdmi },
  { path: 'dashboard/cliente', component: InicioclienteComponent },
  { path: 'dashboard/recepcionista', component: IniciorecepComponent },
  { path: 'dashboard/terapeuta', component: IniciospeciComponent },
  { path: 'registro', component: RegisterComponent },
  { path: '**', redirectTo: '/login' }
];  