export interface ArchiveData {
  id: string;
  date: string;
  message: string;
  time?: string;
  title?: string; 
  photoUrl?: string;
  hasRead?: boolean;
  mood: 'positive' | 'neutral' | 'negative';
  summary: string;
  thumbnailColor?: ThumbnailColor;
}

export type MoodType = 'positive' | 'neutral' | 'negative';

export type ThumbnailColor =
  | 'rgba(51, 204, 102, 0.6)'
  | 'rgba(255, 172, 95, 0.6)'
  | 'rgba(255, 92, 92, 0.6)';
