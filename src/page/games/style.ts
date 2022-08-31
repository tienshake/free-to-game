import styled from 'styled-components';
import { width } from 'styles/theme';
import { textColor } from 'styles/themeProvider';
import { breakpoints } from 'styles/breakpoints';
import { SearchIconStyled } from 'components/layout/header/style';
import { Container as ContainerStyle } from 'styles/components/style';
import { TextField as TextFieldStyle } from '@mui/material';

export const Container = styled(ContainerStyle)`
  width: ${width};
  min-height: 100vh;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  @media (max-width: ${breakpoints.desktop}) {
    width: auto;
    padding: 0 20px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: auto;
    padding: 0 110px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: auto;
    padding: 0 20px;
  }
`;

export const ContentGame = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
`;

export const TextField = styled(TextFieldStyle)`
  height: 46px;
  width: 425px;
  color: ${textColor} !important;
  input {
    color: ${textColor} !important;

    padding: 15px;
    ::placeholder {
      color: ${textColor} !important;
      font-size: 20px;
    }
    caret-color: ${textColor};
  }
  fieldset {
    border: none;
  }
`;

export const SearchStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  .games_search-icon-title {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    @media (max-width: ${breakpoints.desktop}) {
      width: auto;
      padding: 0 20px;
    }
    @media (max-width: ${breakpoints.tablet}) {
      align-items: center;
      justify-content: center;
    }
  }
`;

export const SearchIcon = styled(SearchIconStyled)`
  font-size: 30px !important;
  margin: 0;
`;
