import * as C from '@/allFiles';
import * as S from './style';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mainApi } from '@/api/axiosInstance';
import type { ArchiveData } from '@/family/archive/components/type';

// API 응답 타입 정의
interface Emotion {
  emotionalReportId: number;
  imageUrl: string;
  emotion: string;
  aiSummary: string;
  date: string;
  first: boolean;
  title?: string; // 추가된 필드
}

interface ApiResponse {
  success: boolean;
  response: Emotion;
  error: null | string;
}

const ArchiveDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [archiveData, setArchiveData] = useState<ArchiveData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArchiveData = async () => {
      try {
        setLoading(true);
        console.log('Request URL:', mainApi.defaults.baseURL + `/emotions/${id}`);
        const response = await mainApi.get<ApiResponse>(`/emotions/${id}`);
        console.log('API Response:', response.data);
        if (response.data.success && response.data.response) {
          const emotionData = response.data.response;
          // date를 한국어 형식으로 변환 (예: "2025-06-27" -> "2025년 6월 27일")
          const [year, month, day] = emotionData.date.split('-');
          const formattedDate = `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`;

          const formattedData: ArchiveData = {
            id: emotionData.emotionalReportId.toString(),
            date: formattedDate,
            message: `"${emotionData.aiSummary}"`,
            title: emotionData.title, // 추가된 필드
            emotion: emotionData.emotion as '긍정' | '보통' | '부정',
            thumbnailColor:
              emotionData.emotion === '긍정'
                ? 'rgba(51, 204, 102, 0.6)'
                : emotionData.emotion === '보통'
                ? 'rgba(255, 172, 95, 0.6)'
                : 'rgba(255, 92, 92, 0.6)',
            hasRead: !emotionData.first,
            summary: emotionData.aiSummary,
            photoUrl: emotionData.imageUrl || undefined,
          };
          console.log('Formatted Data:', formattedData);
          setArchiveData(formattedData);
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

    if (id) {
      fetchArchiveData();
    }
  }, [id]);

  const handleBackNavigation = () => {
    navigate('/family/archive');
  };

  const handlePhotoClick = () => {
    console.log('사진 클릭됨 - 원본 크기로 보기');
  };

  if (loading) {
    return (
      <S.MainContainer>
        <div>로딩 중...</div>
      </S.MainContainer>
    );
  }

  if (error || !archiveData) {
    return (
      <S.MainContainer>
        <div>{error || '해당 알림을 찾을 수 없습니다.'}</div>
      </S.MainContainer>
    );
  }

  return (
    <S.MainContainer>
      <C.FamilyArchiveDetailData
        archiveData={archiveData}
        onBack={handleBackNavigation}
        onPhotoClick={handlePhotoClick}
      />
    </S.MainContainer>
  );
};

export default ArchiveDetail;