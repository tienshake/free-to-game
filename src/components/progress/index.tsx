import React from 'react';
import { Container } from './style';

const Progress = () => {
  return (
    <Container>
      <div className="progress-pie-chart">
        <div className="ppc-progress">
          <div className="ppc-progress-fill"></div>
        </div>
        <div className="ppc-percents">
          <div className="pcc-percents-wrapper">
            <span className="small">50%</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Progress;
