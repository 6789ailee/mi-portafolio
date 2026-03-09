import { Component, signal, OnInit, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './presentation/layout/navbar/navbar.component';
import { FooterComponent } from './presentation/layout/footer/footer.component';
import { LoadingScreenComponent } from './presentation/layout/loading-screen/loading-screen.component';
import { ParticleService } from './presentation/services/particle.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NavbarComponent, 
    FooterComponent, 
    LoadingScreenComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private particleService = inject(ParticleService);

  isLoading = signal(true);
  isDarkMode = signal(true);
  isHovering = signal(false);
  
  dotPos = signal({ x: 0, y: 0 });
  outlinePos = signal({ x: 0, y: 0 });

  ngOnInit() {
    const img = new Image();
    img.src = 'assets/images/image-person.png'; 
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.dotPos.set({ x: e.clientX, y: e.clientY });

    setTimeout(() => {
      this.outlinePos.set({ x: e.clientX, y: e.clientY });
    }, 50);

    const target = e.target as HTMLElement;
    const isClickable = !!target.closest('button, a, .clickable, input, [role="button"]');
    this.isHovering.set(isClickable);
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(e: MouseEvent) {
    this.particleService.spawnParticles(e.clientX, e.clientY);
    this.playClickSound();
  }

  finishLoading() {
    this.isLoading.set(false);
  }

  toggleTheme() {
    this.isDarkMode.update(v => !v);
    const theme = this.isDarkMode() ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }

  private playClickSound() {
    const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-29.mp3');
    audio.volume = 0.05;
    audio.play().catch(() => {}); 
  }
}