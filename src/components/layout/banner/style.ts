import { secondaryTextColor } from 'styles/theme/index';
import { primaryTextColor } from 'styles/theme';
import styled from 'styled-components';

export const BannerStyled = styled.div`
  background: url('https://www.freetogame.com/assets/images/paladins.png');
  background-repeat: no-repeat;
  background-color: #1c1e22;
  background-position: top;
  background-size: auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${primaryTextColor};
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
`;

export const H1 = styled.h1`
  margin: 0;
`;
export const BannerContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 64px;
  gap: 15px;
`;

export const BannerText = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 300;
  color: ${secondaryTextColor};
`;

export const BannerAction = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: auto;
`;
