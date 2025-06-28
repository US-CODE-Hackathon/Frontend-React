import { mainApi } from '@/__api__/axiosInstance';

export const TextToSpeech = async (text: string, onEnd?: () => void) => {
  try {
    const formData = new FormData();
    formData.append('text', text); // form-data의 'text' key로 텍스트 추가

    const response = await mainApi.post('/tts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      responseType: 'blob',
    });

    const audioBlob = new Blob([response.data], { type: 'audio/mpeg' });
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);

    audio.onended = () => {
      if (onEnd) onEnd();
    };

    await audio.play();
  } catch (error) {
    console.error('TTS 재생 중 오류:', error);
  }
};
