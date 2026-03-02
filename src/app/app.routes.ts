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
    path: 'contacto',
    loadComponent: () => import('./presentation/pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'sobre-mi', 
    loadComponent: () => import('./presentation/components/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'proyecto/:id',
    loadComponent: () => import('./presentation/pages/project-detail/project-detail.component').then(m => m.ProjectDetailComponent)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./presentation/pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];