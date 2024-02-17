import { createSlice } from '@reduxjs/toolkit';
import { IGameState } from '../../types';

const initialState: IGameState = {
  //  'ready', 'active', 'finished'
  status: 'ready',
  apiUrl: '',
  userName: '',
  questionsData: {
    response_code: 0,
    results: [],
  },
  questionPreferences: {
    userName: '',
    numOfQues: '',
    questionsCategory: '',
    questionDifficulty: '',
    questionType: '',
    questionChoice: '',
  },
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    insertUserName(state, action) {
      state.userName = action.payload;
    },
    insertApiUrl(state, action) {
      state.apiUrl = action.payload;
    },
    insertQuestions(state, action) {
      state.questionsData = { ...action.payload };
    },
    insertQuestionPreferences(state, action) {
      state.questionPreferences = { ...action.payload };
    },
    startGame(state) {
      state.status = 'active';
    },

    finishGame(state) {
      state.status = 'finished';
    },
  },
});

export const {
  insertUserName,
  insertApiUrl,
  insertQuestions,
  insertQuestionPreferences,
  startGame,
  finishGame,
} = gameSlice.actions;

export default gameSlice.reducer;
