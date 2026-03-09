import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss' 
})
export class NavbarComponent {
  isMenuOpen = signal(false);

  navLinks = [
    { name: 'Inicio', path: '/home' },
    { name: 'Sobre mi', path: '/sobre-mi' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Contacto', path: '/contacto' }
  ];

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}