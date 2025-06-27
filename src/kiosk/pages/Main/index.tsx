import * as C from '@/allFiles';
import * as S from './style';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MainImg } from '@/kiosk/assets';

const Main = () => {
  const [showSplash, setShowSplash] = useState(false);

  const handleStart = () => {
    setShowSplash(true);
  };

  return (
    <AnimatePresence mode="wait">
      {!showSplash ? (
        <S.MainContainer>
          <S.MainWrapper>
            <C.KioskHeader />
            <S.MainImgWrappe>
              <img src={MainImg} alt="메인 이미지" />
              <div>
                <C.KioskButton onClick={handleStart}>시작하기</C.KioskButton>
              </div>
            </S.MainImgWrappe>
          </S.MainWrapper>
        </S.MainContainer>
      ) : (
        <C.KioskSplash />
      )}
    </AnimatePresence>
  );
};

export default Main;