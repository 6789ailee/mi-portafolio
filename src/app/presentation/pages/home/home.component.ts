import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { ProjectGridComponent } from '../../components/project-grid/project-grid.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { AboutComponent } from '../../components/about/about.component.spec';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProjectGridComponent,
    HeroComponent,
    SkillsComponent,
    AboutComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
