import React from 'react';

import { useCallback, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);
  const isMaxReached = useCallback(() => counter === maxCount, [
    counter,
    maxCount,
  ]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        {' '}
        -{' '}
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button
        onClick={() => increaseBy(1)}
        className={`${styles.buttonAdd} ${
          isMaxReached() ? styles.disabled : ''
        }`}
      >
        {' '}
        +{' '}
      </button>
    </div>
  );
};
