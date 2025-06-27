import * as T from '../../archive/components/type';

export const getThumbnailColor = (mood: T.MoodType): T.ThumbnailColor => {
  switch (mood) {
    case 'positive':
      return 'rgba(51, 204, 102, 0.6)';
    case 'neutral':
      return 'rgba(255, 172, 95, 0.6)';
    case 'negative':
      return 'rgba(255, 92, 92, 0.6)';
    default:
      return 'rgba(172, 172, 172, 0.6)' as T.ThumbnailColor; // fallback
  }
};
