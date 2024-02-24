import { IQuestionsApiResponse } from '../types';

async function getQuestions(apiUrl: string): Promise<IQuestionsApiResponse> {
  if (apiUrl.length === 0) {
    throw new Error('API URL is blank');
  }
  const res = await fetch(apiUrl);
  const result = await res.json();
  return result;
}

export default getQuestions;
