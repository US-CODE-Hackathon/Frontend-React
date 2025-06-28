import { mainApi } from '@/__api__/axiosInstance';

export const getBiographyQuestion = async (conversationId: number) => {
  const res = await mainApi.get(`/question/biography/${conversationId}`);
  return res.data.response;
};
