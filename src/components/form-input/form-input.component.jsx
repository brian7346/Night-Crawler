// @flow
import React from 'react';

import type { TFormInputProps } from './form-input.types';

import './form-input.styles.scss';

const FormInput = ({
  handleChange,
  label = '',
  name = '',
  required = true,
  type,
  value = '',
}: TFormInputProps): React$Element<'div'> => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      name={name}
      type={type}
      value={value}
    />
    {label ? (
      <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
