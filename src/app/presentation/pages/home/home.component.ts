import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { ProjectGridComponent } from '../../components/project-grid/project-grid.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    ProjectGridComponent,
    HeroComponent,
    SkillsComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
