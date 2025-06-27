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

  return (
    <S.NotificationCard
      bgColor={data.hasRead ? '#f5faff' : '#F0F5FF'}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <S.PhotoThumbnail color={data.thumbnailColor ?? '#cccccc'}>
        {!data.hasRead && <S.VoiceOverlay />}
      </S.PhotoThumbnail>

      <S.ContentSection>
        <S.MessageText>{data.message}</S.MessageText>
        <S.TimeText>{data.time}</S.TimeText>
      </S.ContentSection>

      <S.MoodBadge moodType={data.mood}>
        <S.BadgeText>{getMoodText(data.mood)}</S.BadgeText>
      </S.MoodBadge>
    </S.NotificationCard>
  );
};

export default ArchiveCard;
