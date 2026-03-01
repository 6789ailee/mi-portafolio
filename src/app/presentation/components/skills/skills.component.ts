import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule

  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', icon: 'icons/angular.svg', color: '#dd0031' },
    { name: 'TypeScript', icon: 'icons/typescript.svg', color: '#3178c6' },
    { name: 'Tailwind', icon: 'icons/tailwindcss.svg', color: '#38bdf8' },
    { name: 'Node.js', icon: 'icons/nodedotjs.svg', color: '#339933' },
    { name: 'NestJS', icon: 'icons/nestjs.svg', color: '#e0234e' },
    { name: 'PostgreSQL', icon: 'icons/postgresql.svg', color: '#336791' }
  ];
}