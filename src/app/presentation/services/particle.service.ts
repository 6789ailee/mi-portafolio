import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticleService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  spawnParticles(x: number, y: number) {
    const particleCount = 10; 

    for (let i = 0; i < particleCount; i++) {
      const particle = this.renderer.createElement('div');
      
      this.renderer.addClass(particle, 'particle-bit');

      const sizeW = Math.random() * 8 + 2;
      const sizeH = Math.random() * 4 + 1; 
      const destX = (Math.random() - 0.5) * 200;
      const destY = (Math.random() - 0.5) * 200; 
      const rotation = Math.random() * 360;
      const delay = Math.random() * 0.2;

      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.width = `${sizeW}px`;
      particle.style.height = `${sizeH}px`;
      
      particle.style.setProperty('--dest-x', `${destX}px`);
      particle.style.setProperty('--dest-y', `${destY}px`);
      particle.style.setProperty('--rot', `${rotation}deg`);
      particle.style.animationDelay = `${delay}s`;

      this.renderer.appendChild(document.body, particle);

      setTimeout(() => {
        this.renderer.removeChild(document.body, particle);
      }, 1000);
    }
  }
}