// @flow
import React from 'react';

import './custom-button.styles.scss';

import type { TCustomButtonProps } from './custom-button.types';

const CustomButton = ({
  children,
  isGoogleSignIn,
  type,
  inverted,
  onClick,
}: TCustomButtonProps): React$Element<'button'> => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default CustomButton;
