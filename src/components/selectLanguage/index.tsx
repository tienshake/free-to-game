import { ItemSelect, SelectStyled } from './style';
import { RootState } from 'store/store';
import { translate } from 'util/translate';
import { ReactComponent as IconVi } from 'assets/icons/IconVi.svg';
import { ReactComponent as IconEn } from 'assets/icons/IconEn.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from 'features/language/LanguageSlice';
import { EN, VI } from 'constants/constants.d';

const SelectLanguage = () => {
  const { language } = useSelector((state: RootState) => state.lang);

  const dispatch = useDispatch();

  const handleChangeLanguage = () => {
    if (language === VI) {
      dispatch(changeLanguage(EN));
    } else {
      dispatch(changeLanguage(VI));
    }
  };

  return (
    <>
      <SelectStyled
        onChange={handleChangeLanguage}
        value={language}
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
          },
          disablePortal: true,
        }}
      >
        <ItemSelect value={EN}>
          <IconEn />
          <p style={{ margin: '0px' }}>{translate('en', language)}</p>
        </ItemSelect>
        <ItemSelect value={VI}>
          <IconVi />
          <p style={{ margin: '0px' }}>{translate('vi', language)}</p>
        </ItemSelect>
      </SelectStyled>
    </>
  );
};

export default SelectLanguage;
