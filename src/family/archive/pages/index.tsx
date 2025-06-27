import * as S from './style';
import * as C from '@/allFiles';
import * as T from '../components/type';

const FamilyArchive: React.FC = () => {
  const handleNotificationClick = (notification: T.ArchiveData) => {
    console.log('Notification clicked:', notification);
    // 여기에 상세 페이지 이동 로직 추가
  };

  // Sample Data
  const sampleNotifications: T.ArchiveData[] = [
    {
      id: '1',
      message: '"오늘 기분이 좋다고 하셨어요"',
      timeAgo: '3분 전',
      mood: 'positive',
      hasRead: false,
      thumbnailColor: 'rgba(51, 204, 102, 0.6)',
    },
    {
      id: '2',
      message: '"오늘은 평범한 하루라고 하셨어요"',
      timeAgo: '2시간 전',
      mood: 'neutral',
      hasRead: true,
      thumbnailColor: 'rgba(255, 172, 95, 0.6)',
    },
    {
      id: '3',
      message: '"오늘은 평범한 하루라고 하셨어요"',
      timeAgo: '2시간 전',
      mood: 'neutral',
      hasRead: true,
      thumbnailColor: 'rgba(255, 172, 95, 0.6)',
    },
    {
      id: '4',
      message: '"몸이 힘들다고 하셨어요"',
      timeAgo: '2025년 6월 12일',
      mood: 'negative',
      hasRead: true,
      thumbnailColor: 'rgba(255, 92, 92, 0.6)',
    },
    {
      id: '5',
      message: '"몸이 힘들다고 하셨어요"',
      timeAgo: '2025년 6월 12일',
      mood: 'negative',
      hasRead: true,
      thumbnailColor: 'rgba(255, 92, 92, 0.6)',
    },
    {
      id: '6',
      message: '"오늘은 평범한 하루라고 하셨어요"',
      timeAgo: '2025년 5월 27일',
      mood: 'neutral',
      hasRead: true,
      thumbnailColor: 'rgba(255, 172, 95, 0.6)',
    },
  ];

  return (
    <S.MainContainer>
      <S.PageContainer>
        <S.Header>
          <S.HeaderTitle>알림</S.HeaderTitle>
        </S.Header>

        <S.MainContent>
          <S.SectionTitle>기록 목록</S.SectionTitle>
          <C.FamilyArchiveCardList
            notifications={sampleNotifications}
            onNotificationClick={handleNotificationClick}
          />
        </S.MainContent>
      </S.PageContainer>

      <C.FamilyBottomNavigation />
    </S.MainContainer>
  );
};

export default FamilyArchive;
