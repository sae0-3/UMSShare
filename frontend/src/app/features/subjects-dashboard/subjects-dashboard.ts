import { Component, computed, inject, signal } from '@angular/core';

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
  private careerSelected = signal<number>(-1);

  subjects = computed<Subject[]>(() => {
    const term = normalize(this.searchTerm());
    const careerId = this.careerSelected();

    return this.allSubjects().filter(subject =>
      (term === '' || normalize(subject.name).includes(term)) &&
      (careerId === -1 || subject.careers.some(career => career.id === careerId))
    );
  });

  constructor() {
    this.apiService.getSubjects().subscribe(({ data }) => {
      this.allSubjects.set(data);
    });
  }

  onSearch(searchTerm: string) {
    this.searchTerm.set(searchTerm);
  }

  onCareerChange(careerId: number) {
    this.careerSelected.set(careerId);
  }
}

function normalize(text: string): string {
  return text
    .trim()
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}
