import { IPreferenceFormInput, IPreparedQuestions, IQuestions } from '../types';
import { API_URL, categories } from './constant';

function createApiUrl({
  numOfQues,
  questionsCategory,
  questionDifficulty,
  questionType,
}: IPreferenceFormInput): string {
  let apiUrl = API_URL;
  apiUrl += `?amount=${numOfQues}`;
  if (questionsCategory !== 'any') {
    apiUrl += `&category=${questionsCategory}`;
  }
  if (questionDifficulty !== 'any') {
    apiUrl += `&difficulty=${questionDifficulty}`;
  }
  if (questionType !== 'any') {
    apiUrl += `&type=${questionType}`;
  }

  return apiUrl;
}

export function capitalizeFirstLetter(str: string) {
  const splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  return splitStr.join(' ');
}

export function getQuestionsCategoryValue(category: string): string {
  if (category === 'any') {
    return categories.options[0].uiValue;
  }
  return categories.options[parseInt(category) - 8].uiValue;
}

export function getQuestionTypeValue(type: string): string {
  if (type === 'boolean') {
    return 'True / False';
  } else if (type === 'multiple') {
    return 'Multiple Choice';
  }
  return type;
}

export function prepareQuestions(questions: IQuestions[]): IPreparedQuestions[] {
  const preparedQuestions = questions.map((question) => {
    const formattedQuestion: IPreparedQuestions = {
      question: question.question,
      answer: 0,
      answerChoices: [],
    };
    const answerChoices = [...question.incorrect_answers];
    formattedQuestion.answer =
      Math.floor(Math.random() * (question.incorrect_answers.length + 1)) + 1;
    answerChoices.splice(formattedQuestion.answer - 1, 0, question.correct_answer);
    formattedQuestion.answerChoices = answerChoices;
    return formattedQuestion;
  });

  return preparedQuestions;
}

export function checkResult(points: number, totalPoints: number): boolean {
  return (points / totalPoints) * 100 >= 50 ? true : false;
}

export default createApiUrl;
