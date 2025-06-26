import { importProvidersFrom } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

import { LUCIDE_ICONS } from './lucide-icons';

export function provideLucideIcons() {
  return importProvidersFrom(
    LucideAngularModule.pick(LUCIDE_ICONS)
  );
}
