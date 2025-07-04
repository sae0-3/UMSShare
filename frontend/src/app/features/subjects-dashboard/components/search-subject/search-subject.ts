import { AsyncPipe } from '@angular/common';
import { Component, inject, output, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Observable } from 'rxjs';

import { ApiService, Career } from '../../../../core/services/api-service';

@Component({
  selector: 'app-search-subject',
  imports: [LucideAngularModule, AsyncPipe],
  templateUrl: './search-subject.html',
})
export class SearchSubject {
  private apiService = inject(ApiService);

  careers$!: Observable<Career[]>;
  searchTerm = signal<string>('');

  search = output<string>();
  career = output<number>();

  constructor() {
    this.apiService.getCareers().subscribe(({ data }) => {
      this.careers$ = new Observable<Career[]>((subscriber) => {
        subscriber.next(data);
        subscriber.complete();
      });
    });
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
    this.search.emit(this.searchTerm());
  }

  onOptionChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.career.emit(Number(select.value));
  }
}
