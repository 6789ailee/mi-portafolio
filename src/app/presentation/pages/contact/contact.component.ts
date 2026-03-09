import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactPageComponent {
  
  myEmail = 'chacmielia@gmail.com'; 
  copySuccess = signal(false);

  socialLinks = signal([
    { name: 'LinkedIn', icon: 'images/linkedin.svg', url: 'https://linkedin.com/in/tu-perfil', color: '#0077b5' },
    { name: 'GitHub', icon: 'images/github.svg', url: 'https://github.com/tu-usuario', color: '#ffffff' },
    { name: 'WhatsApp', icon: 'images/whatsapp.svg', url: 'https://wa.me/591XXXXXXXX', color: '#25d366' }
  ]);

  copyToClipboard() {
    navigator.clipboard.writeText(this.myEmail);
    this.copySuccess.set(true);
    setTimeout(() => this.copySuccess.set(false), 2000);
  }

  openGmail() {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${this.myEmail}`, '_blank');
  }
}