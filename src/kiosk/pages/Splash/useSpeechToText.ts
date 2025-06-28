import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useEffect, useRef, useState } from 'react';

interface SpeechToTextReturn {
  transcript: string;
  listening: boolean;
  recordingDuration: number;
  startListening: () => void;
  stopListening: () => void;
  resetRecording: () => void;
}

const useSpeechToText = (): SpeechToTextReturn => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const silenceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const durationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [recordingDuration, setRecordingDuration] = useState<number>(0);
  const prevTranscriptRef = useRef<string>('');

  const clearAllTimers = () => {
    console.log('clearAllTimers 호출됨');
    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = null;
    }
    if (durationTimerRef.current) {
      clearInterval(durationTimerRef.current);
      durationTimerRef.current = null;
    }
  };

  const startListening = () => {
    console.log('startListening 호출됨 | 초기화: transcript, recordingDuration, prevTranscript');
    resetTranscript();
    setRecordingDuration(0);
    prevTranscriptRef.current = '';
    SpeechRecognition.startListening({ language: 'ko-KR', continuous: true });
  };

  const stopListening = () => {
    console.log('stopListening 호출됨 | 현재 transcript:', transcript);
    SpeechRecognition.stopListening();
    clearAllTimers();
  };

  const resetRecording = () => {
    console.log('resetRecording 호출됨');
    stopListening();
    resetTranscript();
    setRecordingDuration(0);
    prevTranscriptRef.current = '';
  };

  // listening이 true가 되면 타이머 시작, false면 멈춤
  useEffect(() => {
    console.log('listening 상태 변경 | listening:', listening, '| duration:', recordingDuration);
    if (listening) {
      console.log('녹음 타이머 시작');
      durationTimerRef.current = setInterval(() => {
        setRecordingDuration((prev) => {
          console.log('녹음 시간 업데이트:', prev + 1);
          return prev + 1;
        });
      }, 1000);
    } else {
      if (durationTimerRef.current) {
        console.log('녹음 타이머 정지');
        clearInterval(durationTimerRef.current);
        durationTimerRef.current = null;
      }
    }
    return () => {
      if (durationTimerRef.current) {
        console.log('cleanup: 녹음 타이머 제거');
        clearInterval(durationTimerRef.current);
        durationTimerRef.current = null;
      }
    };
  }, [listening]);

  // 침묵 감지
  useEffect(() => {
    if (listening && transcript) {
      if (transcript !== prevTranscriptRef.current) {
        console.log('transcript 변경됨 | 새로운 transcript:', transcript);
        prevTranscriptRef.current = transcript;

        if (silenceTimerRef.current) {
          console.log('침묵 타이머 초기화');
          clearTimeout(silenceTimerRef.current);
        }

        console.log('침묵 타이머 시작 | 3초 후 녹음 정지');
        silenceTimerRef.current = setTimeout(() => {
          console.log('침묵 감지: 녹음 정지');
          stopListening();
        }, 3000);
      }
    }

    return () => {
      if (silenceTimerRef.current) {
        console.log('cleanup: 침묵 타이머 제거');
        clearTimeout(silenceTimerRef.current);
        silenceTimerRef.current = null;
      }
    };
  }, [transcript, listening]);

  return {
    transcript,
    listening,
    recordingDuration,
    startListening,
    stopListening,
    resetRecording,
  };
};

export default useSpeechToText;