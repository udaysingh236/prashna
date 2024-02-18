import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import StartGame from './StartGame';
import { prepareQuestions } from '../../helpers/helpers';
import Score from '../score/Score';
import { routeNames } from '../../helpers/constant';

function CreateGame() {
  const { apiUrl, status, questionsData } = useAppSelector((state) => state.game);
  if (!apiUrl || status === 'ready') {
    return <Navigate to={routeNames.home} />;
  }
  const preparedQuestions = prepareQuestions(questionsData.results);
  return status === 'active' ? (
    <StartGame questions={preparedQuestions}></StartGame>
  ) : status === 'finished' ? (
    <Score />
  ) : (
    <Navigate to={routeNames.home} />
  );
}

export default CreateGame;
