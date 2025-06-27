import * as S from './style';
import * as T from './type';

const ArchiveCard: React.FC<{
  data: T.ArchiveData;
  onClick?: () => void;
}> = ({ data, onClick }) => {
  const getMoodText = (mood: T.MoodType): string => {
    switch (mood) {
      case 'positive':
        return '좋음';
      case 'neutral':
        return '보통';
      case 'negative':
        return '힘듦';
      default:
        return '보통';
    }
  };

  const getCardBgColor = (mood: T.MoodType): string => {
    switch (mood) {
      case 'positive':
        return '#f0f5ff';
      case 'neutral':
        return '#f5faff';
      case 'negative':
        return '#f5faff';
      default:
        return '#f5faff';
    }
  };

  return (
    <S.NotificationCard
      bgColor={getCardBgColor(data.mood)}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <S.PhotoThumbnail bgColor={data.thumbnailColor}>
        {!data.hasRead && <S.VoiceOverlay />}
      </S.PhotoThumbnail>

      <S.ContentSection>
        <S.MessageText>{data.message}</S.MessageText>
        <S.TimeText>{data.timeAgo}</S.TimeText>
      </S.ContentSection>

      <S.MoodBadge moodType={data.mood}>
        <S.BadgeText>{getMoodText(data.mood)}</S.BadgeText>
      </S.MoodBadge>
    </S.NotificationCard>
  );
};

export default ArchiveCard;
