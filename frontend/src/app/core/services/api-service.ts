import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.development';

export interface Subject {
  id: number;
  name: string;
  resources: number;
  updated_at: string;
  careers: CareerWithLevel[];
}

export interface Career {
  id: number;
  name: string;
  color: string;
}

export interface Level {
  id: number;
  name: string;
  color: string;
}

export interface CareerWithLevel extends Career {
  level: Omit<Level, 'id'>;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = environment.api.baseUrl;
  private http = inject(HttpClient);

  constructor() { }

  getSubjects(): Observable<{ data: Subject[] }> {
    return this.http.get<{ data: Subject[] }>(`${this.baseUrl}/subjects?per_page=9`);
  }

  getCareers(): Observable<{ data: Career[] }> {
    return this.http.get<{ data: Career[] }>(`${this.baseUrl}/careers`);
  }
}
