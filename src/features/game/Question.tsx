import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { IPreparedQuestions } from '../../types';
import Options from './Options';
import Button from '../../ui/Button';
import { MdArrowForwardIos } from 'react-icons/md';
import { increaseIndex, increasePointsAndIndex } from '../score/ScoreSlice';
import { finishGame } from './gameSlice';
import toast from 'react-hot-toast';
import parse from 'html-react-parser';
import type { AppDispatch } from '../../store';
import Modal from '../../ui/Modal';

interface IQuestionProps {
  questions: IPreparedQuestions[];
  dispatch: AppDispatch;
}
function Question({ questions, dispatch }: IQuestionProps) {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [selected, setSelected] = useState(0);
  const { questionIndex } = useAppSelector((state) => state.score);
  const question = questions[questionIndex];
  const [openModal, setOpenModal] = useState(false);

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
              toast.error(`Please select one answer. 🧐`);
              return;
            }
            setSelected(0);
            setOpenModal(true);
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
              toast.error(`Please select one answer. 🧐`);
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
      <Modal showModal={openModal} setShowModal={setOpenModal}>
        <div className="flex flex-col items-center justify-center gap-5 text-lg">
          <p>Are you sure you want to submit the quiz ?</p>
          <div className="flex w-full items-center justify-around gap-5">
            <Button type="Secondary" isSubmit={false} onClick={() => setOpenModal(false)}>
              NO
            </Button>
            <Button
              type="Primary"
              isSubmit={false}
              onClick={() => {
                if (isCorrectAnswer) {
                  dispatch(increasePointsAndIndex());
                } else {
                  dispatch(increaseIndex());
                }
                dispatch(finishGame());
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Question;
