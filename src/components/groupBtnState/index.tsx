import React from 'react';
import { Container, Button, AddBox, Neutral, SadFace, Smile } from './style';

type Props = {
  like: string;
};

const GroupBtnState = (props: Props) => {
  const [number, setNumber] = React.useState(69);
  const { like } = props;

  const handleOnClick = () => {
    setNumber((prev) => prev + 1);
  };
  return (
    <Container>
      <Button onClick={handleOnClick}>
        <Smile />
        <span>{number}</span>
        <span>{like}</span>
      </Button>
      <Button onClick={handleOnClick}>
        <Neutral />
        <span>{number}</span>
        <span>{like}</span>
      </Button>
      <Button onClick={handleOnClick}>
        <SadFace />
        <span>{number}</span>
        <span>{like}</span>
      </Button>
      <Button onClick={handleOnClick}>
        <AddBox />
        <span>{number}</span>
        <span>{like}</span>
      </Button>
    </Container>
  );
};

export default GroupBtnState;
