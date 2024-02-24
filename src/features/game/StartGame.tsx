import { useAppDispatch, useAppSelector } from '../../hooks';
import { IPreparedQuestions } from '../../types';
import Button from '../../ui/Button';
import Progress from '../../ui/Progress';
import Question from './Question';
import Timer from '../timer/Timer';
import { finishGame } from './gameSlice';
import { insertTotalQuestions } from '../score/ScoreSlice';
import Modal from '../../ui/Modal';
import { useState } from 'react';

interface IStartGameProps {
  questions: IPreparedQuestions[];
}

function StartGame({ questions }: IStartGameProps) {
  const { userName } = useAppSelector((state) => state.game);
  const { questionIndex } = useAppSelector((state) => state.score);
  const [openModal, setOpenModal] = useState(false);
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
          <Button
            type="Secondary"
            isSubmit={false}
            onClick={() => {
              setOpenModal(true);
            }}
          >
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
          <Question questions={questions} dispatch={dispatch} />
        </div>
      </main>
      <Modal showModal={openModal} setShowModal={setOpenModal}>
        <div className="flex flex-col items-center justify-center gap-5 text-lg">
          <p>Are you sure you want to submit the quiz ?</p>
          <div className="flex w-full items-center justify-around gap-5">
            <Button type="Secondary" isSubmit={false} onClick={() => setOpenModal(false)}>
              NO
            </Button>
            <Button type="Primary" isSubmit={false} onClick={handleGameSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default StartGame;
