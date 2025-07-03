import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-auth',
  imports: [],
  template: '<p>Autenticando...</p>',
})
export class Auth {
  private readonly environment = environment;
  private http = inject(HttpClient);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  constructor() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.http.post(`${this.environment.api.baseUrl}/auth/google`,
        { code: params['code'] },
      ).subscribe({
        next: console.log,
        error: console.error,
        complete: () => {
          this.router.navigate(['/']);
        },
      });
    });
  }
}
