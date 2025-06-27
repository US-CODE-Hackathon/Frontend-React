export interface ArchiveData {
  id: string;
  message: string;
  timeAgo: string;
  mood: 'positive' | 'neutral' | 'negative';
  hasRead?: boolean;
  thumbnailColor: string;
}

export type MoodType = 'positive' | 'neutral' | 'negative';
