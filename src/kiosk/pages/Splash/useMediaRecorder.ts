import { useRef, useState } from 'react';

const useMediaRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [duration, setDuration] = useState(0);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const silenceRef = useRef<NodeJS.Timeout | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);

  const detectSilence = () => {
    if (!analyserRef.current || !dataArrayRef.current) return;
    analyserRef.current.getByteTimeDomainData(dataArrayRef.current);

    const isSilent = dataArrayRef.current.every(value => value >= 127 - 5 && value <= 127 + 5);

    if (isSilent) {
      if (!silenceRef.current) {
        silenceRef.current = setTimeout(() => {
          console.log('🛑 3초 무음 지속 → 녹음 종료');
          stopRecording();
        }, 3000);
      }
    } else {
      if (silenceRef.current) {
        clearTimeout(silenceRef.current);
        silenceRef.current = null;
      }
    }

    requestAnimationFrame(detectSilence);
  };

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaStreamRef.current = stream;

    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    chunksRef.current = [];

    mediaRecorder.ondataavailable = e => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
      setRecordedBlob(blob);
    };

    mediaRecorder.start();
    setRecording(true);
    setDuration(0);

    timerRef.current = setInterval(() => setDuration(d => d + 1), 1000);

    // 무음 감지 시작
    audioContextRef.current = new AudioContext();
    sourceRef.current = audioContextRef.current.createMediaStreamSource(stream);
    analyserRef.current = audioContextRef.current.createAnalyser();
    analyserRef.current.fftSize = 2048;

    const bufferLength = analyserRef.current.fftSize;
    dataArrayRef.current = new Uint8Array(bufferLength);

    sourceRef.current.connect(analyserRef.current);
    detectSilence();
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    mediaStreamRef.current?.getTracks().forEach(track => track.stop());
    setRecording(false);

    if (timerRef.current) clearInterval(timerRef.current);
    if (silenceRef.current) clearTimeout(silenceRef.current);

    audioContextRef.current?.close();
  };

  const resetRecording = () => {
    setRecordedBlob(null);
    setDuration(0);
  };

  return {
    recording,
    recordedBlob,
    duration,
    startRecording,
    stopRecording,
    resetRecording,
  };
};

export default useMediaRecorder;
