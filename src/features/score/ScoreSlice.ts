import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalQuestions: 0,
  correctAnswered: 0,
  questionIndex: 0,
  points: 0,
};

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    insertTotalQuestions(state, action) {
      state.totalQuestions = action.payload;
    },
    increaseIndex(state) {
      state.questionIndex += 1;
    },
    increasePointsAndIndex(state) {
      state.points += 10;
      state.questionIndex += 1;
      state.correctAnswered += 1;
    },
    clearState() {
      return { ...initialState };
    },
  },
});

export const { insertTotalQuestions, increaseIndex, increasePointsAndIndex, clearState } =
  scoreSlice.actions;

export default scoreSlice.reducer;
