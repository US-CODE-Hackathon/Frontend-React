import { mainApi } from '@/api/axiosInstance';

export interface QuestionResponse {
  conversationId: number;
  questionId: number;
  type: 'EMOTION' | 'AUTOBIOGRAPHY';
  question: string;
}

export const getEmotionQuestion = async () => {
  const res = await mainApi.get(`/question/emotion`);
  return res.data.response;
};
