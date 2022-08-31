import { RootState } from 'store/store';
import { translate } from 'util/translate';
import { useSelector } from 'react-redux';
import { NotFoundContainer } from './style';

const NotFound = () => {
  const { language } = useSelector((state: RootState) => {
    return state.lang;
  });
  return (
    <NotFoundContainer>
      {translate('not-found-page', language)}
      <a href="/">Link Home page</a>
    </NotFoundContainer>
  );
};

export default NotFound;
