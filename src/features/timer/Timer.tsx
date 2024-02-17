import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateSecondsRemaining } from '../timer/TimerSlice';
import toast from 'react-hot-toast';
import { finishGame } from '../game/gameSlice';

function Timer() {
  const { secondsRemaining } = useAppSelector((state) => state.timer);
  const dispatch = useAppDispatch();
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch(updateSecondsRemaining());
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch],
  );
  if (mins === 1 && seconds === 0) {
    toast.error(`Hurry up..!! Only 1 min is left ⌛`);
  }
  if ((mins === 0 && seconds === 0) || mins < 0) {
    dispatch(finishGame());
  }
  return (
    <div className="rounded-xl  bg-chateau-green-300 px-2 py-1 text-2xl font-semibold  text-carrot-orange-950">
      <span>
        {mins < 10 && '0'}
        {mins}:{seconds < 10 && '0'}
        {seconds}
      </span>
    </div>
  );
}

export default Timer;
