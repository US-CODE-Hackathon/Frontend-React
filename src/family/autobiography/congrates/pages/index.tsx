import * as S from './style';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from 'react-router-dom';

const AutobiographyPage = () => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate('/family/autobiography/view');
  };

  const handleLaterClick = () => {
    navigate('/family');
  };

  return (
    <S.MainContainer>
      <S.PageContainer>
        <S.Header>특별한 소식</S.Header>

        <S.MainContent>
          <S.MainContentWrapper>
            <S.LottieContainer>
              <DotLottieReact
                src="https://lottie.host/3d369f8a-c5ec-4878-a3f1-8ef911b4a7d7/HD4ix7UsTE.lottie"
                loop
                autoplay
                style={{ width: '100%', height: '100%' }}
              />
            </S.LottieContainer>

            <S.MainCongrates>
              <S.FirstCongrates>축하합니다!</S.FirstCongrates>
              <S.SecondCongrates>어르신의 자서전이 완성되었습니다</S.SecondCongrates>
            </S.MainCongrates>

            <S.CongratesBox>
              <S.CongratesText>
                어르신께서 들려주신 소중한 이야기들이{'\n'}
                모여 아름다운 자서전이 되었습니다.
              </S.CongratesText>
            </S.CongratesBox>

            <S.ViewButton onClick={handleViewClick}>자서전 보기</S.ViewButton>

            <S.LaterButton onClick={handleLaterClick}>나중에 보기</S.LaterButton>
          </S.MainContentWrapper>
        </S.MainContent>
      </S.PageContainer>
    </S.MainContainer>
  );
};

export default AutobiographyPage;
