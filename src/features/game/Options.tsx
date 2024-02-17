import { IPreparedQuestions } from '../../types';
import Button from '../../ui/Button';
import parse from 'html-react-parser';
interface IOptionsProp {
  question: IPreparedQuestions;
  setIsCorrectAnswer: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  selected: number;
}

function Options({ question, setIsCorrectAnswer, setSelected, selected }: IOptionsProp) {
  return (
    <div className="mt-6  flex flex-col items-center justify-center gap-3 px-2">
      {question.answerChoices.map((choice, index) => (
        <Button
          type="choice"
          key={choice}
          isSubmit={false}
          isActive={selected === index + 1}
          onClick={() => {
            setSelected(index + 1);
            if (index + 1 === question.answer) {
              setIsCorrectAnswer(true);
            } else {
              setIsCorrectAnswer(false);
            }
          }}
        >
          <span className="rounded-full bg-chateau-green-300  px-2 text-chateau-green-800">
            {index + 1}
          </span>
          <span>{parse(choice)}</span>
        </Button>
      ))}
    </div>
  );
}

export default Options;
