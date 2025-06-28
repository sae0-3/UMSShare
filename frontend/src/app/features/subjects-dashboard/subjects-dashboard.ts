import { AsyncPipe } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService, Subject } from '../../core/services/api-service';
import { CardSubject } from './components/card-subject/card-subject';
import { SearchSubject } from './components/search-subject/search-subject';

@Component({
  selector: 'app-subjects-dashboard',
  imports: [CardSubject, SearchSubject, AsyncPipe],
  templateUrl: './subjects-dashboard.html',
})
export class SubjectsDashboard {
  subjects$!: Observable<Subject[]>;

  private apiService = inject(ApiService);

  constructor() {
    effect(() => {
      this.subjects$ = this.apiService.getSubjects();
    });
  }
}
