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
    { name: 'Angular', icon: 'assets/icons/angular.svg', color: '#dd0031' },
    { name: 'TypeScript', icon: 'assets/icons/typescript.svg', color: '#3178c6' },
    { name: 'Tailwind', icon: 'assets/icons/tailwind.svg', color: '#38bdf8' },
    { name: 'Node.js', icon: 'assets/icons/node.svg', color: '#339933' },
    { name: 'NestJS', icon: 'assets/icons/nestjs.svg', color: '#e0234e' },
    { name: 'PostgreSQL', icon: 'assets/icons/postgres.svg', color: '#336791' }
  ];
}