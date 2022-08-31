import styled from 'styled-components';
import { width } from 'styles/theme';
import { breakpoints } from 'styles/breakpoints';
import { Container as ContainerStyle } from 'styles/components/style';

export const Container = styled(ContainerStyle)`
  width: ${width};
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  @media (max-width: ${breakpoints.desktop}) {
    width: auto;
    padding: 0 50px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 50px;
    width: auto;
  }
  @media (max-width: 450px) {
    padding: 0 20px;
    width: auto;
  }
`;

export const ContentGame = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const ContentLeft = styled.div`
  flex: 2;
`;

export const ContentRight = styled.div`
  flex: 1;
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
