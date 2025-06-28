import * as C from '@/allFiles';
import * as S from './style';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, type JSX } from 'react';
import { MdKeyboardVoice } from 'react-icons/md';
import { MainImg } from '@/kiosk/assets';
import useSpeechToText from './useSpeechToText';
import { useNavigate } from 'react-router-dom';

const KioskSplash: React.FC = () => {
  const {
    transcript,
    listening,
    recordingDuration,
    startListening,
    stopListening,
    resetRecording,
  } = useSpeechToText();

  const [text, setText] = useState<'initial' | 'updated'>('initial');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [finalTranscript, setFinalTranscript] = useState<string>('');

  const navigate = useNavigate();

  useEffect(() => {
    console.log('초기 텍스트 타이머 설정 | text:', text);
    const timer = setTimeout(() => {
      console.log('텍스트 상태 변경: initial -> updated');
      setText('updated');
    }, 4000);

    return () => {
      console.log('cleanup: 초기 텍스트 타이머 제거');
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (text === 'updated') {
      console.log('text가 updated로 변경됨 | listening:', listening, '| showModal:', showModal);
      const autoStartTimer = setTimeout(() => {
        if (!listening && !showModal) {
          console.log('자동 녹음 시작');
          startListening();
        } else {
          console.log('자동 녹음 시작 조건 미충족 | listening:', listening, '| showModal:', showModal);
        }
      }, 1000);

      return () => {
        console.log('cleanup: 자동 녹음 타이머 제거');
        clearTimeout(autoStartTimer);
      };
    }
  }, [text, listening, showModal]);

  // 모달 표시 조건: 녹음 종료 + 텍스트 존재 + 모달 안 켜짐
  useEffect(() => {
    console.log('모달 상태 점검 | listening:', listening, '| transcript:', transcript, '| showModal:', showModal);
    if (!listening && transcript && !showModal) {
      console.log('모달 표시 조건 충족 | finalTranscript 설정:', transcript);
      setFinalTranscript(transcript);
      setShowModal(true);
      stopListening(); // 명시적 정지
    }
  }, [listening, transcript, showModal]);

  const handleRetry = (): void => {
    console.log('handleRetry 호출됨 | 모달 닫고 녹음 재시작');
    setShowModal(false);
    resetRecording();
    setFinalTranscript('');
    setTimeout(() => {
      console.log('0.5초 후 녹음 재시작');
      startListening();
    }, 500);
  };

  const handleConfirm = (): void => {
    console.log('handleConfirm 호출됨 | 확인된 음성:', finalTranscript);
    setShowModal(false);
    navigate('/ongoing');
  };

  const formatDuration = (duration: number): string => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const renderTextContent = (): JSX.Element => {
    if (text === 'initial') {
      return (
        <>
          <span>박희진</span> 어르신 <br /> 반갑습니다
        </>
      );
    }
    return (
      <>
        <span>희진 할머니,</span> <br /> 오늘 기분은 어떠세요? <br />
        <S.VoiceWrapper>
          <button onClick={() => {
            console.log('음성 녹음 버튼 클릭');
            startListening();
          }}>
            <MdKeyboardVoice />
          </button>
        </S.VoiceWrapper>
        {listening && (
          <S.RecordWrapper>
            목소리가 녹음되고 있어요 <br /> <span>{formatDuration(recordingDuration)}</span>
          </S.RecordWrapper>
        )}
        {showModal && (
          <S.ModalOverlay>
            <S.ModalContent>
              <h2>말씀하신 내용이 맞나요?</h2>
              <h3>녹음된 내용을 확인해주세요</h3>
              <div className="transcript">{finalTranscript || '녹음된 내용이 없습니다.'}</div>
              <S.BtnGroup>
                <C.KioskButton onClick={handleConfirm}>맞아요</C.KioskButton>
                <motion.button
                  onClick={handleRetry}
                  className="replay"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  다시 말하기
                </motion.button>
              </S.BtnGroup>
              <p>💡 내용이 틀렸다면 <span>"다시 말하기"</span>를 눌러주세요</p>
            </S.ModalContent>
          </S.ModalOverlay>
        )}
      </>
    );
  };

  return (
    <S.SplashContainer>
      <S.SplashWrapper>
        <C.KioskHeader />
        <S.SplashImgWrapper>
          <motion.img
            src={MainImg}
            alt="메인 이미지"
            initial={{ y: 100, scale: 1, opacity: 1 }}
            animate={{ y: 0, scale: 0.8, opacity: 1 }}
            exit={{ y: -100, scale: 0.8, opacity: 0 }} // 수정된 부분
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {renderTextContent()}
              </motion.h1>
            </AnimatePresence>
          </motion.div>
        </S.SplashImgWrapper>
      </S.SplashWrapper>
    </S.SplashContainer>
  );
};

export default KioskSplash;