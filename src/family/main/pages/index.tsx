import * as S from './style';
import * as C from '@/allFiles';

import { useState } from 'react';
import { GrAnalytics } from 'react-icons/gr';
import { IoFileTrayFull } from 'react-icons/io5';

const FamilyMain = () => {
  const [activeTab, setActiveTab] = useState<'weekly' | 'monthly'>('weekly');
  const [activeNavTab, setActiveNavTab] = useState<'analysis' | 'record'>('analysis');

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

        <S.BottomNavigation>
          <S.NavItem
            active={activeNavTab === 'analysis'}
            onClick={() => setActiveNavTab('analysis')}
          >
            <S.NavIcon>
              <GrAnalytics size={24} />
            </S.NavIcon>
            <S.NavLabel>분석</S.NavLabel>
          </S.NavItem>

          <S.NavItem active={activeNavTab === 'record'} onClick={() => setActiveNavTab('record')}>
            <S.NavIcon>
              <IoFileTrayFull size={24} />
            </S.NavIcon>
            <S.NavLabel>기록</S.NavLabel>
          </S.NavItem>
        </S.BottomNavigation>
      </S.AppContainer>
    </S.MainContainer>
  );
};

export default FamilyMain;
