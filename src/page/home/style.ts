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
    padding: 0 20px;
  }
  @media (max-width: 1200px) {
    width: auto;
    padding: 0 100px;
  }
  @media (max-width: 980px) {
    padding: 0 110px;
    width: auto;
  }
  @media (max-width: 918px) {
    padding: 0 20px;
    width: auto;
  }
`;

export const ContentGame = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
`;

export const ContentLeft = styled.div`
  flex: 2;
`;

export const ContentRight = styled.div`
  flex: 1;
`;
