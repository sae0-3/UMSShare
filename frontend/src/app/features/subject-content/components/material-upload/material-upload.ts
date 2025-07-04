import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-material-upload',
  imports: [FormsModule, LucideAngularModule],
  templateUrl: './material-upload.html',
})
export class MaterialUpload {
  @Input() uploadType: string = 'link';
  @Input() linkTitle = '';
  @Input() linkUrl = '';
  @Input() fileTitle = '';

  @Output() uploadTypeChange = new EventEmitter<string>();
  @Output() linkTitleChange = new EventEmitter<string>();
  @Output() linkUrlChange = new EventEmitter<string>();
  @Output() fileTitleChange = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }
}
