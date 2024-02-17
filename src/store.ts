import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './features/game/gameSlice';
import scoreReducer from './features/score/ScoreSlice';
import timerReducer from './features/timer/TimerSlice';
const store = configureStore({
  reducer: {
    game: gameReducer,
    score: scoreReducer,
    timer: timerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
