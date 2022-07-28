import { CommunityItemColor } from 'styles/themeProvider/index';
import { secondaryTextColor } from 'styles/theme/index';
import styled from 'styled-components';

export const CommunityStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const CommunityItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 26px;
  background-color: ${CommunityItemColor};
  min-height: 200px;
  width: 50%;
  border-radius: 5px;
`;

export const CommunityDes = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  line-height: 16pt;
  word-spacing: 5px;
`;

export const CommunityAuth = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  width: 100%;
  img {
    height: 32px;
  }
  p {
    margin: 0;
    color: ${secondaryTextColor};
  }
`;

export const CommunityText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
`;
