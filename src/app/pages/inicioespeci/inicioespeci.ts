import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicioespeci',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicioespeci.html',
  styleUrls: ['./inicioespeci.css']
})
export class IniciospeciComponent implements OnInit {

  nombre: string = '';
  iniciales: string = '';
  fechaHoy: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const nombreCompleto = localStorage.getItem('nombre') || 'Especialista';
    this.nombre = nombreCompleto;
    this.iniciales = nombreCompleto
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();

    const hoy = new Date();
    const opciones: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    };
    this.fechaHoy = hoy.toLocaleDateString('es-ES', opciones);
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  stats = [
    { icono: 'today',    valor: '5',    label: 'Citas Hoy' },
    { icono: 'schedule', valor: '6.5h', label: 'Horas Activas' },
    { icono: 'star',     valor: '4.9',  label: 'Mi Calificación' },
    { icono: 'group',    valor: '42',   label: 'Clientes Totales' },
  ];

  agenda = [
    { hora: '09:00', ampm: 'AM', servicio: 'Masaje de Serenidad Sueco',     duracion: '60 min', cliente: 'Sofía Martínez',  notas: 'Sin alergias registradas · Sala 2',       actual: true,  descanso: false },
    { hora: '10:30', ampm: 'AM', servicio: 'Aromaterapia Botánica',         duracion: '75 min', cliente: 'Laura Gómez',     notas: 'Preferencia: aceites cítricos · Sala 1',  actual: false, descanso: false },
    { hora: '12:00', ampm: 'PM', servicio: 'Descanso',                      duracion: '45 min', cliente: '',                notas: '',                                        actual: false, descanso: true },
    { hora: '02:00', ampm: 'PM', servicio: 'Tejido Profundo',               duracion: '90 min', cliente: 'Julianna Torres', notas: 'Zona lumbar · Alta presión · Sala 2',     actual: false, descanso: false },
    { hora: '04:00', ampm: 'PM', servicio: 'Masaje con Piedras Volcánicas', duracion: '60 min', cliente: 'Valentina Ríos',  notas: 'Primera vez · Intensidad media · Sala 1', actual: false, descanso: false },
  ];

  proximaCita = {
    servicio: 'Aromaterapia Botánica',
    cliente:  'Laura Gómez',
    en:       '1h 15min',
    nota:     'Prefiere aceites cítricos. Sensibilidad en hombros. Primera visita del mes.'
  };

  resenas = [
    { estrellas: 5, texto: '"Increíble sesión, me sentí completamente renovada."', autor: 'Sofía M. · Masaje Sueco' },
    { estrellas: 4, texto: '"Muy profesional, ambiente perfecto."',                autor: 'Valentina R. · Aromaterapia' },
  ];

  disponibilidad = [
    { dia: 'Lun', slots: '5/5', clase: 'active' },
    { dia: 'Mar', slots: '3/5', clase: 'partial' },
    { dia: 'Mié', slots: '0/5', clase: 'free' },
    { dia: 'Jue', slots: '4/5', clase: 'partial' },
    { dia: 'Vie', slots: '5/5', clase: 'active' },
  ];
}