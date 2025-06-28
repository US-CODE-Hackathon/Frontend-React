import { mainApi } from '@/__api__/axiosInstance';

export const speechToText = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await mainApi.post('/stt', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.text; // 서버에서 { text: '...' } 형식으로 온다고 가정
  } catch (error) {
    console.error('STT 변환 실패:', error);
    return '변환 실패';
  }
};
