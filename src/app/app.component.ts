import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Necesario para el @if o *ngIf
import { NavbarComponent } from './presentation/layout/navbar/navbar.component';
import { ProjectGridComponent } from './presentation/components/project-grid/project-grid.component';
import { HeroComponent } from './presentation/components/hero/hero.component';
import { SkillsComponent } from './presentation/components/skills/skills.component';
import { FooterComponent } from './presentation/layout/footer/footer.component';
import { LoadingScreenComponent } from './presentation/layout/loading-screen/loading-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    ProjectGridComponent,
    HeroComponent,
    SkillsComponent,
    FooterComponent,
    LoadingScreenComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'mi-portafolio';

  // Usamos un solo Signal para manejar el estado de carga de forma reactiva
  isLoading = signal(true);

  ngOnInit() {
    // Precargamos la imagen principal aquí para que esté lista al terminar el loading
    const img = new Image();
    img.src = 'assets/tu-foto-sin-fondo.png'; 
  }

  // Esta función será llamada por el (loadingFinished) del componente de carga
  finishLoading() {
    this.isLoading.set(false);
  }
}