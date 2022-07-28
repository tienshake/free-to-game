import { Container, Item } from './style';
import { GameDetails } from 'types';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { translate } from 'util/translate';
type Props = {
  item?: GameDetails;
};

const Information = (props: Props) => {
  const { item } = props;
  const { language } = useSelector((state: RootState) => state.lang);

  return (
    <Container className="row mb-3">
      <Item className="col-6 col-md-4">
        <span className="configuration-title">
          {translate('title', language)}
        </span>
        <span>{item?.title}</span>
      </Item>
      <Item className="col-6 col-md-4">
        <span className="configuration-title">
          {' '}
          {translate('developer', language)}
        </span>
        <span>{item?.developer}</span>
      </Item>
      <Item className="col-6 col-md-4">
        <span className="configuration-title">
          {translate('publisher', language)}
        </span>
        <span>{item?.publisher}</span>
      </Item>
      <Item className="col-6 col-md-4">
        <span className="configuration-title">
          {translate('release-date', language)}
        </span>
        <span>{item?.release_date}</span>
      </Item>
      <Item className="col-6 col-md-4">
        <span className="configuration-title">
          {translate('genre', language)}
        </span>
        <span>{item?.genre}</span>
      </Item>
      <Item className="col-6 col-md-4">
        <span className="configuration-title">
          {translate('platform', language)}
        </span>
        <span>{item?.platform}</span>
      </Item>
    </Container>
  );
};

export default Information;
