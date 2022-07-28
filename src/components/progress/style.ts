import styled from 'styled-components';

export const Container = styled.div`
  .progress-pie-chart {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #e5e5e530;
    position: relative;
  }
  .ppc-progress {
    content: '';
    position: absolute;
    border-radius: 50%;
    left: calc(50% - 75px);
    top: calc(50% - 75px);
    width: 200px;
    height: 200px;
    clip: rect(0, 200px, 200px, 75px);
  }
  .ppc-progress-fill {
    content: '';
    position: absolute;
    border-radius: 50%;
    left: calc(50% - 100px);
    top: calc(50% - 100px);
    width: 150px;
    height: 150px;
    clip: rect(0, 75px, 200px, 0);
    background: #4799eb;
    transform: rotate(60deg);
    transform: rotate(180deg);
  }
  .ppc-percents {
    content: '';
    position: absolute;
    border-radius: 50%;
    left: calc(50% - 123.91304px / 2);
    top: calc(50% - 123.91304px / 2);
    width: 123.91304px;
    height: 123.91304px;
    background: #272b30;
    text-align: center;
    display: table;
    .pcc-percents-wrapper {
      display: table-cell;
      vertical-align: middle;
    }
    .small {
      display: block;
      font-size: 2.6em;
      font-weight: bold;
      color: #4799eb;
    }
  }
`;
