import { Component, Input } from '@angular/core';
import { Material } from '../../interfaces/content';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-material-card',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './material-card.html',
})
export class MaterialCard {
  @Input() material!: Material;
}
