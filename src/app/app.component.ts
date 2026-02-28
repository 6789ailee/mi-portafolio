import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './presentation/layout/navbar/navbar.component';
import { ProjectGridComponent } from './presentation/components/project-grid/project-grid.component';
import { HeroComponent } from './presentation/components/hero/hero.component';
import { SkillsComponent } from './presentation/components/skills/skills.component';
import { FooterComponent } from './presentation/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent,
    ProjectGridComponent,
    HeroComponent,
    SkillsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mi-portafolio';
}
