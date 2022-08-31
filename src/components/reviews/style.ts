import { textColor } from 'styles/themeProvider/index';
import styled from 'styled-components';
import Person from '@mui/icons-material/Person';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
export const ReviewsStyle = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  @media (max-width: 450px) {
    overflow: hidden;
  }
  .detail-reviews-left {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: ${textColor};
    font-size: 16px;
    font-weight: 400;
    .detail-review-pop {
      display: flex;
      justify-content: space-between;
    }
  }
  .detail-reviews-right {
    padding-right: 100px;
    @media (max-width: 450px) {
      padding: 0;
    }
  }
`;
export const PersonIcon = styled(Person)``;

export const ChatIcon = styled(ChatBubbleOutlineIcon)``;
