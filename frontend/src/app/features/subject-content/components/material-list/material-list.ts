import { Component, Input } from '@angular/core';
import { Material } from '../../interfaces/content';
import { LucideAngularModule } from 'lucide-angular';
import { MaterialCard } from '../material-card/material-card';

@Component({
  selector: 'app-material-list',
  imports: [LucideAngularModule, MaterialCard],
  templateUrl: './material-list.html',
})
export class MaterialList {
  @Input() materials: Material[] = [];
}
