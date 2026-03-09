import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  color: string;
}

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {

  projects = signal<Project[]>([
    {
      id: 1,
      title: 'CiberGuard Pro',
      category: 'Seguridad Informática',
      description: 'Sistema de monitoreo de red en tiempo real para detección de intrusiones mediante IA.',
      tags: ['Angular', 'Python', 'Docker'],
      image: 'images/project1.jpg',
      link: '#',
      color: '#be185d'
    },
    {
      id: 2,
      title: 'Bio-Sync Gestor',
      category: 'Sistemas de Gestión',
      description: 'Plataforma de gestión para el sector público optimizada para la transparencia administrativa.',
      tags: ['TypeScript', 'NestJS', 'PostgreSQL'],
      image: 'images/project2.jpg',
      link: '#',
      color: '#5b21b6'
    },
    {
      id: 3,
      title: 'Eco-System Monitor',
      category: 'IoT / Sistemas',
      description: 'Visualización de datos de sensores ambientales para ciudades inteligentes.',
      tags: ['RxJS', 'MQTT', 'Go'],
      image: 'images/project3.jpg',
      link: '#',
      color: '#6b21a8'
    }
  ]);

  activeProject = signal(0);

  updateActive(index: number) {
    this.activeProject.set(index);
  }

  isModalOpen = signal(false);
  selectedProject = signal<any>(null);
  activeProjectIndex = signal(0); 

  openProject(project: any) {
    this.selectedProject.set(project);
    this.isModalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen.set(false);
    document.body.style.overflow = 'auto';
  }
}