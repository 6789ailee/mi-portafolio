import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRepository } from '../../../domain/repositories/project.repository';
import { ProjectMockRepository } from '../../../data/repositories/project-mock.repository';
import { Project } from '../../../domain/models/project.model';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { RouterLink } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-project-grid',
  standalone: true,
  imports: [CommonModule,
    ScrollRevealDirective,
    RouterLink
  ],
  providers: [
    { provide: ProjectRepository, useClass: ProjectMockRepository }
  ],
  templateUrl: './project-grid.component.html'
})

export class ProjectGridComponent implements OnInit {
  private projectRepo = inject(ProjectRepository);
  projects: Project[] = [];

  ngOnInit() {
  this.projectRepo.getAllProjects().pipe(
    delay(2000)
  ).subscribe(data => {
    this.projects = data.slice(0, 5);
  });
}

  getCardSpan(index: number): string {
    const layouts = [
      'md:col-span-2 md:row-span-2', 
      'col-span-1 row-span-1',       
      'col-span-1 row-span-1',      
      'md:col-span-1 md:row-span-1', 
      'md:col-span-2 md:row-span-1', 
    ];
    return layouts[index] || 'col-span-1';
  }
}