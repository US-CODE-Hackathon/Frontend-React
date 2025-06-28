import * as C from '@/allFiles';
import * as S from '../style';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';

const ForwardingSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 7000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <S.ForwardingContainer>
      <S.ForwardingWrapper>
        <C.KioskHeader />
        <S.ForwardingImgWrapper>
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            z-index={9999}
            style={{ fontWeight: 'bold', fontSize: '28px' }}
          >
            가족에게 마음을 전달했어요 💌
          </motion.h1>

          <DotLottieReact
            src="https://lottie.host/446d2455-992c-40eb-b716-ef1db6a5233a/fHs18zEOqM.lottie"
            loop
            autoplay
            style={{ width: '400px', height: 'auto' }}
          />
          <motion.h1
            style={{ color: '#525252', fontSize: '28px' }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
          >
            안부를 잘 전해드렸어요, <br /> 가족분들이 기뻐하실 거예요.
          </motion.h1>

          <motion.h3
            style={{ color: '#525252', fontSize: '28px' }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
          >
            내일도 안부를 전해주세요!
          </motion.h3>
        </S.ForwardingImgWrapper>
      </S.ForwardingWrapper>
    </S.ForwardingContainer>
  );
};

export default ForwardingSuccess;
