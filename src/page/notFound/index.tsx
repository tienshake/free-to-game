import { RootState } from 'store/store';
import { translate } from 'util/translate';
import { useSelector } from 'react-redux';
import { NotFoundContainer, A } from './style';

const NotFound = () => {
  const { language } = useSelector((state: RootState) => {
    return state.lang;
  });
  return (
    <NotFoundContainer>
      {translate('not-found-page', language)}
      <A style={{ color: 'blue !important' }} href="/free-to-game">
        Click return Home page
      </A>
    </NotFoundContainer>
  );
};

export default NotFound;
