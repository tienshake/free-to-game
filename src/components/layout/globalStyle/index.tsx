import React from 'react';
import styles from './GlobalStyles.module.scss';

type Props = {
  children?: React.ReactNode;
};

const GlobalStyle = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default GlobalStyle;
