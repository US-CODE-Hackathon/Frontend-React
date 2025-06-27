import * as S from './style';
import * as C from '@/allFiles';
import * as T from '../components/type';

import { useNavigate } from 'react-router-dom';

const FamilyArchive: React.FC = () => {
  const navigate = useNavigate();

  const handleNotificationClick = (notification: T.ArchiveData) => {
    console.log('Notification clicked:', notification);
    navigate(`/family/archive/${notification.id}`);
  };

  const sampleNotifications: T.ArchiveData[] = [
    {
      id: '1',
      date: '2025년 6월 27일',
      time: '오후 3:30',
      message: '"오늘 기분이 좋다고 하셨어요"',
      mood: 'positive',
      thumbnailColor: 'rgba(51, 204, 102, 0.6)',
      hasRead: false,
      summary: '산책을 하며 공원의 풍경을 감상하고 기분 좋은 하루를 보내셨습니다.',
      photoUrl: '/images/photo1.jpg',
    },
    {
      id: '2',
      date: '2025년 6월 26일',
      time: '오전 11:10',
      message: '"오늘은 평범한 하루라고 하셨어요"',
      mood: 'neutral',
      thumbnailColor: 'rgba(255, 172, 95, 0.6)',
      hasRead: true,
      summary: '조용한 하루를 보내셨고 별다른 특이사항은 없었습니다.',
      photoUrl: '/images/photo2.jpg',
    },
    {
      id: '3',
      date: '2025년 6월 25일',
      time: '오후 6:00',
      message: '"몸이 힘들다고 하셨어요"',
      mood: 'negative',
      thumbnailColor: 'rgba(255, 92, 92, 0.6)',
      hasRead: true,
      summary: '기력이 다소 떨어져 보였으며 저녁에는 휴식을 취하셨습니다.',
      photoUrl: '/images/photo3.jpg',
    },
    {
      id: '4',
      date: '2025년 6월 24일',
      time: '오후 1:45',
      message: '"날씨가 좋아서 기분이 괜찮다고 하셨어요"',
      mood: 'positive',
      thumbnailColor: 'rgba(51, 204, 102, 0.6)',
      hasRead: true,
      summary: '날씨가 좋아 야외 활동을 하며 긍정적인 반응을 보이셨습니다.',
      photoUrl: '/images/photo4.jpg',
    },
    {
      id: '5',
      date: '2025년 6월 23일',
      time: '오후 2:20',
      message: '"조금 피곤하지만 괜찮다고 하셨어요"',
      mood: 'neutral',
      thumbnailColor: 'rgba(255, 172, 95, 0.6)',
      hasRead: false,
      summary: '살짝 피로감을 느끼셨지만 전반적으로는 무난한 하루였습니다.',
      photoUrl: '/images/photo5.jpg',
    },
  ];

  return (
    <S.MainContainer>
      <S.PageContainer>
        <S.Header>알림</S.Header>

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
