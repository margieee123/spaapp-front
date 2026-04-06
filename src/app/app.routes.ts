import { Routes } from '@angular/router';
import { InicioAdmi } from './pages/inicioadmi/inicioadmi';
import { RegisterComponent } from './pages/register/register';

export const routes: Routes = [
  { path: 'admin', component: InicioAdmi }, // dashboard
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'registro', component: RegisterComponent } // registro
];