import {
  CardGameContainer,
  Name,
  Button,
  Img,
  Des,
  ButtonType,
  TitleDes,
  IconWin,
  CardGameMiniViewGamesStyled,
  IconSa,
} from './style';
import { CONSTANTS, PC_BROWSER, WEB_BROWSER } from 'constants/constants.d';
import { RootState } from 'store/store';
import { translate } from 'util/translate';
import { useSelector } from 'react-redux';
import { H3 } from 'styles/components/style';
import { Game } from 'types';

type ItemProps = {
  item?: Game;
  className?: string;
  cartViewGames?: boolean;
};

const CardGameMini = (props: ItemProps) => {
  const { language } = useSelector((state: RootState) => state.lang);

  const { item, className, cartViewGames } = props;

  return (
    <CardGameContainer className={className}>
      <Img src={item?.thumbnail} />
      <Name className="card-game-mini_des-container">
        {cartViewGames ? (
          <>
            <Des>
              <div className="card-game-mini_name">
                <H3>{item?.title}</H3>{' '}
                <Button>{translate(CONSTANTS.FREE, language)}</Button>
              </div>
              <TitleDes className="card-game-mini_des">
                {item?.short_description}
              </TitleDes>
              <div className="card-game-mini_battle">
                <ButtonType>{item?.genre}</ButtonType>
                {item?.platform === PC_BROWSER ? (
                  <>
                    <IconSa /> <IconWin />
                  </>
                ) : (
                  <>
                    {item?.platform === WEB_BROWSER ? <IconSa /> : <IconWin />}
                  </>
                )}
              </div>
            </Des>
          </>
        ) : (
          <>
            <Des>
              <H3>{item?.title}</H3>
              <TitleDes className="card-game-mini_des">
                {item?.short_description}
              </TitleDes>
              <ButtonType>{item?.genre}</ButtonType>
            </Des>
            {item?.platform === 'Web Browser' ? <IconSa /> : <IconWin />}
            <Button>{translate(CONSTANTS.FREE, language)}</Button>
          </>
        )}
      </Name>
    </CardGameContainer>
  );
};

export const CardGameMiniViewGames = (props: ItemProps) => {
  return (
    <CardGameMiniViewGamesStyled>
      <CardGameMini {...props} className="cardGameMini" cartViewGames={true} />
    </CardGameMiniViewGamesStyled>
  );
};

export default CardGameMini;
