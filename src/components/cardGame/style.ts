import { breakpoints } from 'styles/breakpoints/index';
import { cardMenuColor } from 'styles/themeProvider/index';
import { buttonColor, whiteColor } from 'styles/theme';
import { ItemProps } from 'components/cardGame';
import styled from 'styled-components';

export const CardGameContainer = styled.div`
  width: ${({ size }: ItemProps) => (size === 'minium' ? '244px' : '365px')};
  position: relative;
  background-color: ${cardMenuColor};
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
  @media (max-width: ${breakpoints.desktop}) {
    width: ${({ size }: ItemProps) => (size === 'minium' ? '100%' : '296px')};
  }
  @media (max-width: 1200px) {
    width: ${({ size }: ItemProps) => (size === 'minium' ? '100%' : '296px')};
  }
  @media (max-width: 1138px) {
    width: ${({ size }: ItemProps) => (size === 'minium' ? '100%' : '290px')};
  }
  @media (max-width: 980px) {
    width: ${({ size }: ItemProps) => (size === 'minium' ? '100%' : '216px')};
  }
`;
export const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  h3 {
    width: 80%;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

export const Button = styled.button`
  background-color: ${buttonColor};
  border: none;
  border-radius: 5px;
  padding: 8px;
  color: ${whiteColor};
  font-size: 11px !important;
  font-weight: 700;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  height: ${({ size }: ItemProps) => (size === 'minium' ? '140px' : '')};
  @media (max-width: ${breakpoints.desktop}) {
    width: ${({ size }: ItemProps) => (size === 'minium' ? '100%' : '')};
  }
`;

export const ButtonAlone = styled(Button)`
  position: absolute;
  right: 15px;
  bottom: 15px;
`;
