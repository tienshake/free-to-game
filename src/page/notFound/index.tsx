import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { translate } from 'util/translate';
import { NotFoundContainer } from './style';

const NotFound = () => {
  const { language } = useSelector((state: RootState) => {
    return state.lang;
  });
  return (
    <NotFoundContainer>
      {translate('not-found-page', language)}
    </NotFoundContainer>
  );
};

export default NotFound;
