import { Component, input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-card-hero',
  imports: [LucideAngularModule],
  templateUrl: './card-hero.html',
})
export class CardHero {
  readonly title = input<string>('');
  readonly description = input<string>('');
  readonly iconName = input<string>('');
  readonly color = input<string>('');
}
