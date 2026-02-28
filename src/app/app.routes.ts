import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./presentation/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'proyecto/:id',
    loadComponent: () => import('./presentation/pages/project-detail/project-detail.component').then(m => m.ProjectDetailComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];