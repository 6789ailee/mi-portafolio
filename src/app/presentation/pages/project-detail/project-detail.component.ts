import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectRepository } from '../../../domain/repositories/project.repository';
import { ProjectMockRepository } from '../../../data/repositories/project-mock.repository';
import { Project } from '../../../domain/models/project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [{ provide: ProjectRepository, useClass: ProjectMockRepository }],
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private projectRepo = inject(ProjectRepository);
  
  project = signal<Project | undefined>(undefined);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectRepo.getAllProjects().subscribe(projects => {
      const found = projects.find(p => p.id === id);
      this.project.set(found);
    });
  }
}