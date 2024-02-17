import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../ui/Header';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import { categories, questionDifficulty, questionType, routeNames } from '../../helpers/constant';
import Button from '../../ui/Button';
import { IPreferenceFormInput } from '../../types';
import createApiUrl, { capitalizeFirstLetter } from '../../helpers/helpers';
import { insertApiUrl, insertQuestionPreferences, insertUserName } from './gameSlice';
import { useAppSelector } from '../../hooks';

function SelectPreferences() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questionPreferences } = useAppSelector((state) => state.game);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IPreferenceFormInput>();
  function onSubmit(data: IPreferenceFormInput) {
    const apiUrl = createApiUrl(data);
    data.userName = capitalizeFirstLetter(data.userName);
    dispatch(insertApiUrl(apiUrl));
    dispatch(insertUserName(data.userName));
    dispatch(insertQuestionPreferences(data));
    navigate(routeNames.showPreferences);
  }

  return (
    <div className="mb-6">
      <Header />
      <div className="mb-10 mt-6 px-4">
        <h2 className="text-center text-xl text-black-50">
          Please fill in the details and select your preferences to start the game. ☠
        </h2>
      </div>
      <div className=" px-4">
        <form className="flex  flex-col gap-6 " onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              type="text"
              name="userName"
              placeholder="Name to go with..."
              defaultValue={questionPreferences?.userName}
              register={register}
            />
            {errors?.userName?.message && (
              <span className="ml-1 mt-1 inline-block text-sm font-light text-black-50">
                {errors?.userName?.message}
              </span>
            )}
          </div>
          <div>
            <Input
              type="number"
              name="numOfQues"
              placeholder="Number of questions you want..."
              min="10"
              max="50"
              defaultValue={questionPreferences?.numOfQues}
              register={register}
            />
            <span className="p-1 text-left text-sm text-black-50">Min: 10 Max: 50</span>
            {errors?.numOfQues?.message && (
              <span className="ml-1 mt-1 block text-sm font-light text-black-50">
                {errors?.numOfQues?.message}
              </span>
            )}
          </div>
          <div>
            <Select
              name={categories.name}
              options={categories.options}
              labelName="Select Category"
              register={register}
              defaultValue={questionPreferences?.questionsCategory}
            />
          </div>
          <div>
            <Select
              name={questionDifficulty.name}
              options={questionDifficulty.options}
              labelName="Select Difficulty"
              register={register}
              defaultValue={questionPreferences?.questionDifficulty}
            />
          </div>
          <div>
            <Select
              name={questionType.name}
              options={questionType.options}
              labelName="Select Type"
              register={register}
              defaultValue={questionPreferences?.questionType}
            />
          </div>
          <div className="mt-6">
            <Button type="Primary" isSubmit>
              Let&apos;s Go
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SelectPreferences;
