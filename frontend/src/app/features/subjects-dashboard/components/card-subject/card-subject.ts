import { Component, computed, input } from '@angular/core';
import { differenceInDays } from 'date-fns';
import { LucideAngularModule } from 'lucide-angular';

import { CareerWithLevel } from '../../../../core/services/api-service';

@Component({
  selector: 'app-card-subject',
  imports: [LucideAngularModule],
  templateUrl: './card-subject.html',
})
export class CardSubject {
  readonly name = input.required<string>();
  readonly resources = input.required<number>();
  readonly updated_at = input.required<string>();
  readonly careers = input.required<CareerWithLevel[]>();

  readonly days = computed(() => differenceInDays(new Date(), new Date(this.updated_at())));

  readonly levels = computed(() => {
    const levelsMap = new Map<string, { name: string; color: string }>();

    this.careers().forEach(career => {
      if (!levelsMap.has(career.level.name)) {
        levelsMap.set(career.level.name, {
          name: career.level.name,
          color: career.level.color
        });
      }
    });

    return Array.from(levelsMap.values());
  });
}
