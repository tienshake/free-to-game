import { breakpoints } from 'styles/breakpoints';
import { black_1, tertiaryTextColor } from 'styles/theme/index';
import { primaryTextColor, width, whiteColor } from 'styles/theme';
import styled from 'styled-components';

export const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${whiteColor};
  background-color: ${black_1};
`;

export const FooterContent = styled.div`
  display: flex;
  width: auto !important;
  flex: 1;
  margin: auto;
  gap: 30px;
  padding: 50px 0;
  @media (min-width: 980px) {
    width: auto;
  }
  @media (max-width: 1160px) {
    width: auto;
  }
  @media (max-width: ${breakpoints.desktop}) {
    width: auto;
  }
`;

export const ListItem = styled.div`
  list-style: none;
  width: 250px;
  @media (max-width: 1160px) {
    width: auto;
  }
`;

export const Img = styled.img`
  height: 100px;
`;

export const Item = styled.li`
  font-size: 15px;
  margin-bottom: 16px;
  &:hover {
    cursor: pointer;
    color: ${primaryTextColor};
  }
`;

export const FooterEnd = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${tertiaryTextColor};
`;

export const FooterEndContent = styled.div`
  width: ${width};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const FooterEndText = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 300;
  color: ${primaryTextColor};
`;

export const FooterEndUnstyled = styled.div`
  display: flex;
  gap: 30px;
  .MuiSvgIcon-root {
    font-size: 20px;
  }
`;
