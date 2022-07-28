import { secondaryTextColor, buttonColor, whiteColor } from 'styles/theme';
import styled from 'styled-components';

export const ButtonPrimaryStyled = styled.button`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  border: none;
  height: 48px;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(${buttonColor}),
    color-stop(60%, ${buttonColor}),
    to(#49acff)
  );
  &:hover {
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#358de6),
      color-stop(40%, #358de6),
      to(#2174b9)
    );
  }
`;

export const ButtonOutlineStyled = styled.button`
  border: 1px solid ${secondaryTextColor};
  height: 48px;
  color: ${secondaryTextColor};
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    border-color: ${whiteColor};
    color: ${whiteColor};
  }
`;
