import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  private baseUrl = 'http://localhost:3001';
  private http = inject(HttpClient);

  constructor() { }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.baseUrl}/subjects`);
  }

  getCareers(): Observable<Career[]> {
    return this.http.get<Career[]>(`${this.baseUrl}/careers`);
  }
}
