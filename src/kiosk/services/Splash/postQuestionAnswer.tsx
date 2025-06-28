import { mainApi } from '@/api/axiosInstance';

interface PostAnswerRequest {
  conversationId: number;
  questionId: number;
  type: 'EMOTION' | 'AUTOBIOGRAPHY';
  question: string;
  content: string;
}

export const postQuestionAnswer = async (payload: PostAnswerRequest) => {
  return await mainApi.post('/question', payload);
};
