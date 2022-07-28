import React from 'react';
import Banner from '../banner';
import Footer from '../footer';
import Header from '../header';
import { DefaultLayoutContainer, Content } from './style';

type Props = {
  children?: React.ReactNode;
  noneBanner?: boolean;
  backGroundImg?: boolean;
};

const DefaultLayout = ({ children, noneBanner, backGroundImg }: Props) => {
  return (
    <DefaultLayoutContainer>
      <Header />
      {!noneBanner && <Banner />}
      <Content backGroundImg={backGroundImg}>{children}</Content>
      <Footer />
    </DefaultLayoutContainer>
  );
};

export default DefaultLayout;
