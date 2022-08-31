import React from 'react';
import {
  H4,
  Text,
  ReadMore,
  Breadcrumbs,
  Screenshots,
  ActionStyled,
  DetailContainer,
  InformationTitle,
  HeaderTitleStyled,
  BackGroundImgStyled,
} from './style';
import { ID } from 'constants/constants';
import { Link } from 'styles/components/style';
import { translate } from 'util/translate';
import { RootState } from 'store/store';
import { Typography } from '@mui/material';
import { GameDetails } from 'types';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ButtonPrimary } from 'components/button';
import Comment from 'components/comment';
import Reviews from 'components/reviews';
import Loading from 'components/loading';
import ErrorIcon from '@mui/icons-material/Error';
import requestApi from 'api/requestApi';
import Information from 'components/information';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import GroupBtnState from 'components/groupBtnState';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SystemRequirements from 'components/systemRequirements';
import _ from 'lodash';

const Detail = () => {
  const { search } = useLocation();
  const id = new URLSearchParams(search).get(ID);
  const [game, setGame] = React.useState<GameDetails>({});
  const [showMoreText, setShowMoreText] = React.useState<boolean>(false);
  const { language } = useSelector((state: RootState) => state.lang);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    const fetch = async () => {
      const res = await requestApi.getGame(id);
      setGame(res);
    };
    fetch();
  }, [id]);

  return (
    <DetailContainer>
      {/* BackGroundImgStyled */}
      <BackGroundImgStyled
        style={{
          background: `url(https://www.freetogame.com/g/${game?.id}/background.jpg)`,
        }}
      >
        <div className="detail-gradient" />
      </BackGroundImgStyled>
      <div className="detail-left">
        {/* Card */}
        <div className="detail-card">
          {/* Loading */}
          {_.isEmpty(game) && <Loading />}
          <img src={game?.thumbnail} alt="" />
          <ActionStyled>
            <div className="detail-free">{translate('FREE', language)}</div>
            <ButtonPrimary>
              <a
                href={game?.game_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {translate('play-now', language)}
                <PlayArrowIcon />
              </a>
            </ButtonPrimary>
          </ActionStyled>
          {/* GroupBtnState */}
          <GroupBtnState like={translate('like', language)} />
        </div>
      </div>
      <div className="detail-right">
        {/* Breadcrumbs */}
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit" to="/">
            {translate('home', language)}
          </Link>
          <Link to="/games">{translate('free-games', language)} </Link>
          <Typography>{game?.title}</Typography>
        </Breadcrumbs>
        <h1>{game?.title}</h1>
        {/* Reviews */}
        <Reviews />
        {/* Comment */}
        <Comment />
        {/* About */}
        <H4>
          {translate('about', language)} {game?.title}
        </H4>
        <Text showMoreText={showMoreText}>{game?.description}</Text>
        <ReadMore onClick={() => setShowMoreText(!showMoreText)}>
          {!showMoreText ? (
            <>{translate('read-more', language)}</>
          ) : (
            <>{translate('read-less', language)}</>
          )}
        </ReadMore>
        {/* Information */}
        <InformationTitle>
          <HeaderTitleStyled
            topTile={translate('additional-information', language)}
            bottomTitle={translate('please-note', language)}
            IconBottom={ErrorIcon}
          />
        </InformationTitle>
        <Information item={game} />
        <H4>
          {game?.title} {translate('screenshots', language)}
        </H4>
        {/* Screenshots */}
        <Screenshots>
          {game?.screenshots?.map((item) => {
            return (
              <div key={item?.id} className="col-lg-3 col-md-4 col-6">
                <img src={item?.image} alt="" />
              </div>
            );
          })}
        </Screenshots>
        <H4>
          {translate('system-requirements', language)} ({game?.platform})
        </H4>
        <InformationTitle>
          {/* SystemRequirements */}
          <SystemRequirements item={game} />
        </InformationTitle>
        <p className="detail-title-end">
          {translate('license-note', language)}
        </p>
      </div>
    </DetailContainer>
  );
};

export default Detail;
