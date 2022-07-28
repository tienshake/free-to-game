import {
  textHoverColor,
  backgroundHoverColor,
} from './../../../styles/themeProvider/index';
import { Link } from 'react-router-dom';
import { ItemSelect } from 'components/selectLanguage/style';
import styled from 'styled-components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  primaryColor,
  primaryTextColor,
  width,
  whiteColor,
} from 'styles/theme';
import { breakpoints } from 'styles/breakpoints';
import { Popover, Select, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { backgroundColor, textColor } from 'styles/themeProvider';
import { Search as SearchIcon } from '@mui/icons-material';

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 55px;
  padding: 0 16px;
  color: ${textColor};
  background-color: ${backgroundColor};
  border-bottom: 1px solid rgba(28, 28, 28, 0.6) !important;
  text-shadow: 1px 1px 1px rgb(0 0 0 / 30%);
  @media (max-width: ${breakpoints.tablet}) {
    white-space: nowrap;
    padding: 0 70px;
  }
  @media (max-width: 1200px) {
    padding: 0 50px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 55px;
  width: ${width};
  color: ${textColor};
  background-color: ${backgroundColor};
  @media (max-width: ${breakpoints.tablet}) {
    white-space: nowrap;
    margin: 0 100px !important;
    width: 100%;
  }
  @media (max-width: 1160px) {
    width: 100%;
  }
`;

export const Img = styled.img`
  height: 45px;
  background: ${primaryColor} !important;
`;

export const Left = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0;
  margin: 0;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: ${textHoverColor};
  }
`;

export const LiItem = styled(Li)`
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const IconDropDown = styled(ArrowDropDownIcon)`
  font-size: 50px;
`;
export const Dropdown = styled(Popover)`
  width: 100%;
  padding: 10px 0;
  .MuiPaper-root {
    margin-top: 18px;
    background-color: transparent;
  }
`;

export const Item = styled(ItemSelect)`
  padding: 4px 24px !important;
  font-size: 15px !important;
  height: 30px;
  &:first-child {
    height: 40px;
  }
  &:last-child {
    height: 40px;
  }
`;

export const SelectStyled = styled(Select)`
  border-radius: 5px;
  padding: 3px;
  height: 25px;
  background-color: transparent;
  color: ${whiteColor} !important;
  font-size: 12px !important;
  fieldset {
    border: none;
  }
  .MuiSvgIcon-root {
    display: none;
  }
  .MuiSelect-select {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .MuiList-root {
    padding: 0;
  }
  .MuiPaper-root {
    top: 55px !important;
  }
`;

export const MenuSub = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 16px;
  cursor: pointer;
  &:hover {
    color: ${textHoverColor} !important;
    background-color: ${backgroundHoverColor};
  }
  @media (max-width: ${breakpoints.tablet}) {
    padding: 16px 70px;
  }
`;
type BoxSubState = {
  open: boolean;
};

export const BoxSub = styled(Box)`
  position: absolute;
  background-color: ${backgroundColor} !important;
  top: 55px;
  align-items: center;
  justify-content: flex-start;
  width: 100% !important;
  overflow: hidden;
  height: 0;
  -webkit-transition: height 0.5s;
  transition: height 0.5s;
  ${({ open }: BoxSubState) => (open ? `height: 250px` : '0')};
`;

export const IconMenu = styled(MenuIcon)`
  border: 1px solid ${primaryTextColor};
  border-radius: 5px;
  padding: 3px;
  font-size: 30px !important;
  border-color: ${({ open }: BoxSubState) => (open ? `#FFFFFF` : '')};
`;

export const LinkStyled = styled(Link)`
  color: ${primaryTextColor} !important;
  text-decoration: none;
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SearchIconStyled = styled(SearchIcon)`
  cursor: pointer;
  margin-top: 6px;
  &:hover {
    color: ${textHoverColor};
  }
`;
