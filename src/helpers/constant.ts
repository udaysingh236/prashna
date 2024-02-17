import { ISelectProps } from '../types';
export const SECS_PER_QUESTION = 120;
export const MINS_PER_QUESTION = SECS_PER_QUESTION / 60;
export const API_URL = 'https://opentdb.com/api.php';
export const categories: ISelectProps = {
  name: 'questionsCategory',
  options: [
    {
      value: 'any',
      uiValue: 'Any Category',
    },
    {
      value: '9',
      uiValue: 'General Knowledge',
    },
    {
      value: '10',
      uiValue: 'Entertainment: Books',
    },
    {
      value: '11',
      uiValue: 'Entertainment: Film',
    },
    {
      value: '12',
      uiValue: 'Entertainment: Music',
    },
    {
      value: '13',
      uiValue: 'Entertainment: Musicals & Theatres',
    },
    {
      value: '14',
      uiValue: 'Entertainment: Television',
    },
    {
      value: '15',
      uiValue: 'Entertainment: Video Games',
    },
    {
      value: '16',
      uiValue: 'Entertainment: Board Games',
    },
    {
      value: '17',
      uiValue: 'Science & Nature',
    },
    {
      value: '18',
      uiValue: 'Science: Computers',
    },
    {
      value: '19',
      uiValue: 'Science: Mathematics',
    },
    {
      value: '20',
      uiValue: 'Mythology',
    },
    {
      value: '21',
      uiValue: 'Sports',
    },
    {
      value: '22',
      uiValue: 'Geography',
    },
    {
      value: '23',
      uiValue: 'History',
    },
    {
      value: '24',
      uiValue: 'Politics',
    },
    {
      value: '25',
      uiValue: 'Art',
    },
    {
      value: '26',
      uiValue: 'Celebrities',
    },
    {
      value: '27',
      uiValue: 'Animals',
    },
    {
      value: '28',
      uiValue: 'Vehicles',
    },
    {
      value: '29',
      uiValue: 'Entertainment: Comics',
    },
    {
      value: '30',
      uiValue: 'Science: Gadgets',
    },
    {
      value: '31',
      uiValue: 'Entertainment: Japanese Anime & Manga',
    },
    {
      value: '32',
      uiValue: 'Entertainment: Cartoon & Animations',
    },
  ],
};

export const questionDifficulty: ISelectProps = {
  name: 'questionDifficulty',
  options: [
    {
      value: 'any',
      uiValue: 'Any Difficulty',
    },
    {
      value: 'easy',
      uiValue: 'Easy',
    },
    {
      value: 'medium',
      uiValue: 'Medium',
    },
    {
      value: 'hard',
      uiValue: 'Hard',
    },
  ],
};

export const questionType: ISelectProps = {
  name: 'questionType',
  options: [
    {
      value: 'any',
      uiValue: 'Any',
    },
    {
      value: 'multiple',
      uiValue: 'Multiple Choice',
    },
    {
      value: 'boolean',
      uiValue: 'True / False',
    },
  ],
};

export const routeNames = {
  showPreferences: '/showPreferences',
};
