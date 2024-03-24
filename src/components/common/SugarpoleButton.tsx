import React from 'react';
import { SugarpoleButtonInterface } from './types';

const SugarpoleButton = ({ children, ...rest }: SugarpoleButtonInterface) => {
  return <button {...rest}>{children}</button>;
};

export default SugarpoleButton;
