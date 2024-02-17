import { Path } from 'react-hook-form';

export interface ISelectProps {
  name: Path<IPreferenceFormInput>;
  options: {
    value: string;
    uiValue: string;
  }[];
}

export interface IPreferencesProps {
  choiceName: string;
  choiceValue: string;
}

export interface IList {
  children: React.ReactNode;
}

export interface IPreferenceFormInput {
  userName: string;
  numOfQues: string;
  questionsCategory: string;
  questionDifficulty: string;
  questionType: string;
  questionChoice: string;
}

export interface IQuestions {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface IQuestionsApiResponse {
  response_code: number;
  results: IQuestions[];
}

export interface IGameState {
  status: string;
  apiUrl: string;
  userName: string;
  questionsData: IQuestionsApiResponse;
  questionPreferences: IPreferenceFormInput;
}

export interface IPreparedQuestions {
  question: string;
  answer: number;
  answerChoices: string[];
}
