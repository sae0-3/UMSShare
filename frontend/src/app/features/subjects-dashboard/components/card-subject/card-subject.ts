import { Component, computed, input } from '@angular/core';
import { differenceInDays } from 'date-fns';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-card-subject',
  imports: [LucideAngularModule],
  templateUrl: './card-subject.html',
})
export class CardSubject {
  readonly name = input('');
  readonly resources = input(0);
  readonly updated_at = input('');
  readonly careers = input<{ name: string; color: string }[]>([]);
  readonly levels = input<{ name: string; color: string }[]>([]);

  readonly days = computed(() => differenceInDays(new Date(), new Date(this.updated_at())));
}
