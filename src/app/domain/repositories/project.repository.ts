import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

export abstract class ProjectRepository {
  abstract getAllProjects(): Observable<Project[]>;
  abstract getFeaturedProjects(): Observable<Project[]>;
}