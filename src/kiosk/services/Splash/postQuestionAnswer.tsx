import { mainApi } from '@/__api__/axiosInstance';

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
