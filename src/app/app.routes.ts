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
    loadComponent: () => import('./presentation/pages/contact/contact.component').then(m => m.ContactPageComponent)
  },
  {
    path: 'sobre-mi', 
    loadComponent: () => import('./presentation/pages/about-page/about-page.component').then(m => m.AboutPageComponent)
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./presentation/pages/project-detail/project-detail.component').then(m => m.ProjectDetailComponent)
  },
  {
    path: 'contacto-redes-sociales',
    loadComponent: () => import('./presentation/pages/contact/contact.component').then(m => m.ContactPageComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];