import { textColor } from 'styles/themeProvider';
import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  height: 70vh;
  color: ${textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 50px;
`;

export const A = styled.a`
  color: blue !important;
  font-size: 20px;
  &:hover {
    text-decoration: underline !important;
  }
`;
