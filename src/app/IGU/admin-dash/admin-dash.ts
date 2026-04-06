import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-[#131313] flex items-center justify-center">
      <div class="text-center">
        <span class="material-symbols-outlined text-[#e3c190] text-6xl mb-6 block">admin_panel_settings</span>
        <h1 class="text-4xl font-bold text-[#e3c190] mb-2">Bienvenido a la interfaz de Administrador</h1>
        <p class="text-[#d1c5b7] text-lg">{{ nombre }}</p>
        <button (click)="cerrarSesion()" class="mt-8 px-6 py-2 border border-[#4e463b] text-[#d1c5b7] rounded-full text-sm hover:border-[#e3c190] hover:text-[#e3c190] transition-all duration-300">
          Cerrar sesión
        </button>
      </div>
    </div>
  `
})
export class DashboardAdminComponent implements OnInit {
  nombre: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.nombre = localStorage.getItem('nombre') || '';
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}