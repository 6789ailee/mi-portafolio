import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  
  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isSubmitting = false;

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      console.log('Datos del formulario:', this.contactForm.value);
      
      setTimeout(() => {
        alert('¡Mensaje enviado con éxito! (Simulación)');
        this.contactForm.reset();
        this.isSubmitting = false;
      }, 2000);
    }
  }
}