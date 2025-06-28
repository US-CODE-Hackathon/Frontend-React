export interface ArchiveData {
  id: string;
  date: string;
  message: string;
  time?: string;
  title?: string; 
  photoUrl?: string;
  hasRead?: boolean;
  emotion: '긍정' | '보통' | '부정';
  summary: string;
  thumbnailColor?: ThumbnailColor;
}

export type MoodType = '긍정' | '보통' | '부정';

export type ThumbnailColor =
  | 'rgba(51, 204, 102, 0.6)'
  | 'rgba(255, 172, 95, 0.6)'
  | 'rgba(255, 92, 92, 0.6)';
