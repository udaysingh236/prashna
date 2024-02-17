import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  secondsRemaining: 0,
};
const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    insertSecondsRemaining(state, action) {
      state.secondsRemaining = action.payload;
    },
    updateSecondsRemaining(state) {
      state.secondsRemaining -= 1;
    },
  },
});

export const { insertSecondsRemaining, updateSecondsRemaining } = timerSlice.actions;

export default timerSlice.reducer;
