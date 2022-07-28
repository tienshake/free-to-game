import CardGame from 'components/cardGame';
import React from 'react';
import {
  CommunityStyled,
  CommunityItem,
  CommunityDes,
  CommunityAuth,
  CommunityText,
} from './style';
const Community = () => {
  return (
    <CommunityStyled>
      <CommunityItem>
        <CardGame
          item={{
            id: 11111,
            title: 'Naruto',
            thumbnail: 'https://www.freetogame.com/g/365/thumbnail.jpg',
            short_description: 'alo',
          }}
          size={'minium'}
        />
        <CommunityDes>
          <CommunityText>
            If you have been looking for a game like Breath of the Wild on pc,
            look no further. It is clear that they took a lot of inspiration
            from this game and made a fantastic game on pc. I can reccommend
            this game for everyone that likes open wor
          </CommunityText>
          <CommunityAuth>
            <img
              src="https://www.freetogame.com/assets/images/avatars/default/default-small.png"
              alt=""
            />
            <p>By reggert32</p>
          </CommunityAuth>
        </CommunityDes>
      </CommunityItem>
      <CommunityItem>
        <CardGame
          item={{
            id: 22222,
            title: 'Genshin impact',
            thumbnail: 'https://www.freetogame.com/g/475/thumbnail.jpg',
            short_description: 'alo',
          }}
          size={'minium'}
        />
        <CommunityDes>
          <CommunityText>
            Amazing play this game you will have very good dreams play and
            download!
          </CommunityText>
          <CommunityAuth>
            <img
              src="https://www.freetogame.com/assets/images/avatars/default/default-small.png"
              alt=""
            />
            <p>By engaji</p>
          </CommunityAuth>
        </CommunityDes>
      </CommunityItem>
    </CommunityStyled>
  );
};

export default React.memo(Community);
