import { AsyncPipe } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Observable } from 'rxjs';

import { ApiService, Career } from '../../../../core/services/api-service';

@Component({
  selector: 'app-search-subject',
  imports: [LucideAngularModule, AsyncPipe],
  templateUrl: './search-subject.html',
})
export class SearchSubject {
  careers$!: Observable<Career[]>;

  private apiService = inject(ApiService);

  constructor() {
    effect(() => {
      this.careers$ = this.apiService.getCareers();
    })
  }
}
