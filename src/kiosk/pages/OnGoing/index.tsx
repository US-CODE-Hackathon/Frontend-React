import * as C from '@/allFiles';
import * as S from './style';

import { motion, AnimatePresence } from 'framer-motion';
import { MainImg } from '@/kiosk/assets';
import { useNavigate } from 'react-router-dom';

const OnGoing = () => {
  const navigate = useNavigate();

  const handleGoingCamera = () => {
    navigate('/camera')
  }

  return (
    <S.OnGoingContainer>
      <S.OnGoingWrapper>
        <C.KioskHeader />
        <S.OnGoingImgWrapper>
          <img src={MainImg} alt="메인 이미지" />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  할머니 기분이 좋으시다니, 저도 참 좋네요! 저랑 더 대화하실래요?
                </motion.h1>
              </div>
            </AnimatePresence>
          </motion.div>
          <S.BtnGroup>
            <C.KioskButton>대화를 계속할래요</C.KioskButton>
            <motion.button
              onClick={handleGoingCamera}
              className="replay"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              대화를 그만할래요
            </motion.button>
          </S.BtnGroup>
        </S.OnGoingImgWrapper>
      </S.OnGoingWrapper>
    </S.OnGoingContainer>
  );
};
export default OnGoing;
