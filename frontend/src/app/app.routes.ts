import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { SubjectsDashboard } from './features/subjects-dashboard/subjects-dashboard';
import { SubjectContent } from './features/subject-content/subject-content';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'materias', component: SubjectsDashboard },
  { path: 'materias/:id/contenido', component: SubjectContent },
];
