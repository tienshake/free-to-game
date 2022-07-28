import {
  cardMenuColor,
  backgroundHoverColor,
} from './../../styles/themeProvider/index';
import { textColor, textHoverColor } from 'styles/themeProvider/index';
import { primaryTextColor } from './../../styles/theme/index';
import styled from 'styled-components';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import AddBoxIcon from '@mui/icons-material/AddBox';

export const Container = styled.div`
  background-color: ${cardMenuColor};
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 5px !important;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  color: ${textColor};

  &:hover {
    color: ${textHoverColor};
    background-color: ${backgroundHoverColor};
  }
  span {
    font-size: 12px;
  }
`;

export const Smile = styled(SentimentSatisfiedAltIcon)`
  color: #62c462;
`;

export const Neutral = styled(SentimentNeutralIcon)`
  color: ${primaryTextColor};
`;

export const SadFace = styled(SentimentVeryDissatisfiedIcon)`
  color: #ee5f5b;
`;

export const AddBox = styled(AddBoxIcon)`
  color: #5bc0de;
`;
