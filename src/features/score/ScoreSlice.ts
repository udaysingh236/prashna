import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questionIndex: 0,
  points: 0,
};

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    increaseIndex(state) {
      state.questionIndex += 1;
    },

    increasePointsAndIndex(state) {
      state.points += 10;
      state.questionIndex += 1;
    },
  },
});

export const { increaseIndex, increasePointsAndIndex } = scoreSlice.actions;

export default scoreSlice.reducer;
