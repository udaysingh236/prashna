import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import Loader from '../../ui/Loader';
import StartGame from './StartGame';
import { prepareQuestions } from '../../helpers/helpers';

function CreateGame() {
  const { apiUrl, status, questionsData } = useAppSelector((state) => state.game);
  if (!apiUrl || status === 'ready') {
    return <Navigate to="/" />;
  }
  const preparedQuestions = prepareQuestions(questionsData.results);
  return status === 'active' ? <StartGame questions={preparedQuestions}></StartGame> : <Loader />;
}

export default CreateGame;
