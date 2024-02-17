/* eslint-disable react/jsx-props-no-spreading */

import { Path, UseFormRegister } from 'react-hook-form';
import { IPreferenceFormInput } from '../types';

interface InputProps {
  type: string;
  name: Path<IPreferenceFormInput>;
  placeholder?: string;
  defaultValue?: string;
  min?: string;
  max?: string;
  register?: UseFormRegister<IPreferenceFormInput>;
  children?: React.ReactNode;
  value?: string;
}

function Input({
  type,
  name,
  placeholder,
  defaultValue = '',
  min = '0',
  max = '100',
  register,
  children,
  value,
}: InputProps) {
  if (type === 'text') {
    return (
      <input
        className="w-full rounded-lg border-b border-black-950 bg-black-900 px-2 py-1 text-xl font-medium text-chateau-green-300 shadow-md shadow-black-950 focus:outline-none focus-visible:outline-none"
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register?.(name, {
          required: 'This field is required',
        })}
      />
    );
  }

  if (type === 'number') {
    return (
      <input
        className="w-full rounded-lg border-b border-black-700 bg-black-900 px-2 py-1 text-xl font-medium text-chateau-green-300  shadow-md shadow-black-950 focus:outline-none focus-visible:outline-none"
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register?.(name, {
          required: 'This field is required',
          min,
          max,
        })}
        min={min}
        max={max}
      />
    );
  }

  if (type === 'radio') {
    return (
      <div className="flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg border-b border-black-700 bg-black-900 px-2  py-1 text-xl font-medium text-chateau-green-300 shadow-md shadow-black-950 focus:outline-none focus-visible:outline-none">
        <input type={type} placeholder={placeholder} name={name} id={name} value={value} />
        <label htmlFor="name">{children}</label>
      </div>
    );
  }
}

Input.defaultProps = {
  defaultValue: '',
  min: '0',
  max: '1000',
};

export default Input;
