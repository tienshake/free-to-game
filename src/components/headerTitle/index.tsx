import { Container } from 'styles/components/style';
import { TopTittle, BottomTittle, H3 } from './style';

interface HeaderTitleProps {
  IconTop?: any;
  IconBottom?: any;
  topTile?: string | JSX.Element;
  bottomTitle?: string | JSX.Element;
}

const HeaderTitle = (props: HeaderTitleProps) => {
  const { IconTop, IconBottom, topTile, bottomTitle } = props;
  return (
    <Container>
      <TopTittle>
        {IconTop && <IconTop />}
        <H3>{topTile}</H3>
      </TopTittle>
      {bottomTitle && (
        <BottomTittle>
          {IconBottom && <IconBottom />}
          {bottomTitle}
        </BottomTittle>
      )}
    </Container>
  );
};

export default HeaderTitle;
