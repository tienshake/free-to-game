import { IconSa, IconWin } from 'components/cardGameMini/style';
import { PC_BROWSER, WEB_BROWSER } from 'constants/constants.d';
import { GameDetails } from 'types';
import { Container, Item } from './style';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { translate } from 'util/translate';
type Props = {
  item?: GameDetails;
};

const SystemRequirements = (props: Props) => {
  const { item } = props;
  const { language } = useSelector((state: RootState) => state.lang);

  return (
    <Container className="row mb-3">
      <div className="col-sm-6">
        <Item>
          <span className="configuration-title">
            {translate('os', language)}
          </span>
          <span>{item?.minimum_system_requirements?.os}</span>
        </Item>
        <Item>
          <span className="configuration-title">
            {translate('processor', language)}
          </span>
          <span>{item?.minimum_system_requirements?.processor}</span>
        </Item>
        <Item>
          <span className="configuration-title">
            {translate('memory', language)}
          </span>
          <span>{item?.minimum_system_requirements?.memory}</span>
        </Item>
      </div>
      <div className="col-sm-6">
        <Item>
          <span className="configuration-title">
            {translate('graphics', language)}
          </span>
          <span>{item?.minimum_system_requirements?.graphics}</span>
        </Item>
        <Item>
          <span className="configuration-title">
            {translate('storage', language)}
          </span>
          <span>{item?.minimum_system_requirements?.storage}</span>
        </Item>
        <Item>
          <span className="configuration-title">
            {translate('additional-notes', language)}
          </span>
          <span>
            <>
              {item?.platform === PC_BROWSER ? (
                <>
                  <IconSa style={{ marginRight: '10px' }} />{' '}
                  <IconWin style={{ marginRight: '10px' }} />
                </>
              ) : (
                <>
                  {item?.platform === WEB_BROWSER ? (
                    <IconSa style={{ marginRight: '10px' }} />
                  ) : (
                    <IconWin style={{ marginRight: '10px' }} />
                  )}
                </>
              )}
            </>
            {item?.platform}
          </span>
        </Item>
      </div>
    </Container>
  );
};

export default SystemRequirements;
