import { FC } from 'react';

import { CheckboxProps } from './types';

const Checkbox: FC<CheckboxProps> = ({
  label,
  register,
  errors,
  options,
  onKeyDown,
}) => {
  return (
    <div className="mb-4">
      <label className="flex items-center text-white">
        <input
          type="checkbox"
          className={`mr-2 cursor-pointer focus:outline-none peer`}
          {...register('checkbox', options)}
          onKeyDown={onKeyDown}
        />
        {errors.checkbox ? (
          <p className="text-red-500">{errors.checkbox.message}</p>
        ) : (
          <p className={`peer-focus:text-blue-500`}>{label}</p>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
