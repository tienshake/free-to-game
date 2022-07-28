import {
  BannerStyled,
  H1,
  BannerContent,
  BannerText,
  BannerAction,
} from './style';
import { ButtonPrimary, ButtonOutline } from 'components/button';
import { useSelector } from 'react-redux';
import { translate } from 'util/translate';
import { RootState } from 'store/store';
import { Link } from 'react-router-dom';

const Banner = () => {
  const { language } = useSelector((state: RootState) => state.lang);

  return (
    <BannerStyled>
      <BannerContent>
        <H1>{translate('banner-header-title', language)}</H1>

        <BannerText>{translate('banner-text', language)}</BannerText>
        <BannerAction>
          <Link to="/notFound">
            <ButtonPrimary>{translate('get-started', language)}</ButtonPrimary>
          </Link>
          <Link to="/games?platform=browser">
            <ButtonOutline>
              {translate('browser-games', language)}
            </ButtonOutline>
          </Link>
        </BannerAction>
      </BannerContent>
    </BannerStyled>
  );
};

export default Banner;
