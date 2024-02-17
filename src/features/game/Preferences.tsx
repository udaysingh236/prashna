import { capitalizeFirstLetter } from '../../helpers/helpers';
import { IPreferencesProps } from '../../types';

function Preferences({ choiceName, choiceValue }: IPreferencesProps) {
  return (
    <div className="mt-4 flex w-full flex-wrap items-start justify-start gap-2 rounded-lg border-b border-black-700 bg-black-900 px-2 py-1 text-xl font-medium text-chateau-green-300  shadow-md shadow-black-950">
      <span>{choiceName}:</span>
      <p className="font-bold">{capitalizeFirstLetter(choiceValue)}</p>
    </div>
  );
}

export default Preferences;
