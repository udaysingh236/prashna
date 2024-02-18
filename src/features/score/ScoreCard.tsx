import { POINTS_PER_QUESTION } from '../../helpers/constant';
import {
  capitalizeFirstLetter,
  checkResult,
  getQuestionsCategoryValue,
} from '../../helpers/helpers';
import { useAppSelector } from '../../hooks';

function ScoreCard() {
  const {
    game: {
      userName,
      questionPreferences: { questionsCategory, questionDifficulty },
    },
    score: { totalQuestions, correctAnswered, points, questionIndex },
  } = useAppSelector((state) => state);
  const isPassed = checkResult(points, totalQuestions * POINTS_PER_QUESTION);
  return (
    <div className="w-full py-2 pb-8" id="score-card">
      <div className="mt-2 border-b-2 border-black-950 px-1 py-2">
        <div className="text-center">
          <div className="text-3xl  font-bold text-chateau-green-500">
            <span>Prashna</span>
          </div>
        </div>
        <p className="text-center text-base text-chateau-green-500">Do you think you know ?</p>
      </div>
      <div className="mt-4 space-y-4 px-4">
        <div className="flex flex-wrap items-center justify-between   text-xl text-carrot-orange-400">
          <p>Name: {userName}</p>
          <p className="">Date: {new Date().toLocaleDateString()}</p>
        </div>
        <div className="flex flex-wrap items-center justify-between  text-xl text-carrot-orange-400">
          <p>Category: {getQuestionsCategoryValue(questionsCategory)}</p>
          <p>Level: {capitalizeFirstLetter(questionDifficulty)}</p>
        </div>
        <div className="flex flex-wrap items-center justify-between  text-xl text-carrot-orange-400">
          <p>Total Questions: {totalQuestions}</p>
          <p>Total Attempted: {questionIndex}</p>
        </div>
        <div className="flex flex-wrap items-center justify-between text-xl text-carrot-orange-400">
          <p>Total Correct: {correctAnswered}</p>
          <p>Total incorrect: {questionIndex - correctAnswered}</p>
        </div>
        <div className="flex flex-wrap items-center justify-between text-xl text-carrot-orange-400">
          <p>Total Marks: {totalQuestions * POINTS_PER_QUESTION}</p>
          <p>Marks Obtained: {points}</p>
        </div>
        <div className="carrot-orange mt-2 flex flex-wrap items-center justify-between  text-xl text-carrot-orange-400">
          <p className="flex items-center  gap-2">
            <span>Result:</span>
            {isPassed ? (
              <span className="border-1 rounded-full bg-chateau-green-400 px-2 py-1 font-semibold  text-chateau-green-800">
                Pass
              </span>
            ) : (
              <span className="border-1 rounded-full bg-persian-red-400 px-2 py-1 font-semibold text-persian-red-800 ">
                Fail
              </span>
            )}
          </p>
          <p>Remarks: {isPassed ? 'Good Job 😎' : 'Better luck next time 😔'}</p>
        </div>
      </div>
    </div>
  );
}

export default ScoreCard;
