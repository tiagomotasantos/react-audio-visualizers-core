import { ButtonHTMLAttributes } from 'react';
import { styles } from './AudioVisualizer.styles';

export const MainActionButton = ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={styles.mainActionButton} {...props}>
    {children}
  </button>
);
