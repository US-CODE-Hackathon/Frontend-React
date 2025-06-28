import * as S from './style';
import * as T from '../../archive/components/type';

import React from 'react';

interface DiaryDetailPageProps {
  archiveData: T.ArchiveData;
  onBack?: () => void;
  onPhotoClick?: () => void;
}

const ArchiveDetailData: React.FC<DiaryDetailPageProps> = ({
  archiveData,
  onBack,
  onPhotoClick,
}) => {
  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      // 기본 뒤로가기 동작
      window.history.back();
    }
  };

  const handlePhotoClick = () => {
    if (onPhotoClick) {
      onPhotoClick();
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onClick={handleBackClick}>← 뒤로</S.BackButton>
        <S.DateText>{archiveData.date}</S.DateText>
      </S.Header>

      <S.MainContent>
        <S.NotificationInfo>
          <S.NotificationQuote>{archiveData.title}</S.NotificationQuote>
          <S.NotificationDetails>{archiveData.time}</S.NotificationDetails>
        </S.NotificationInfo>
        {archiveData.photoUrl && (
          <>
            <S.PhotoContent>
              <S.PhotoTitle>오늘의 사진</S.PhotoTitle>
              <S.PhotoImage src={archiveData.photoUrl} onClick={handlePhotoClick} />
              <S.PhotoHint>탭하여 원본 크기로 보기</S.PhotoHint>

              <S.MoodBadge color={archiveData.thumbnailColor ?? '#cccccc'}>
                <S.MoodBadgeText>
                  {archiveData.emotion=== '긍정'
                    ? '긍정적'
                    : archiveData.emotion === '보통'
                      ? '보통'
                      : '부정적'}
                </S.MoodBadgeText>
              </S.MoodBadge>
            </S.PhotoContent>
          </>
        )}
        <S.AISummary>
          <S.AISummaryTitle>AI의 요약</S.AISummaryTitle>
          <S.AISummaryText>"{archiveData.summary}"</S.AISummaryText>
        </S.AISummary>
      </S.MainContent>
    </S.Container>
  );
};

export default ArchiveDetailData;
