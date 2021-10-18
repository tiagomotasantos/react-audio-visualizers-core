import { CSSProperties } from 'react';
import { cx } from '@emotion/css';
import { styles } from '../AudioVisualizer.styles';

interface LoaderIconProps {
  color: string;
}

export const LoaderIcon = ({ color }: LoaderIconProps) => {
  const style: CSSProperties = { backgroundColor: color };

  return (
    <>
      <div style={style} className={cx(styles.loaderBar, styles.loaderBar1)}></div>
      <div style={style} className={cx(styles.loaderBar, styles.loaderBar1)}></div>
      <div style={style} className={cx(styles.loaderBar, styles.loaderBar1)}></div>
    </>
  );
};
