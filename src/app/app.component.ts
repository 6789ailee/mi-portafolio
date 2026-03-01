import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './presentation/layout/navbar/navbar.component';
import { FooterComponent } from './presentation/layout/footer/footer.component';
import { LoadingScreenComponent } from './presentation/layout/loading-screen/loading-screen.component';

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
  isLoading = signal(true);

  ngOnInit() {
    // Precarga de imagen para evitar parpadeos
    const img = new Image();
    img.src = 'assets/images/image-person.png'; 
  }

  finishLoading() {
    this.isLoading.set(false);
  }
}