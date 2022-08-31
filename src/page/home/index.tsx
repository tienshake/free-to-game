import React from 'react';
import { Link } from 'styles/components/style';
import { translate } from 'util/translate';
import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'hook/hooksStore';
import { ButtonOutline } from 'components/button';
import { ContentGame, ContentLeft, ContentRight, Container } from './style';
import Loading from 'components/loading';
import ListGame from 'components/listGame';
import HelpIcon from '@mui/icons-material/Help';
import CardGame from 'components/cardGame';
import Community from 'components/community';
import HeaderTitle from 'components/headerTitle';
import CardGameMini from 'components/cardGameMini';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import dispatchDataRedux from 'util/dispatchDataRedux';
import _ from 'lodash';

const Home = () => {
  const { language, gamesRelease, gamesRelevance, gamesPopularity } =
    useSelector((state: RootState) => {
      return { ...state.lang, ...state.games };
    });

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    // Check for empty, then dispatch and fetch data
    if (
      _.isEmpty(gamesRelease) &&
      _.isEmpty(gamesRelevance) &&
      _.isEmpty(gamesPopularity)
    ) {
      dispatchDataRedux(dispatch);
    }
  }, [dispatch, gamesRelease, gamesRelevance, gamesPopularity]);

  return (
    <Container>
      <HeaderTitle
        topTile={translate('recommendations', language)}
        bottomTitle={translate('help', language)}
        IconTop={SmartToyIcon}
        IconBottom={HelpIcon}
      />
      {_.isEmpty(gamesRelevance) && <Loading />}
      {/* ListGame render */}
      <ListGame items={gamesRelevance} limit={3} Card={CardGame} />
      {/* body */}
      <ContentGame>
        {/* Recently Added */}
        <ContentLeft>
          <HeaderTitle topTile={translate('recently-added', language)} />
          {/* ListGame render */}
          <ListGame items={gamesRelease} limit={6} Card={CardGameMini} column />
          <div style={{ float: 'right', marginTop: '20px' }}>
            <ButtonOutline>
              <Link to="/games">{translate('more-games', language)}</Link>
            </ButtonOutline>
          </div>
        </ContentLeft>
        {/* Most Played Today */}
        <ContentRight>
          <HeaderTitle topTile={translate('most-play-today', language)} />
          {/* ListGame render */}
          <ListGame
            items={gamesPopularity}
            column
            limit={4}
            Card={CardGame}
            disableName
          />
        </ContentRight>
      </ContentGame>
      {/* recommendations */}
      <HeaderTitle topTile={translate('community-recommendations', language)} />
      {/* Community */}
      <Community />
    </Container>
  );
};

export default Home;
