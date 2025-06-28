import * as S from './style';
import * as C from '@/allFiles';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FamilyMain = () => {
  const navigate = useNavigate();
  const [hasShownToast, setHasShownToast] = useState(false);
  const biographyProgress = { current: 10, total: 10, isComplete: true };

  useEffect(() => {
    if (biographyProgress.current === biographyProgress.total && !hasShownToast) {
      toast(
        <C.FamilyBioGraphyToast
          total={biographyProgress.total}
          onClick={() => {
            navigate('/family/congrates');
            toast.dismiss();
          }}
        />,
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          style: {
            backgroundColor: '#2ee0c5',
            borderRadius: '12px',
          },
        },
      );
      setHasShownToast(true);
    }
  }, [biographyProgress, hasShownToast, navigate]);

  const handleBiographySectionClick = () => {
    navigate(`/family/congrates`);
  };

  const [activeTab, setActiveTab] = useState<'weekly' | 'monthly'>('weekly');

  const notifications = [{ id: '1', message: '3일 연속 피로감 호소 • 1시간 전' }];

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
            <S.Tab
              active={activeTab === 'monthly'}
              onClick={() => alert('구독 후 이용해주세요 (_ _)')}
            >
              월간
            </S.Tab>
          </S.TabContainer>

          <C.StatusSummary />
          <C.EmotionChart />
          <C.AINotification notifications={notifications} />
          <C.BiographySection progress={biographyProgress} onClick={handleBiographySectionClick} />
        </S.MainContent>

        <C.FamilyBottomNavigation />
      </S.AppContainer>
      <ToastContainer />
    </S.MainContainer>
  );
};

export default FamilyMain;
