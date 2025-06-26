import { Component, input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-list-hero',
  imports: [LucideAngularModule],
  templateUrl: './list-hero.html',
})
export class ListHero {
  readonly iconName = input<string>('');
  readonly color = input<string>('');
  readonly list = input<string[]>([]);
}
