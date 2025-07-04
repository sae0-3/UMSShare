import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Subject } from '../../interfaces/content';

@Component({
  selector: 'app-subject-header',
  imports: [LucideAngularModule],
  templateUrl: './subject-header.html',
})
export class SubjectHeader {
  @Input() subject!: Subject;
  @Output() toggleUpload = new EventEmitter<void>();

  onToggleUpload() {
    this.toggleUpload.emit();
  }
}
