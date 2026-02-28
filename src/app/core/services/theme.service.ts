import { computed, Injectable, signal } from '@angular/core';
import { Project } from '../../domain/models/project.model';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  darkMode = signal<boolean>(
    localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  constructor() {
    this.applyTheme();
  }

  toggleTheme() {
    this.darkMode.update(mode => !mode);
    localStorage.setItem('theme', this.darkMode() ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    if (this.darkMode()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}

export class ProjectService {
  // Estado inicial
  private projectsSignal = signal<Project[]>([]);
  filter = signal<string>('All');

  // Selector computado (Reactividad pura)
  filteredProjects = computed(() => {
    const activeFilter = this.filter();
    if (activeFilter === 'All') return this.projectsSignal();
    return this.projectsSignal().filter(p => p.tags.includes(activeFilter));
  });

  setProjects(data: Project[]) {
    this.projectsSignal.set(data);
  }
}