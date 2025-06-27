import * as C from '@/allFiles'
import * as S from '../style'

import { FaCheck } from "react-icons/fa6";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ForwardingSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <S.ForwardingContainer>
      <S.ForwardingWrapper>
        <C.KioskHeader />
        <S.ForwardingImgWrapper>
          <h1>가족에게 마음을 보냈어요!</h1>
          <S.ForwardingSuccess>
            <FaCheck />
          </S.ForwardingSuccess>
          <h1 style={{ color: '#525252' }}>
            안부를 잘 전해드렸어요! <br /> 가족분들이 기뻐하실 거예요.
          </h1>
          <h3 style={{ color: '#525252' }}>내일도 안부를 전해주세요!</h3>
        </S.ForwardingImgWrapper>
      </S.ForwardingWrapper>
    </S.ForwardingContainer>
  );
};

export default ForwardingSuccess;