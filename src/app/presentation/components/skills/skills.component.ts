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
  { name: 'JavaScript', icon: 'icons/javascript.svg', color: '#f7df1e' },
  { name: 'Python', icon: 'icons/python.svg', color: '#3776ab' },
  { name: 'Angular', icon: 'icons/angular.svg', color: '#dd0031' },
  { name: 'Tailwind', icon: 'icons/tailwindcss.svg', color: '#38bdf8' },
  { name: 'SQL Server', icon: 'icons/database.svg', color: '#CC2927' },
  { name: 'MongoDB', icon: 'icons/mongodb.svg', color: '#47A248' },
  { name: 'GitHub', icon: 'icons/github.svg', color: '#ffffff' },
  { name: 'Figma', icon: 'icons/figma.svg', color: '#F24E1E' },
  { name: 'NestJS', icon: 'icons/nestjs.svg', color: '#e0234e' },
  { name: 'Node.js', icon: 'icons/nodedotjs.svg', color: '#339933' },
  { name: 'PostgreSQL', icon: 'icons/postgresql.svg', color: '#336791' }
  ];
}