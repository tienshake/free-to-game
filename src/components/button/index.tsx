import React from 'react';
import { ButtonPrimaryStyled, ButtonOutlineStyled } from './style';

type Props = {
  children?: React.ReactNode;
};

const ButtonPrimary = ({ children }: Props) => {
  return <ButtonPrimaryStyled>{children}</ButtonPrimaryStyled>;
};

const ButtonOutline = ({ children }: Props) => {
  return <ButtonOutlineStyled>{children}</ButtonOutlineStyled>;
};

export { ButtonPrimary, ButtonOutline };
