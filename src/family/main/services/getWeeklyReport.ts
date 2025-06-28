import { mainApi } from '@/api/axiosInstance';

export interface MoodData {
  day: string;
  positive: number;
}

export interface AiAnalysisResponse {
  positive_ratio: number;
  pattern_summary: string;
}

export interface WeeklyReportResponse {
  moodData: MoodData[];
  aiAnalysisResponse: AiAnalysisResponse;
}

export const getWeeklyReport = async (): Promise<WeeklyReportResponse> => {
  const res = await mainApi.get('/reports/weekly');
  return res.data.response;
};
