import { IQuestionsApiResponse } from '../types';

async function getQuestions(apiUrl: string): Promise<IQuestionsApiResponse> {
  const res = await fetch(apiUrl);
  const result = await res.json();
  return result;
}

export default getQuestions;
