import { CommentInput, Container, Textarea } from './style';
import { RootState } from 'store/store';
import { translate } from 'util/translate';
import { useSelector } from 'react-redux';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import SendIcon from '@mui/icons-material/Send';

const Comment = () => {
  const { language } = useSelector((state: RootState) => state.lang);
  return (
    <Container>
      <div className="comment-content">
        <span className="comment-title">
          {translate('about-think', language)} Fall Guys?
        </span>
        <div className="comment-face-state">
          <span>
            <SentimentVerySatisfiedIcon />2
          </span>
          <span>
            <SentimentNeutralIcon />0
          </span>
          <span>
            <MoodBadIcon />2
          </span>
        </div>
      </div>
      <CommentInput>
        <img
          src="https://www.freetogame.com/assets/images/avatars/default/default.png"
          alt=""
        />
        <Textarea placeholder={translate('write-review', language)} />
        <button>
          <SendIcon />
        </button>
      </CommentInput>
    </Container>
  );
};

export default Comment;
