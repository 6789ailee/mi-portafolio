import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRepository } from '../../../domain/repositories/project.repository';
import { ProjectMockRepository } from '../../../data/repositories/project-mock.repository';
import { Project } from '../../../domain/models/project.model';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { RouterLink } from '@angular/router';

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
    this.projectRepo.getAllProjects().subscribe(data => this.projects = data);
  }
}