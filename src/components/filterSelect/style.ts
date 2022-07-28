import { buttonColor } from 'styles/theme/index';
import { textColor, backgroundMenuSubColor } from 'styles/themeProvider';
import styled from 'styled-components';
import { secondaryTextColor } from 'styles/theme';
import { ReactComponent as CheckBox } from 'assets/icons/IconCheckSquare.svg';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  color: ${secondaryTextColor};
  box-sizing: border-box;
  width: auto;
  @media (max-width: 1200px) {
    justify-content: center;
    text-align: center;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Select = styled.select`
  color: ${textColor};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Option = styled.option`
  background-color: ${backgroundMenuSubColor};
  color: ${textColor};
`;

export const IconCheckSquare = styled(CheckBox)`
  color: ${buttonColor};
  width: 13px !important;
`;
