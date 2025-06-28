import * as S from './style';
import { useEffect, useState } from 'react';
import { getWeeklyReport } from '../services/getWeeklyReport';

const AINotification = () => {
  const [patternSummary, setPatternSummary] = useState<string>('');

  useEffect(() => {
    const fetchPattern = async () => {
      try {
        const { aiAnalysisResponse } = await getWeeklyReport();
        setPatternSummary(aiAnalysisResponse.pattern_summary);
      } catch (error) {
        console.error('AI 패턴 요약 불러오기 실패:', error);
      }
    };

    fetchPattern();
  }, []);

  return (
    <S.NotificationSection>
      <S.NotificationTitle>AI 패턴 감지</S.NotificationTitle>

      <S.NotificationCard key="pattern" type="warning">
        <S.NotificationIcon bgColor="#e59933" />
        <S.NotificationContent>
          <S.NotificationMessage>{patternSummary}</S.NotificationMessage>
        </S.NotificationContent>
      </S.NotificationCard>
    </S.NotificationSection>
  );
};

export default AINotification;
