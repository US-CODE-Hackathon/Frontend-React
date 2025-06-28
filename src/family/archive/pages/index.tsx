import * as S from './style';
import * as C from '@/allFiles';
import * as T from '../components/type';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mainApi } from '@/api/axiosInstance';

interface Emotion {
  emotionalReportId: number;
  imageUrl: string;
  emotion: string;
  aiSummary: string;
  date: string;
  first: boolean;
  title?: string;
}

interface ApiResponse {
  success: boolean;
  response: Emotion[];
  error: null | string;
}

const FamilyArchive: React.FC = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<T.ArchiveData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true);

        const response = await mainApi.get<ApiResponse>('/emotions');

        if (response.data.success) {
          if (response.data.response.length === 0) {
            setError('기록이 없습니다.');
            setLoading(false);
            return;
          }
          const formattedNotifications: T.ArchiveData[] = response.data.response
            .map((emotionData) => {
              const [year, month, day] = emotionData.date.split('-');
              const formattedDate = `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`;

              return {
                id: emotionData.emotionalReportId.toString(),
                date: formattedDate,
                originalDate: emotionData.date, 
                message: `"${emotionData.aiSummary}"`,
                title: emotionData.title,
                emotion: emotionData.emotion as T.MoodType,
                thumbnailColor:
                  emotionData.emotion === '긍정'
                    ? 'rgba(51, 204, 102, 0.6)' as T.ThumbnailColor
                    : emotionData.emotion === '보통'
                    ? 'rgba(255, 172, 95, 0.6)' as T.ThumbnailColor
                    : 'rgba(255, 92, 92, 0.6)' as T.ThumbnailColor,
                hasRead: !emotionData.first,
                summary: emotionData.aiSummary,
                photoUrl: emotionData.imageUrl || undefined,
              };
            })
            // 날짜 기준 내림차순 정렬
            .sort((a, b) => new Date(b.originalDate!).getTime() - new Date(a.originalDate!).getTime());
          console.log('Formatted and Sorted Notifications:', formattedNotifications);
          setNotifications(formattedNotifications);
        } else {
          setError('데이터를 가져오지 못했습니다.');
        }
      } catch (err) {
        console.error('API Error:', err);
        setError('API 호출 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  useEffect(() => {
    console.log('Updated Notifications:', notifications);
  }, [notifications]);

  const handleNotificationClick = (notification: T.ArchiveData) => {
    console.log('Notification clicked:', notification);
    navigate(`/family/archive/${notification.id}`);
  };

  if (loading) {
    return (
      <S.MainContainer>
        <S.PageContainer>
          <S.Header>알림</S.Header>
          <C.RenderSkeleton />
        </S.PageContainer>
        <C.FamilyBottomNavigation />
      </S.MainContainer>
    );
  }

  if (error) {
    return (
      <S.MainContainer>
        <S.PageContainer>
          <S.Header>알림</S.Header>
          <S.MainContent>
            <S.SectionTitle>기록 목록</S.SectionTitle>
            <div>{error}</div>
          </S.MainContent>
        </S.PageContainer>
        <C.FamilyBottomNavigation />
      </S.MainContainer>
    );
  }

  return (
    <S.MainContainer>
      <S.PageContainer>
        <S.Header>알림</S.Header>
        <S.MainContent>
          <S.SectionTitle>기록 목록</S.SectionTitle>
          <C.FamilyArchiveCardList
            notifications={notifications}
            onNotificationClick={handleNotificationClick}
          />
        </S.MainContent>
      </S.PageContainer>
      <C.FamilyBottomNavigation />
    </S.MainContainer>
  );
};

export default FamilyArchive;