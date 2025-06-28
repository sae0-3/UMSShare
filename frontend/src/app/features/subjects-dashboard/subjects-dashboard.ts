import { Component, inject, linkedSignal, signal } from '@angular/core';

import { ApiService, Subject } from '../../core/services/api-service';
import { CardSubject } from './components/card-subject/card-subject';
import { SearchSubject } from './components/search-subject/search-subject';

@Component({
  selector: 'app-subjects-dashboard',
  imports: [CardSubject, SearchSubject],
  templateUrl: './subjects-dashboard.html',
})
export class SubjectsDashboard {
  private apiService = inject(ApiService);
  private allSubjects = signal<Subject[]>([]);
  private searchTerm = signal<string>('');

  subjects = linkedSignal<Subject[]>(() => {
    const term = normalize(this.searchTerm());

    if (term) {
      return this.allSubjects().filter(subject =>
        normalize(subject.name).includes(term));
    } else {
      return this.allSubjects();
    }
  });

  constructor() {
    this.apiService.getSubjects().subscribe(subjects => {
      this.allSubjects.set(subjects);
    });
  }

  onSearch(searchTerm: string) {
    this.searchTerm.set(searchTerm);
  }
}

function normalize(text: string): string {
  return text
    .trim()
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}
