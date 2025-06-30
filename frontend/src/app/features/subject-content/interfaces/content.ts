export interface Material {
  id: string;
  type: 'link' | 'file';
  title: string;
  url?: string;
  fileName?: string;
  fileSize?: string;
  uploadDate: Date;
  uploadedBy: string;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  description: string;
}
