import { css } from '@emotion/css';

export const styles = {
  audioVisualizer: css`
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
  `,
  audioVisualizerUi: css`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    position: absolute;
    width: 100%;
    z-index: 1;
  `,
  mainActionButton: css`
    background: none;
    border: none;
    cursor: pointer;
    height: 100%;
    outline: none;
    width: 100%;
  `,
  loaderBar: css`
    animation: loader 1s linear infinite;
    border-radius: 50px;
    display: inline-block;
    height: 55px;
    margin-right: 5px;
    width: 10px;

    @keyframes loader {
      0% {
        transform: scaleY(0.3);
      }
      50% {
        transform: scaleY(1);
      }
      100% {
        transform: scaleY(0.3);
      }
    }
  `,
  loaderBar1: css`
    animation-delay: -0.1s;
  `,
  loaderBar2: css`
    animation-delay: -0.3s;
  `,
  loaderBar3: css`
    animation-delay: -0.6s;
  `,
};
