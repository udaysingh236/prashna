/* eslint-disable react/jsx-props-no-spreading */
import { UseFormRegister } from 'react-hook-form';
import Option from './Option';
import { IPreferenceFormInput, ISelectProps } from '../types';

interface SelectLabelProps extends ISelectProps {
  labelName: string;
  defaultValue?: string;
  register: UseFormRegister<IPreferenceFormInput>;
}

function Select({ name, options, labelName, register, defaultValue }: SelectLabelProps) {
  return (
    <>
      <label htmlFor={name} className="p-1 text-lg text-black-100">
        {labelName}
      </label>
      <select
        id={name}
        {...register(name)}
        defaultValue={defaultValue ? defaultValue : options[0].value}
        className="dark:text-white block w-full rounded-lg bg-black-900 px-2 py-1 text-xl text-black-200 shadow-md shadow-black-950 focus:border-carrot-orange-500 focus:ring-carrot-orange-500 dark:border-black-600 dark:bg-black-700 dark:placeholder-black-400 dark:focus:border-black-500 dark:focus:ring-black-500"
      >
        {options.map((option) => (
          <Option value={option.value} uiValue={option.uiValue} key={option.value} />
        ))}
      </select>
    </>
  );
}

export default Select;
