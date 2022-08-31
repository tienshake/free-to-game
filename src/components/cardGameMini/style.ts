import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { cardMenuColor, backgroundHoverColor } from 'styles/themeProvider';
import { buttonColor, secondaryTextColor, whiteColor } from 'styles/theme';
import { ReactComponent as IconWindow } from 'assets/icons/IconWindow.svg';
import { ReactComponent as IconSave } from 'assets/icons/IconSave.svg';

export const CardGameContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${cardMenuColor};
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
  @media (max-width: 450px) {
    padding: 10px;
  }
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  flex: 1;
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
  @media (max-width: 450px) {
    font-size: 8px !important;
  }
`;
export const Img = styled.img`
  height: 90px;
  @media (max-width: 980px), (max-width: 1160px) {
    height: 50px;
  }
`;

export const Des = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5px;
`;

export const ButtonType = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${secondaryTextColor};
  height: 18px;
  width: 80px;
`;

export const TitleDes = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: ${secondaryTextColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 380px;
  @media (max-width: ${breakpoints.desktop}) {
    max-width: 330px;
  }
  @media (max-width: 980px), (max-width: 1160px) {
    max-width: 200px;
  }
  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

export const IconSa = styled(IconSave)`
  width: 18px !important;
  height: 18px !important;
  margin-right: 35px;
  path {
    fill: ${secondaryTextColor} !important;
  }
  @media (max-width: 450px) {
    display: none !important;
  }
`;

export const IconWin = styled(IconWindow)`
  width: 20px;
  margin-right: 35px;
  path {
    fill: ${secondaryTextColor} !important;
  }
  @media (max-width: 450px) {
    display: none !important;
  }
`;

export const CardGameMiniViewGamesStyled = styled.div`
  .cardGameMini {
    flex-direction: column;
    width: 269px;
    height: 280px;
    @media (max-width: ${breakpoints.desktop}) {
      width: 311px;
      height: auto;
    }
    @media (max-width: ${breakpoints.tablet}) {
      width: 176px;
      height: auto;
    }
    @media (max-width: ${breakpoints.mobile}) {
      width: 430px;
      height: auto;
    }
    @media (max-width: 450px) {
      width: 375px;
      height: auto;
    }
    padding: 0;
    img {
      flex: 1;
      height: 152px;
      @media (max-width: 1200px) {
        width: 100%;
        height: 100%;
      }
    }
  }
  .card-game-mini_des-container {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .card-game-mini_des {
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    @media (max-width: 450px) {
      max-width: 100%;
    }
  }
  .card-game-mini_battle {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
    margin-top: 15px;

    svg {
      margin: 0;
      width: 15px;
      height: 15px;
    }
    button {
      height: 13px;
      min-width: 90px;
      color: ${backgroundHoverColor};
    }
  }
  .card-game-mini_name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    h3 {
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20px;
      font-size: 9px !important;
      min-width: 55px;
    }
  }
`;
