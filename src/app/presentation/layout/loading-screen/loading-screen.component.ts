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
  private fullText = "> Hi, I'm Aile. Welcome to my portfolio. /<"; 

  ngOnInit() {
    this.typeText();
    this.startProgress();
  }

  private typeText() {
    let i = 0;
    const interval = setInterval(() => {
      if (i < this.fullText.length) {
        this.text.update(v => v + this.fullText[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 35); 
  }

  private startProgress() {
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 4) + 1;
      this.progress.update(v => Math.min(v + increment, 100));

      if (this.progress() === 100) {
        clearInterval(interval);
        setTimeout(() => this.loadingFinished.emit(), 1200);
      }
    }, 60);
  }
}