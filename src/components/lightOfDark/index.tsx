import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { RootState } from 'store/store';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLightRedux } from 'features/actionHeader';

const LightOfDark = () => {
  const { isLight } = useSelector((state: RootState) => state.actionHeader);
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(setIsLightRedux(!isLight));
  };
  return (
    <div style={{ cursor: 'pointer' }}>
      {isLight ? (
        <Brightness5Icon onClick={handleOnClick} />
      ) : (
        <Brightness4Icon onClick={handleOnClick} />
      )}
    </div>
  );
};

export default LightOfDark;
