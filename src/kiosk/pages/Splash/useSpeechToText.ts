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
    resetTranscript();
    setRecordingDuration(0);
    prevTranscriptRef.current = '';
    SpeechRecognition.startListening({ language: 'ko-KR', continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    clearAllTimers();
  };

  const resetRecording = () => {
    stopListening();
    resetTranscript();
    setRecordingDuration(0);
    prevTranscriptRef.current = '';
  };

  // listening이 true가 되면 타이머 시작, false면 멈춤
  useEffect(() => {
    if (listening) {
      durationTimerRef.current = setInterval(() => {
        setRecordingDuration((prev) => prev + 1);
      }, 1000);
    } else {
      if (durationTimerRef.current) {
        clearInterval(durationTimerRef.current);
        durationTimerRef.current = null;
      }
    }
    return () => {
      if (durationTimerRef.current) {
        clearInterval(durationTimerRef.current);
        durationTimerRef.current = null;
      }
    };
  }, [listening]);

  // 침묵 감지
  useEffect(() => {
    if (listening && transcript) {
      if (transcript !== prevTranscriptRef.current) {
        prevTranscriptRef.current = transcript;

        if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);

        silenceTimerRef.current = setTimeout(() => {
          stopListening();
        }, 3000);
      }
    }

    return () => {
      if (silenceTimerRef.current) {
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