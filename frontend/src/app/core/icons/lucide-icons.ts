import {
  AudioWaveform,
  BookOpen,
  Check,
  ChevronDown,
  Clipboard,
  Clock,
  Cloud,
  FileText,
  GalleryVerticalEnd,
  Lock,
  Search,
  ShieldCheck,
  Users,
  X,
  Zap,
} from 'lucide-angular';

export const LUCIDE_ICONS = {
  AudioWaveform,
  BookOpen,
  Check,
  Clipboard,
  Clock,
  Cloud,
  FileText,
  GalleryVerticalEnd,
  Lock,
  ShieldCheck,
  Users,
  X,
  Zap,
  Search,
  ChevronDown,
};

export type LucideIconName = keyof typeof LUCIDE_ICONS;

export type LucideIcons = typeof LUCIDE_ICONS;
