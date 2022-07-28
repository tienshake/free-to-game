import { buttonColor } from './../../styles/theme/index';
import styled from 'styled-components';

export const TopTittle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 8px;
  @media (max-width: 1200px) {
    justify-content: center;
    text-align: center;
  }
`;

export const BottomTittle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 16px;
  color: ${buttonColor};
  @media (max-width: 1200px) {
    justify-content: center;
    text-align: center;
  }
`;

export const H3 = styled.h3`
  font-size: 24px;
  margin: 0;
`;
