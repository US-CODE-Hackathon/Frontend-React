import { useEffect, useRef, useState } from 'react';
import * as S from './style';
import * as C from '@/allFiles';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TextToSpeech } from '@/kiosk/common/services/textToSpeech';
import { mainApi } from '@/__api__/axiosInstance';

const Camera = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isCaptured, setIsCaptured] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const navigate = useNavigate();
  // 카메라 접근
  useEffect(() => {
    const startCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (error) {
        console.error('카메라 접근 실패:', error);
      }
    };

    startCamera();

    return () => {
      // 컴포넌트 언마운트 시 카메라 정지
      stream?.getTracks().forEach(track => track.stop());
    };
  }, []);

  useEffect(() => {
    TextToSpeech('가족에게 안부 사진을 보내보세요');
  }, []);

  useEffect(() => {
    if (isCaptured && capturedImage) {
      TextToSpeech('이 사진을 가족에게 보낼까요?');
    }
  }, [isCaptured, capturedImage]);

  const handleCapture = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL('image/png');
      setCapturedImage(imageData);
      setIsCaptured(true);
    }
  };

  const handleRetry = () => {
    setCapturedImage(null);
    setIsCaptured(false);
    window.location.reload();
  };

  const handleSend = async () => {
    if (!capturedImage) {
      console.error('전송할 이미지가 없습니다.');
      alert('전송할 이미지가 없습니다.');
      return;
    }

    try {
      // Base64 문자열에서 'data:image/png;base64,' 접두사 제거
      const base64String = capturedImage.split(',')[1];
      // Base64를 Blob으로 변환
      const byteCharacters = atob(base64String);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/png' });

      // FormData로 파일 전송
      const formData = new FormData();
      formData.append('conversationId', '1'); // conversationId 추가
      formData.append('file', blob, 'photo.png'); // file 필드에 Blob 추가

      const response = await mainApi.post('/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // axios는 FormData 사용 시 자동 설정되지만 명시
        },
      });

      console.log('이미지 업로드 성공:', response.data);
      TextToSpeech('사진이 성공적으로 전송되었습니다.');
      navigate('/forwarding');
    } catch (error: any) {
      console.error('이미지 업로드 실패:', error);
      TextToSpeech('사진 전송에 실패했습니다. 다시 시도해주세요.');
      alert(`이미지 업로드에 실패했습니다: ${error.message}`);
    }
  };

  return (
    <S.CameraContainer>
      <S.CameraWrapper>
        <C.KioskHeader />
        <S.CameraImgWrapper>
          <div>
            {isCaptured && capturedImage ? (
              <>
                <h1>이 사진을 가족에게 보낼까요?</h1>
                <img src={capturedImage} alt="캡처된 이미지" />
              </>
            ) : (
              <>
                <h1>가족에게 안부 사진을 보내보세요</h1>
                <video ref={videoRef} autoPlay playsInline />
              </>
            )}
            <canvas ref={canvasRef} style={{ display: 'none' }} />
          </div>
          <S.BtnGroup>
            {!isCaptured ? (
              <C.KioskButton onClick={handleCapture}>사진 찍기</C.KioskButton>
            ) : (
              <>
                <C.KioskButton onClick={handleSend}>보내기</C.KioskButton>
                <motion.button
                  className="replay"
                  onClick={handleRetry}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  다시 찍기
                </motion.button>
              </>
            )}
          </S.BtnGroup>
        </S.CameraImgWrapper>
      </S.CameraWrapper>
    </S.CameraContainer>
  );
};

export default Camera;
