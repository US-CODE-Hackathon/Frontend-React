import * as S from './style';

import { HeartSvg } from '@/family/main/assets';

const StatusSummary = () => (
  <S.StatusCard>
    <S.StatusCardWrapper>
      <img src={HeartSvg} alt="하트 아이콘" />
      <S.StatusLabel>이번 주 기분</S.StatusLabel>
    </S.StatusCardWrapper>
    <S.StatusValue>88% 긍정</S.StatusValue>
    <S.StatusDescription>전체적으로 좋은 상태를 유지하고 계세요 😊</S.StatusDescription>
  </S.StatusCard>
);

export default StatusSummary;
