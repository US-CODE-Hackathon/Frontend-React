import * as C from '@/allFiles';
import * as S from './style';

import { motion } from 'framer-motion';
import { MainImg } from '@/kiosk/assets';

const KioskSplash = () => (
  <S.SplashContainer>
    <S.SplashWrapper>
      <C.KioskHeader />
      <S.SplashImgWrappe>
        <motion.img
          src={MainImg}
          alt="메인 이미지"
          initial={{ y: 100, scale: 1, opacity: 1 }}
          animate={{ y: 0, scale: 0.8, opacity: 1 }}
          exit={{ y: -100, scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
        >
          <h1>
            <span>박희진</span> 어르신 <br /> 반갑습니다
          </h1>
        </motion.div>
      </S.SplashImgWrappe>
    </S.SplashWrapper>
  </S.SplashContainer>
);

export default KioskSplash;