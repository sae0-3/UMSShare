import { AsyncPipe } from '@angular/common';
import { Component, effect, inject, output, signal } from '@angular/core';
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
  searchTerm = signal<string>('');
  search = output<string>();

  private apiService = inject(ApiService);

  constructor() {
    effect(() => {
      this.careers$ = this.apiService.getCareers();
    })
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
    this.search.emit(this.searchTerm());
  }
}
