import { Routes } from '@angular/router';

import { Auth } from './features/auth/auth';
import { Home } from './features/home/home';
import { SubjectsDashboard } from './features/subjects-dashboard/subjects-dashboard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'materias', component: SubjectsDashboard },
  { path: 'auth/google/callback', component: Auth }
];
