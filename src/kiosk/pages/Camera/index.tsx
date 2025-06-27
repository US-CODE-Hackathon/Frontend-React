import { useEffect, useRef, useState } from 'react';
import * as S from './style';
import * as C from '@/allFiles';
import { motion } from 'framer-motion';

const Camera = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isCaptured, setIsCaptured] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

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
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

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
    window.location.reload()
  };

  const handleSend = () => {
    console.log('보내는 이미지:', capturedImage);
    // TODO: 가족에게 보내는 API or 다음 라우팅 처리
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