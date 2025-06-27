import {
  BookOpen,
  Check,
  Clipboard,
  Cloud,
  Lock,
  ShieldCheck,
  Users,
  X,
  Zap,
} from 'lucide-angular';

export const LUCIDE_ICONS = {
  Clipboard,
  Users,
  Lock,
  Cloud,
  Zap,
  ShieldCheck,
  X,
  Check,
  BookOpen
};

export type LucideIconName = keyof typeof LUCIDE_ICONS;

export type LucideIcons = typeof LUCIDE_ICONS;
