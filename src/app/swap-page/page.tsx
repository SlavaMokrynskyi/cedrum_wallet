import { useRouter } from 'next/navigation'; 
import styles from './swap.module.css';
import React from 'react'

interface ButtonProps {
  onClick: () => void;
  Button: React.ReactNode;
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Swap</h1>
      </div>
      <button className={styles.settings} > 
          <img src="/settings.png" className={styles.settings_icon} />
        </button>
        <button className={styles.back_button}>
          <img src="/back_button.png" className={styles.back_button_icon} />
        </button>
      <div className={styles.rect}>
      </div>
      <div className={styles.square}>
        <div className={styles.point_down}>
          <img src="/point_down.png" className={styles.point_down_icon} />
        </div>
      </div>
      <div className ={styles.select_amount}>
        Select amount
      </div>
        <div>
          <input className={styles.number_input_1} type="number" placeholder='0' />
        </div>
        <div>
          <input className={styles.number_input_2} type="number" placeholder='0' />
        </div>
        <div className={styles.tocken_name_1}>
          SOL
        </div>
        <div className={styles.tocken_name_2}>
          USDC
        </div>
        <div className={styles.tocken_balance_2}>
          0 USDC
        </div>
        <div className={styles.tocken_balance_1}>
          0 SOL
        </div>
    </main>
  );
}