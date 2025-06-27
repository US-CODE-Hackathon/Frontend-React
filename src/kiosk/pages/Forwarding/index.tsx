import * as C from '@/allFiles'
import * as S from './style'

import { FaPaperPlane } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Forwarding = () => {
  const [progress, setProgress] = useState(0); 
  const navigate = useNavigate()
  // 임의로 움직임 추가
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 5;
        if (next >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            navigate('/forwarding/success'); 
          }, 500);
          // 완료 후 처리
        }
        return next;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <S.ForwardingContainer>
      <S.ForwardingWrapper>
        <C.KioskHeader />
        <S.ForwardingImgWrapper>
          <h1>가족에게 보내는 중입니다..</h1>
          <S.ForwardingPlane>
            <FaPaperPlane />
          </S.ForwardingPlane>
          <S.ProgressBarWrapper>
            <C.ProgressBar progress={progress} />
          </S.ProgressBarWrapper>
        </S.ForwardingImgWrapper>
      </S.ForwardingWrapper>
    </S.ForwardingContainer>
  );
}
export default Forwarding