import styled from 'styled-components';
import { textColor } from 'styles/themeProvider';
import { primaryTextColor } from 'styles/theme';
import { Link as LinkStyle } from 'react-router-dom';

export const Container = styled.div`
  color: ${primaryTextColor};
`;

export const H3 = styled.h3`
  color: ${primaryTextColor};
  font-size: 20px;
  margin: 0;
  font-weight: 500;
  @media (max-width: 450px) {
    font-size: 15px;
  }
`;

export const Link = styled(LinkStyle)`
  text-decoration: none;
  color: ${textColor};
  &:hover {
    color: ${textColor};
  }
`;
