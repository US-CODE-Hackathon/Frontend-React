import * as C from '@/allFiles';
import * as S from './style';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, type JSX } from 'react';
import { MdKeyboardVoice } from 'react-icons/md';
import { MainImg } from '@/kiosk/assets';
import useMediaRecorder from './useMediaRecorder';
import { useNavigate } from 'react-router-dom';
import { TextToSpeech } from '@/kiosk/common/services/textToSpeech';
import { speechToText } from '@/kiosk/common/services/speechToText';
import { audioConverter } from '@/kiosk/common/utils/audioConverter';

const KioskSplash: React.FC = () => {
  const { recording, recordedBlob, duration, startRecording, stopRecording, resetRecording } =
    useMediaRecorder();

  const [text, setText] = useState<'initial' | 'updated'>('initial');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [finalTranscript, setFinalTranscript] = useState<string>('');
  const hasProcessedRef = useRef(false);
  const [liveTranscript, setLiveTranscript] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    startRecording(); // 페이지 접속 시 자동 시작
  }, []);

  // 초기 음성 안내
  useEffect(() => {
    if (text === 'initial') {
      TextToSpeech('박희진 어르신, 반갑습니다');
    }
  }, [text]);

  // 초기 텍스트 변경 타이머
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

  // 실시간 음성 인식 시작
  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) return;

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'ko-KR';

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setLiveTranscript(transcript);
    };

    if (recording) recognition.start();
    else recognition.stop();

    return () => recognition.stop();
  }, [recording]);

  // 자동 녹음 시작
  useEffect(() => {
    if (!recording && recordedBlob && !showModal && !hasProcessedRef.current) {
      console.log('📦 녹음 완료 → 서버로 전송 준비');
      hasProcessedRef.current = true;

      audioConverter(recordedBlob)
        .then(resultText => {
          setFinalTranscript(liveTranscript);
          setShowModal(true);
        })
        .catch(err => {
          console.error('❌ STT 실패:', err);
          setFinalTranscript('인식 실패');
          setShowModal(true);
        });
    }
  }, [recording, recordedBlob, showModal]);

  const handleRetry = (): void => {
    setLiveTranscript('');
    console.log('handleRetry 호출됨 | 모달 닫고 녹음 재시작');
    setShowModal(false);
    hasProcessedRef.current = false;
    resetRecording();
    setFinalTranscript('');
    setTimeout(() => {
      console.log('0.3초 후 녹음 재시작');
      startRecording();
    }, 300);
  };

  const handleConfirm = (): void => {
    if (!recordedBlob) return;

    console.log('handleConfirm 호출됨 | 확인된 음성:', liveTranscript);
    setShowModal(false);
    setLiveTranscript('');

    audioConverter(recordedBlob)
      .then(wavBlob => {
        const wavFile = new File([wavBlob], 'voice.wav', { type: 'audio/wav' });
        return speechToText(wavFile); // /stt 전송
      })
      .then(resultText => {
        setFinalTranscript(resultText);
        navigate('/ongoing', { state: { userResponse: resultText } });
      })
      .catch(err => {
        console.error('❌ STT 실패:', err);
        setFinalTranscript('인식 실패');
      });
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
          <span>박희진 어르신, 반갑습니다 </span>
        </>
      );
    }

    return (
      <>
        <span>희진 할머니,</span> <br /> 오늘 기분은 어떠세요? <br />
        <S.VoiceWrapper>
          <S.GuideText>
            👇 이 버튼을 누르면 <strong>녹음이 끝나요!</strong>
          </S.GuideText>
          <button
            onClick={() => {
              console.log('🎙 버튼 클릭 → 녹음 종료 시도');
              stopRecording();
            }}
            disabled={!recording}
          >
            <MdKeyboardVoice />
          </button>
        </S.VoiceWrapper>
        {recording && (
          <S.RecordWrapper>
            목소리가 녹음되고 있어요 <br />
            {/* <span>{formatDuration(duration)}</span> */}
            <br />
            {recording && (
              <div
                style={{
                  marginTop: '10px',
                  fontSize: '0.9em',
                  color: '#333',
                  background: '#f0f0f0',
                  padding: '8px',
                  borderRadius: '8px',
                  maxWidth: '300px',
                  wordBreak: 'keep-all',
                }}
              >
                실시간: "{liveTranscript}"
              </div>
            )}
          </S.RecordWrapper>
        )}
        {showModal && (
          <S.ModalOverlay>
            <S.ModalContent>
              <h2>말씀하신 내용이 맞나요?</h2>
              <h3>인식된 내용을 확인해주세요</h3>
              <div className="transcript">{finalTranscript || '인식된 내용이 없습니다.'}</div>
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
              <p>
                💡 내용이 틀렸다면 <span>"다시 말하기"</span>를 눌러주세요
              </p>
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
