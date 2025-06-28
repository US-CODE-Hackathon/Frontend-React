import * as S from './style';
import * as T from './type';

const ArchiveCard: React.FC<{
  data: T.ArchiveData;
  onClick?: () => void;
}> = ({ data, onClick }) => {
  const getMoodText = (mood: T.MoodType): string => {
    switch (mood) {
      case '긍정':
        return '좋음';
      case '보통':
        return '보통';
      case '부정':
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
        <S.MessageText>{data.title}</S.MessageText>
        <S.TimeText>{data.date}</S.TimeText>
      </S.ContentSection>

      <S.MoodBadge moodType={data.emotion}>
        <S.BadgeText>{getMoodText(data.emotion)}</S.BadgeText>
      </S.MoodBadge>
    </S.NotificationCard>
  );
};

export default ArchiveCard;
