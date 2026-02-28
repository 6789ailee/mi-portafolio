import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../../domain/models/project.model';
import { ProjectRepository } from '../../domain/repositories/project.repository';

@Injectable({ providedIn: 'root' })
export class ProjectMockRepository extends ProjectRepository {
  private projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Zen',
      description: 'Plataforma minimalista con Angular y Stripe API.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1632&auto=format&fit=crop',
      tags: ['Angular', 'Tailwind', 'Node.js'],
      featured: true
    },
    {
      id: 2,
      title: 'Crypto Dashboard',
      description: 'Visualización de datos en tiempo real con WebSockets.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1632&auto=format&fit=crop',
      tags: ['TypeScript', 'Chart.js'],
      featured: false
    },
    // Puedes añadir más aquí...
  ];

  getAllProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return of(this.projects.filter(p => p.featured));
  }
}