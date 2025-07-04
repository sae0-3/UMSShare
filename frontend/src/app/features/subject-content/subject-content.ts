import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { Material, Subject } from './interfaces/content';
import { SubjectHeader } from './components/subject-header/subject-header';
import { MaterialUpload } from './components/material-upload/material-upload';
import { MaterialList } from './components/material-list/material-list';

@Component({
  selector: 'app-subject-content',
  imports: [
    CommonModule,
    FormsModule,
    LucideAngularModule,
    SubjectHeader,
    MaterialUpload,
    MaterialList,
  ],
  templateUrl: './subject-content.html',
})
export class SubjectContent implements OnInit {
  showUpload = signal(false);
  materials = signal<Material[]>([]);
  currentSubject = signal<Subject>({
    id: '1',
    name: 'Programación Orientada a Objetos',
    code: 'INF-2341',
    description: 'Conceptos fundamentales de programación orientada a objetos',
  });

  uploadType = 'link';
  linkTitle = '';
  linkUrl = '';
  fileTitle = '';

  constructor() {}

  ngOnInit() {
    this.materials.set([
      {
        id: '1',
        type: 'link',
        title: 'Apuntes de Clases - Semana 1',
        url: 'https://example.com/apuntes-1',
        uploadDate: new Date('2024-03-15'),
        uploadedBy: 'María González',
      },
      {
        id: '2',
        type: 'file',
        title: 'Examen Parcial 2023',
        fileName: 'parcial-2023.pdf',
        uploadDate: new Date('2024-03-10'),
        uploadedBy: 'Carlos Pérez',
      },
      {
        id: '3',
        type: 'link',
        title: 'Tutorial de UML',
        url: 'https://example.com/tutorial-uml',
        uploadDate: new Date('2024-03-08'),
        uploadedBy: 'Ana Rodríguez',
      },
      {
        id: '4',
        type: 'file',
        title: 'Libro: Programación en Java',
        fileName: 'java-programming.pdf',
        uploadDate: new Date('2024-03-05'),
        uploadedBy: 'Luis Martínez',
      },
      {
        id: '5',
        type: 'file',
        title: 'Ejercicios Resueltos',
        fileName: 'ejercicios-resueltos.docx',
        uploadDate: new Date('2024-03-01'),
        uploadedBy: 'Sandra López',
      },
    ]);
  }

  toggleUploadMode() {
    this.showUpload.set(!this.showUpload());
    if (!this.showUpload()) {
      this.resetForm();
    }
  }

  resetForm() {
    this.uploadType = 'link';
    this.linkTitle = '';
    this.linkUrl = '';
    this.fileTitle = '';
  }
}
