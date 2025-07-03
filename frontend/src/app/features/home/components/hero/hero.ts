import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

import { GoogleSignIn } from '../../../../shared/components/google-sign-in';
import { CardHero } from '../card-hero/card-hero';
import { ListHero } from '../list-hero/list-hero';

@Component({
  selector: 'app-hero',
  imports: [CardHero, ListHero, LucideAngularModule, RouterLink, GoogleSignIn],
  templateUrl: './hero.html',
})
export class Hero {
  readonly features = [
    {
      title: 'Contenido Organizado',
      description:
        'Material clasificado por semestres, materias específicas y tipos de contenido.',
      iconName: 'clipboard',
      color: '#6366f1',
    },
    {
      title: '100% Colaborativo',
      description:
        'Cualquier estudiante con cuenta UMSS puede contribuir. Tu material ayuda a futuros estudiantes.',
      iconName: 'users',
      color: '#22c55e',
    },
    {
      title: 'Seguridad Institucional',
      description:
        'Autenticación con correo UMSS para contribuir. Garantiza responsabilidad en cada aporte.',
      iconName: 'lock',
      color: '#3b82f6',
    },
    {
      title: 'Acceso Inmediato',
      description:
        'Sin registros para consultar. Acceso directo a exámenes, PDFs, videos y material complementario.',
      iconName: 'cloud',
      color: '#a855f7',
    },
    {
      title: 'Sin Limitaciones',
      description:
        'Superamos las restricciones de Classroom. Capacidad ilimitada para estudiantes y material.',
      iconName: 'zap',
      color: '#f97316',
    },
    {
      title: 'Moderación Inteligente',
      description:
        'Sistema de aprobación con moderadores especializados. Contenido verificado antes de publicación.',
      iconName: 'shieldCheck',
      color: '#f43f5e',
    },
  ];

  readonly problemList = [
    'Google Classroom limitado a 1000 estudiantes',
    'Material disperso en múltiples plataformas',
    'Difícil acceso a exámenes de semestres anteriores',
    'Falta de organización por niveles y materias',
  ];

  readonly solutionList = [
    'Acceso gratuito para todos',
    'Todo centralizado en una sola plataforma',
    'Organización clara por semestres y materias',
    'Sistema colaborativo de contribuciones',
  ];
}
