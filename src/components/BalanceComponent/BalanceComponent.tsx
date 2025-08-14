'use client';
import React, { useState} from 'react';
import styles from './BalanceComponent.module.css';
import { Balance } from '@/types/types';

export default function BalanceComponent() {
  const [balance, setBalance] = useState<Balance>({
    amount: 0,
    currency: 'USD',
  });


  
  const [hidden, setHidden] = useState<boolean>(false);

  const toggleVisibility = () => {
    setHidden(prev => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        <div className={styles.balanceRow}>
          <p className={styles.amount}>
            {hidden ? '*******' : balance.amount.toFixed(3)} {balance.currency}
          </p>

          <button className={styles.button} onClick={toggleVisibility}>
            {hidden ?  <img src="closed_eye.png" alt="icon" className={styles.eye}/>: <img src="/open_eye.png" alt="icon" className={styles.eye}/>}
          </button>
        </div>
        <div className={styles.daily_growth}>
          <p>+0.00 USD(+0.00%)</p>
        </div>
      </div>
    </div>
  );
}
