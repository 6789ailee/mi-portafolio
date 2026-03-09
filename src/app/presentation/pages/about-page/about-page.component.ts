import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineItem {
  year: string;
  duration: string;
  title: string;
  org: string;
  description: string;
  icon: string;
  color: string;
}

interface Language {
  name: string;
  level: string;
  color: string;
}

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent implements OnInit {

  profileTitle = signal('INGENIERÍA & ESTRATEGIA');
  fullDescription = 'Estudiante de último año de Ingeniería de Sistemas con mentalidad orientada a la seguridad. Mi experiencia como Subalcaldesa me otorgó una visión estratégica y liderazgo real, permitiéndome abordar problemas técnicos con una perspectiva global y resolutiva.';
  displayText = signal('');

  timelineSteps = signal<TimelineItem[]>([
    {
      year: '2021',
      duration: '01/2021 - 01/2022',
      title: 'Subalcaldesa Municipal',
      org: 'G.A.M. Sacaca, Potosí',
      description: 'Liderazgo de equipos multidisciplinarios para la gestión de proyectos públicos. Coordinación estratégica con la Gobernación y optimización de comunicación interna bajo presión.',
      icon: '🏛️',
      color: '#be185d'
    },
    {
      year: '2023',
      duration: '02/2023 - 12/2026',
      title: 'Ingeniería de Sistemas',
      org: 'Universidad Adventista de Bolivia',
      description: 'Enfoque académico en desarrollo Full-Stack, gestión de bases de datos y Ciberseguridad. Preparación para el liderazgo tecnológico.',
      icon: '💻',
      color: '#6b21a8'
    },
    {
      year: '2024',
      duration: 'Certificación',
      title: 'Cybersecurity Essentials',
      org: 'Cisco Networking Academy',
      description: 'Especialización en defensa de redes, ética digital y cumplimiento de normativas de seguridad de la información como ISO 27001.',
      icon: '🛡️',
      color: '#5b21b6'
    }
  ]);

  languages = signal<Language[]>([
    { name: 'Quechua', level: 'Nativo', color: '#be185d' },
    { name: 'Español', level: 'Nativo', color: '#6b21a8' },
    { name: 'Inglés', level: 'Básico (A2)', color: '#5b21b6' },
    { name: 'Ruso', level: 'Principiante', color: '#4c1d95' }
  ]);

  softSkills = signal(['Liderazgo Empático', 'Escucha Activa', 'Resolución de Problemas', 'Comunicación Asertiva', 'Visión Estratégica', 'Gestión Pública']);

  activeCert = signal(0);
  certificates = signal([
    {
      id: 'CERT-01',
      title: 'Cybersecurity Essentials',
      issuer: 'Cisco Networking Academy',
      description: 'Especialización en defensa de redes y amenazas cibernéticas.',
      image: 'images/cert-cisco.png',
      color: '#be185d'
    },
    {
      id: 'CERT-02',
      title: 'Uso Ético de IA',
      issuer: 'UAB / Especialización',
      description: 'Dominio de herramientas de IA bajo un marco ético.',
      image: 'images/cert-ia.png',
      color: '#6b21a8'
    },
    {
      id: 'CERT-03',
      title: 'Norma ISO 27001',
      issuer: 'Seguridad de la Información',
      description: 'Estándares internacionales de gestión de seguridad.',
      image: 'images/cert-iso.png',
      color: '#5b21b6'
    }
  ]);

  ngOnInit() {
    this.startTypingEffect();
  }

  private startTypingEffect() {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < this.fullDescription.length) {
        this.displayText.update((current: string) => current + this.fullDescription[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 35);
  }

  nextCert() { this.activeCert.update(v => (v + 1) % this.certificates().length); }
  prevCert() { this.activeCert.update(v => (v - 1 + this.certificates().length) % this.certificates().length); }
}