import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { GoogleSignIn } from './google-sign-in';

@Component({
  selector: 'app-header',
  imports: [GoogleSignIn, RouterLink],
  template: `
   <header class="bg-white/50 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between gap-4 h-16">
          <div class="flex items-center">
            <a routerLink="/" class="flex items-center space-x-2 group">
              <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                <span class="text-white font-bold">U</span>
              </div>

              <span class="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                UMSShare
              </span>
            </a>
          </div>

          <div class="min-w-36">
            <app-google-sign-in />
          </div>
        </div>
      </div>
    </header>
  `,
})
export class Header { }
