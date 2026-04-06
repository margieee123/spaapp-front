import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  correo: string = '';
  password: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  private apiUrl = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    this.errorMessage = '';

    if (!this.correo || !this.password) {
      this.errorMessage = 'Por favor completa todos los campos.';
      return;
    }

    this.isLoading = true;

    this.http.post<any>(this.apiUrl, {
      correo: this.correo,
      password: this.password
    }).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('rol', response.rol);
        localStorage.setItem('nombre', response.nombre);
        localStorage.setItem('idUsuario', response.idUsuario);
        this.isLoading = false;
        this.redirigirSegunRol(response.rol);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.error || 'Correo o contraseña incorrectos.';
      }
    });
  }

  private redirigirSegunRol(rol: string) {
    switch (rol) {
      case 'administrador':
        this.router.navigate(['/dashboard/admin']);
        break;
      case 'terapeuta':
        this.router.navigate(['/dashboard/terapeuta']);
        break;
      case 'recepcionista':
        this.router.navigate(['/dashboard/recepcionista']);
        break;
      case 'cliente':
        this.router.navigate(['/dashboard/cliente']);
        break;
      default:
        this.router.navigate(['/login']);
    }
  }
}