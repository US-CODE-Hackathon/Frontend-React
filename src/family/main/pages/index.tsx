import * as S from './style';
import * as C from '@/allFiles';

import { useState } from 'react';

const FamilyMain = () => {
  const [activeTab, setActiveTab] = useState<'weekly' | 'monthly'>('weekly');

  const notifications = [{ id: '1', message: '3일 연속 피로감 호소 • 1시간 전' }];

  const biographyProgress = { current: 10, total: 10, isComplete: true };

  return (
    <S.MainContainer>
      <S.AppContainer>
        <C.KioskHeader />

        <S.MainContent>
          <S.SectionTitle>정서 변화 그래프</S.SectionTitle>

          <S.TabContainer>
            <S.Tab active={activeTab === 'weekly'} onClick={() => setActiveTab('weekly')}>
              주간
            </S.Tab>
            <S.Tab active={activeTab === 'monthly'} onClick={() => setActiveTab('monthly')}>
              월간
            </S.Tab>
          </S.TabContainer>

          <C.StatusSummary />
          <C.EmotionChart />
          <C.AINotification notifications={notifications} />
          <C.BiographySection progress={biographyProgress} />
        </S.MainContent>

        <C.FamilyBottomNavigation />
      </S.AppContainer>
    </S.MainContainer>
  );
};

export default FamilyMain;
