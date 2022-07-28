import {
  subColor,
  borderColor,
  secondaryTextColor,
  black_1,
} from 'styles/theme';
import { textColor, CommunityItemColor } from 'styles/themeProvider/index';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  .comment-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${textColor};
    border-bottom: 0.5px solid ${borderColor};
    padding-bottom: 5px;
  }
  .comment-title {
    font-weight: 500;
    font-size: 17px;
  }
  .comment-face-state {
    display: flex;
    gap: 20px;
    span {
      display: flex;
      gap: 10px;
    }
  }
`;

export const CommentInput = styled.div`
  display: flex;
  margin: 20px;
  margin-right: 0;
  textarea {
    background-color: ${CommunityItemColor} !important;
  }
  button {
    background-color: transparent !important;
    border: 0.5px solid ${borderColor};
    border-radius: 5px;
    width: 53px;
    &:hover {
      background-color: ${subColor} !important;
      transition: all 0.4s ease;
      -webkit-transition: all 0.4s ease;
    }
  }
  img {
    height: 80px;
  }
  svg {
    width: 20px;
    path {
      fill: ${secondaryTextColor};
    }
  }
`;

export const Textarea = styled.textarea`
  flex: 1;
  min-height: 80px !important;
  margin-left: 10px;
  border-radius: 5px;
  padding: 15px;
  border: none;
  position: relative;
  background-color: ${black_1};
  caret-color: ${secondaryTextColor};
  color: ${textColor};
  &::placeholder {
    color: ${secondaryTextColor};
    font-size: 15px;
  }
`;
