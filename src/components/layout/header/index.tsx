import React from 'react';
import {
  Img,
  Left,
  Item,
  Right,
  Action,
  BoxSub,
  LiItem,
  MenuSub,
  IconMenu,
  Dropdown,
  LinkStyled,
  HeaderContent,
  HeaderContainer,
  SearchIconStyled,
} from './style';
import {
  EN,
  BROWSER,
  IMG_LOGO,
  GENRES_ALL,
  GENRES_BROWSER,
} from 'constants/constants';
import { Box } from '@mui/system';
import { RootState } from 'store/store';
import { translate } from 'util/translate';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setIsSearchRedux } from 'features/actionHeaderSlice';
import { headers, headerType } from './type';
import { GENRES_ARR, GENRES_BROWSER_ARR, typeListGame } from 'constants/games';
import LightOfDark from 'components/lightOfDark';
import SelectLanguage from 'components/selectLanguage';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const [openSubMenu, setOpenSubMenu] = React.useState(false);
  const [listSubMenu, setListSubMenu] = React.useState<typeListGame[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { language, isSearch } = useSelector((state: RootState) => {
    return { ...state.lang, ...state.actionHeader };
  });

  const handleOpenMenuItem = (e: any, item: headerType) => {
    if (item.icon) {
      setAnchorEl(e.currentTarget);
      if (item.type === GENRES_ALL) {
        setListSubMenu(GENRES_ARR);
      }
      if (item.type === GENRES_BROWSER) {
        setListSubMenu(GENRES_BROWSER_ARR);
      }
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMenuItem = (item: typeListGame) => {
    setAnchorEl(null);
    if (listSubMenu === GENRES_ARR) {
      navigate(`/games?sort-by=${item.value}`);
    }
    if (listSubMenu === GENRES_BROWSER_ARR) {
      navigate(`/games?platform=${BROWSER}&sort-by=${item.value}`);
    }
  };

  const handleRedirectWhenSearch = () => {
    if (isSearch === false) {
      navigate(`/games`);
    }
    dispatch(setIsSearchRedux(!isSearch));
  };

  const handleClickLogo = () => {
    window.scrollTo(0, 0);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <HeaderContainer>
      <HeaderContent>
        <Left>
          <LinkStyled onClick={handleClickLogo} to="/">
            <Img src={IMG_LOGO} />
          </LinkStyled>
          {headers?.map((item: headerType, index: number) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={index}>
                <LiItem
                  aria-describedby={id}
                  onClick={(e) => handleOpenMenuItem(e, item)}
                >
                  {translate(item.title, language)}
                  {Icon && <Icon />}
                </LiItem>
              </React.Fragment>
            );
          })}
          <Dropdown
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            {listSubMenu?.map((item: typeListGame, i: any) => {
              return (
                <Item key={i} onClick={() => handleClickMenuItem(item)}>
                  {language === EN ? item.display : item.displayVi}
                </Item>
              );
            })}
          </Dropdown>
        </Left>
        <Right>
          <Action>
            <SearchIconStyled onClick={handleRedirectWhenSearch} />
            <LightOfDark />
          </Action>
          <SelectLanguage />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              color="inherit"
              onClick={() => setOpenSubMenu(!openSubMenu)}
            >
              <IconMenu open={openSubMenu} />
            </IconButton>
          </Box>
        </Right>
      </HeaderContent>
      <BoxSub
        open={openSubMenu}
        sx={{
          flexGrow: 1,
          justifyContent: 'flex-start',
          display: { md: 'none' },
        }}
      >
        {headers?.map((item: headerType, index: number) => {
          const Icon = item.icon;
          return (
            <React.Fragment key={index}>
              <MenuSub>
                {translate(item.title, language)}
                {Icon && <Icon />}
              </MenuSub>
            </React.Fragment>
          );
        })}
      </BoxSub>
    </HeaderContainer>
  );
};

export default Header;
