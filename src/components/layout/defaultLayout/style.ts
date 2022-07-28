import { backgroundColor } from 'styles/themeProvider';
import styled from 'styled-components';
import { width } from 'styles/theme';

type StyleProps = {
  backGroundImg?: boolean;
};

export const DefaultLayoutContainer = styled.div`
  background-color: ${backgroundColor};
`;

export const Content = styled.div`
  /* width: ${width}; */
  margin: auto;
  ${(props: StyleProps) => props.backGroundImg && `width: 100%;`}
`;
