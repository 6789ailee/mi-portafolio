import { Component, OnInit, signal, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss'] 
})
export class LoadingScreenComponent implements OnInit {
  @Output() loadingFinished = new EventEmitter<void>();
  
  progress = signal(0);
  text = signal('');
  private fullText = '> System.init("Bienvenido");';

  ngOnInit() {
    this.typeText();
    this.startProgress();
    this.preloadAssets();
  }

  private typeText() {
    let i = 0;
    const interval = setInterval(() => {
      this.text.update(v => v + this.fullText[i]);
      i++;
      if (i === this.fullText.length) clearInterval(interval);
    }, 50);
  }

  private startProgress() {
    const interval = setInterval(() => {
      this.progress.update(v => v + 1);
      if (this.progress() === 100) {
        clearInterval(interval);
      
        setTimeout(() => this.loadingFinished.emit(), 800);
      }
    }, 30);
  }

  private preloadAssets() {
    const img = new Image();
    img.src = 'images/image-person.png';
  }
}