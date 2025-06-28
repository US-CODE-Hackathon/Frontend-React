import * as S from './style';
import { useEffect, useState } from 'react';
import { HeartSvg } from '@/family/main/assets';
import { getWeeklyReport } from '../services/getWeeklyReport';

const StatusSummary = () => {
  const [averagePositive, setAveragePositive] = useState<number | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const { moodData } = await getWeeklyReport();

        // 평균 긍정도 계산
        const total = moodData.reduce((acc, cur) => acc + cur.positive, 0);
        const average = total / moodData.length;
        setAveragePositive(Math.round(average)); // 소수점 반올림
      } catch (error) {
        console.error('감정 요약 데이터 불러오기 실패:', error);
      }
    };

    fetchStatus();
  }, []);

  return (
    <S.StatusCard>
      <S.StatusCardWrapper>
        <img src={HeartSvg} alt="하트 아이콘" />
        <S.StatusLabel>이번 주 기분</S.StatusLabel>
      </S.StatusCardWrapper>
      <S.StatusValue>{averagePositive !== null ? `${averagePositive}% 긍정` : '-'}</S.StatusValue>
    </S.StatusCard>
  );
};

export default StatusSummary;
