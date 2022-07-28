import { primaryTextColor, secondaryTextColor } from 'styles/theme/index';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 0;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  .configuration-title {
    font-size: 15px;
    color: ${secondaryTextColor};
  }
  span {
    margin-bottom: 10px;
    color: ${primaryTextColor};
  }
`;
