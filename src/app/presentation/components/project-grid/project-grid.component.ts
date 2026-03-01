import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-grid.component.html',
  styleUrl: './project-grid.component.scss'
})
export class ProjectGridComponent {
  projects = [
    {
      title: 'E-Commerce SaaS',
      category: 'Full Stack',
      image: 'assets/images/project1.png',
      size: 'large', // Ocupará 2 columnas
      tags: ['Angular', 'NestJS', 'Stripe']
    },
    {
      title: 'Crypto Tracker',
      category: 'Web3',
      image: 'assets/images/project2.png',
      size: 'small',
      tags: ['React', 'D3.js']
    },
    {
      title: 'AI Dashboard',
      category: 'Machine Learning',
      image: 'assets/images/project3.png',
      size: 'small',
      tags: ['Python', 'Angular']
    },
    {
      title: 'Social Media App',
      category: 'Mobile First',
      image: 'assets/images/project4.png',
      size: 'medium', // Ocupará 2 columnas pero menos altura
      tags: ['Firebase', 'Tailwind']
    }
  ];
}