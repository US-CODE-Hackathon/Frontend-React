import * as C from '@/allFiles';
import * as S from './style';

import { FaPaperPlane } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mainApi } from '@/__api__/axiosInstance';
import { TextToSpeech } from '@/kiosk/common/services/textToSpeech';
import { useConversationStore } from '@/kiosk/stores/useConversationStore';

const Forwarding = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const { conversationId } = useConversationStore();

  useEffect(() => {
    const sendImage = async () => {
      try {
        const imageData = sessionStorage.getItem('capturedImage'); // 세션에서 꺼냄
        if (!imageData) throw new Error('전송할 이미지가 없습니다.');

        const base64String = imageData.split(',')[1];
        const byteCharacters = atob(base64String);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'image/png' });

        const formData = new FormData();
        formData.append('conversationId', conversationId !== null ? String(conversationId) : '');
        formData.append('file', blob, 'photo.png');

        await mainApi.post('/photo', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        TextToSpeech('사진이 성공적으로 전송되었습니다.');
      } catch (err) {
        console.error('전송 실패:', err);
        TextToSpeech('사진 전송에 실패했습니다.');
        alert('전송 실패');
      }
    };

    sendImage();

    // 프로그레스바 애니메이션
    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + 5;
        if (next >= 100) {
          clearInterval(timer);
          TextToSpeech('가족에게 마음을 전달했어요, 내일도 안부를 전해주세요!');
          setTimeout(() => navigate('/forwarding/success'), 500);
        }
        return next;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [navigate]);

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
};

export default Forwarding;
