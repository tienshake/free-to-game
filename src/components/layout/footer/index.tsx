import {
  FooterContent,
  FooterEnd,
  FooterStyled,
  ListItem,
  Img,
  Item,
  FooterEndContent,
  FooterEndText,
  FooterEndUnstyled,
} from './style';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { useSelector } from 'react-redux';
import { translate } from 'util/translate';
import { RootState } from 'store/store';
const Footer = () => {
  const { language } = useSelector((state: RootState) => state.lang);
  return (
    <FooterStyled>
      <FooterContent>
        <ListItem>
          <Item>{translate('about-us', language)}</Item>
          <Item>{translate('api', language)}</Item>
          <Item>{translate('contact-us', language)}</Item>
        </ListItem>
        <ListItem>
          <Item>{translate('help/faq', language)}</Item>
          <Item>{translate('support', language)}</Item>
          <Item>{translate('feature', language)}</Item>
        </ListItem>
        <ListItem>
          <Item>{translate('privacy', language)}</Item>
          <Item>{translate('cookies', language)}</Item>
          <Item>{translate('terms', language)}</Item>
        </ListItem>
        <Img
          src="	https://www.freetogame.com/assets/images/logo-footer.png"
          alt=""
        />
      </FooterContent>
      <FooterEnd>
        <FooterEndContent>
          <FooterEndText>© Copyright from FreeToGame.</FooterEndText>
          <FooterEndUnstyled>
            <FacebookIcon />
            <TwitterIcon />
            <RssFeedIcon />
          </FooterEndUnstyled>
        </FooterEndContent>
      </FooterEnd>
    </FooterStyled>
  );
};

export default Footer;
