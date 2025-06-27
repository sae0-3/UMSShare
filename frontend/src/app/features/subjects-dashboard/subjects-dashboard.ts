import { Component } from '@angular/core';

import { CardSubject } from './components/card-subject/card-subject';
import { SearchSubject } from "./components/search-subject/search-subject";

@Component({
  selector: 'app-subjects-dashboard',
  imports: [CardSubject, SearchSubject],
  templateUrl: './subjects-dashboard.html',
})
export class SubjectsDashboard {
  readonly subjects = [
    {
      id: '1',
      name: 'Programación Web',
      levels: [{ name: 'F', color: '#ff3321' },],
      resources: 9,
      careers: [
        {
          name: 'Ing. Informatica',
          color: '#fff555',
        }
      ],
      updated_at: '2025-06-15T12:00:00.000Z',
    },
    {
      id: '2',
      name: 'Taller de Sistemas Operativos',
      levels: [
        { name: 'D', color: '#b2aaff' },
        { name: 'E', color: '#fa00ff' },
      ],
      resources: 0,
      careers: [
        {
          name: 'Ing. Informatica',
          color: '#fff555',
        },
        {
          name: 'Ing. Sistemas',
          color: '#abc222',
        }
      ],
      updated_at: '2025-06-20T12:00:00.000Z',
    },
  ];
}
