import { Neutral } from 'components/groupBtnState/style';
import Progress from 'components/progress';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { translate } from 'util/translate';
import { ChatIcon, PersonIcon, ReviewsStyle } from './style';

const Reviews = () => {
  const { language } = useSelector((state: RootState) => state.lang);

  return (
    <ReviewsStyle>
      <div className="detail-reviews-left">
        <span>
          <Neutral /> {translate('mixed', language)}
        </span>
        <span>&nbsp;4&nbsp;&nbsp; {translate('member-ratings', language)}</span>
        <span>
          <PersonIcon /> 23 {translate('member-play-library', language)}
        </span>
        <div className="detail-review-pop">
          <span>
            <ChatIcon /> 0 {translate('reviews', language)}
          </span>
          <span>&#8595; 31% {translate('popularity', language)}</span>
        </div>
      </div>
      <div className="detail-reviews-right">
        <Progress />
      </div>
    </ReviewsStyle>
  );
};

export default Reviews;
