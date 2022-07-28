import { whiteColor } from './../../styles/theme/index';
import styled from 'styled-components';
import {
  width,
  secondaryTextColor,
  primaryTextColor,
  borderColor,
} from 'styles/theme';
import {
  textHoverColor,
  cardMenuColor,
  backgroundHoverColor,
  textColor,
  gradientColor,
} from 'styles/themeProvider';
import { Breadcrumbs as BreadcrumbsStyle } from '@mui/material';
import HeaderTitle from 'components/headerTitle';

export const DetailContainer = styled.div`
  display: flex;
  width: ${width};
  margin: 20px auto 50px auto;
  color: ${textColor};
  .detail-right {
    flex: 2;
    color: ${textColor};
    z-index: 1;
  }
  .detail-left {
    flex: 1;
    img {
      width: 356px;
    }
  }
  .detail-card {
    z-index: 1;
    position: fixed;
    top: 80px;
  }
  .detail-title-end {
    font-size: 12px;
    color: ${secondaryTextColor};
  }
`;

export const Breadcrumbs = styled(BreadcrumbsStyle)`
  .MuiTypography-root,
  nav,
  li,
  a {
    font-size: 12px;
    color: ${textColor} !important;
    cursor: pointer;
  }
  .MuiTypography-root {
    cursor: auto;
    color: ${secondaryTextColor};
  }
`;

export const ActionStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 20px 0;
  .detail-free {
    height: 48px;
    padding: 10px;
    background-color: ${cardMenuColor};
    border-radius: 5px;
    cursor: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: ${backgroundHoverColor};
      color: ${textHoverColor};
    }
  }
  button {
    flex: 1;
    font-weight: 700;
  }
`;

export const H4 = styled.h4`
  color: ${primaryTextColor};
  border-bottom: 0.5px solid ${borderColor};
  padding-bottom: 10px;
`;

type TextType = {
  showMoreText: boolean;
};

export const Text = styled.p`
  color: ${primaryTextColor};
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 6;
  ${({ showMoreText }: TextType) =>
    showMoreText
      ? ` 
  -webkit-line-clamp: inherit;
  `
      : ''};

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const BackGroundImgStyled = styled.div`
  height: 38rem !important;
  background-size: cover !important;
  background-position: top !important;
  background-repeat: no-repeat !important;
  position: absolute;
  left: 0;
  right: 0;
  top: 0rem;
  z-index: 1;
  opacity: 0.5;
  .detail-gradient {
    height: 101% !important;
    background: ${gradientColor};
  }
`;

export const HeaderTitleStyled = styled(HeaderTitle)``;

export const InformationTitle = styled.div`
  border-bottom: 0.5px solid ${borderColor} !important;
  padding-bottom: 10px;
`;

export const Screenshots = styled.div`
  display: flex;
  margin: 15px 0;
  img {
    width: 168px;
  }
`;

export const ReadMore = styled.p`
  color: ${whiteColor};
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
