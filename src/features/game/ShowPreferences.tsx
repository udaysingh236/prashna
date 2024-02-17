import { Navigate, useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import Header from '../../ui/Header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Preferences from './Preferences';
import { getQuestionTypeValue, getQuestionsCategoryValue } from '../../helpers/helpers';
import Loader from '../../ui/Loader';
import List from '../../ui/List';
import Button from '../../ui/Button';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { insertSecondsRemaining } from '../timer/TimerSlice';
import { MINS_PER_QUESTION, SECS_PER_QUESTION } from '../../helpers/constant';
import { insertQuestions, startGame } from './gameSlice';
import toast from 'react-hot-toast';
import getQuestions from '../../services/apiGetQuestions';
import { IQuestionsApiResponse } from '../../types';
import store from '../../store';

function ShowPreferences() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  const { userName, questionPreferences, apiUrl } = useAppSelector((state) => state.game);
  if (!apiUrl) {
    return <Navigate to="/" />;
  }
  const questions: IQuestionsApiResponse = useLoaderData() as IQuestionsApiResponse;

  if (questions && questions.response_code !== 0) {
    toast.error(
      'Sorry..!! I do not have questions for these preferences, Kindly try with others 🙏',
    );
    return <Navigate to="/" />;
  }
  return isLoading ? (
    <Loader />
  ) : (
    <div className="mb-4 w-full">
      <Header />
      <div className=" mt-4  px-4">
        <h2 className=" text-2xl font-semibold text-black-50">Hello, {userName}</h2>
        <p className="text-base font-medium text-black-50">Here are your Choices..</p>
        <Preferences
          choiceName="Number of Questions"
          choiceValue={questionPreferences.numOfQues}
        ></Preferences>
        <Preferences
          choiceName="Questions Category"
          choiceValue={getQuestionsCategoryValue(questionPreferences.questionsCategory)}
        ></Preferences>
        <Preferences
          choiceName="Questions Difficulty"
          choiceValue={questionPreferences.questionDifficulty}
        ></Preferences>
        <Preferences
          choiceName="Questions Type"
          choiceValue={getQuestionTypeValue(questionPreferences.questionType)}
        ></Preferences>
      </div>
      <div className="mt-3  px-4">
        <h2 className="text-center text-lg font-medium text-carrot-orange-200">
          Here are some of things to keep in mind !⚠
        </h2>
      </div>
      <div className="mt-3 px-4">
        <ul className="space-y-1">
          <List>
            Each question carries
            <span className="font-bold text-carrot-orange-500">10 Points.</span>
          </List>
          <List>
            Total time for game is
            <span className="font-bold text-persian-red-500">
              {parseInt(questionPreferences.numOfQues) * MINS_PER_QUESTION} mins.
            </span>
          </List>
          <List>
            Game will be auto submitted after
            <span className="font-bold text-persian-red-500">
              {parseInt(questionPreferences.numOfQues) * MINS_PER_QUESTION} mins.
            </span>
          </List>
          <List>You will get a score card in the end.</List>
          <List>
            You need to score <span className="font-bold text-carrot-orange-300">30%</span>to pass
            the game.
          </List>
          <List>You can download score card, to show off.</List>
          <List>No negative marking for incorrect answers.</List>
          <List>Do not press the back button.</List>
          <List>You cannot go back to previous question.</List>
        </ul>
      </div>
      <div className="mt-6 flex items-center justify-between gap-4 px-4">
        <Button type="Secondary" isSubmit={false} onClick={() => navigate(-1)}>
          <MdArrowBackIosNew /> Back
        </Button>
        <Button
          type="Primary"
          isSubmit={false}
          onClick={() => {
            dispatch(startGame());
            dispatch(
              insertSecondsRemaining(parseInt(questionPreferences.numOfQues) * SECS_PER_QUESTION),
            );
            dispatch(insertQuestions(questions));
            navigate('/startGame');
          }}
        >
          Start <MdArrowForwardIos />
        </Button>
      </div>
    </div>
  );
}

export default ShowPreferences;

export async function loader(): Promise<IQuestionsApiResponse> {
  const { apiUrl } = store.getState().game;
  const questions = await getQuestions(apiUrl);
  return questions;
}
