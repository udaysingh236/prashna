import { useAppDispatch, useAppSelector } from '../../hooks';
import { IPreparedQuestions } from '../../types';
import Button from '../../ui/Button';
import Progress from '../../ui/Progress';
import Question from './Question';
import Timer from '../timer/Timer';
import { finishGame } from './gameSlice';
import { insertTotalQuestions } from '../score/ScoreSlice';

interface IStartGameProps {
  questions: IPreparedQuestions[];
}

function StartGame({ questions }: IStartGameProps) {
  const { userName } = useAppSelector((state) => state.game);
  const { questionIndex } = useAppSelector((state) => state.score);
  const dispatch = useAppDispatch();
  dispatch(insertTotalQuestions(questions.length));
  function handleGameSubmit() {
    dispatch(finishGame());
  }
  return (
    <div className="w-full">
      <header className="mt-2 flex items-center justify-center border-b-2 border-chateau-green-950 px-4 py-2 pb-3">
        <div className="text-2xl font-medium text-carrot-orange-400">
          <p>{userName}</p>
        </div>
        <div className="ml-auto">
          <Timer />
        </div>
        <div className="ml-auto">
          <Button type="Secondary" isSubmit={false} onClick={handleGameSubmit}>
            Submit
          </Button>
        </div>
      </header>
      <main>
        <div className="mt-2 px-4">
          <Progress max={questions.length} val={questionIndex + 1}>
            <span>{questionIndex + 1}</span>
          </Progress>
        </div>
        <div>
          <Question questions={questions} />
        </div>
      </main>
    </div>
  );
}

export default StartGame;
