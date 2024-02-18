import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IPreparedQuestions } from '../../types';
import Options from './Options';
import Button from '../../ui/Button';
import { MdArrowForwardIos } from 'react-icons/md';
import { increaseIndex, increasePointsAndIndex } from '../score/ScoreSlice';
import { finishGame } from './gameSlice';
import toast from 'react-hot-toast';
import parse from 'html-react-parser';

interface IQuestionProps {
  questions: IPreparedQuestions[];
}
function Question({ questions }: IQuestionProps) {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [selected, setSelected] = useState(0);
  const dispatch = useAppDispatch();
  const { questionIndex } = useAppSelector((state) => state.score);
  const question = questions[questionIndex];

  return (
    <div className="mt-4 space-y-8 px-4 text-center text-xl font-semibold text-carrot-orange-400">
      <h2>{parse(question.question)}</h2>
      <Options
        question={question}
        setIsCorrectAnswer={setIsCorrectAnswer}
        selected={selected}
        setSelected={setSelected}
      ></Options>
      {questions.length === questionIndex + 1 ? (
        <Button
          type="Primary"
          isSubmit={false}
          onClick={() => {
            if (selected === 0) {
              toast.error(`Please select on answer. 🧐`);
              return;
            }
            setSelected(0);
            if (isCorrectAnswer) {
              dispatch(increasePointsAndIndex());
            } else {
              dispatch(increaseIndex());
            }
            dispatch(finishGame());
          }}
        >
          <span>Submit</span>
        </Button>
      ) : (
        <Button
          type="Primary"
          isSubmit={false}
          onClick={() => {
            if (selected === 0) {
              toast.error(`Please select on answer. 🧐`);
              return;
            }
            setSelected(0);
            if (isCorrectAnswer) {
              dispatch(increasePointsAndIndex());
            } else {
              dispatch(increaseIndex());
            }
          }}
        >
          <span>Next</span> <MdArrowForwardIos />
        </Button>
      )}
    </div>
  );
}

export default Question;
