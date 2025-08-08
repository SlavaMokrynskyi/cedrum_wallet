import { useRouter } from 'next/navigation'; 
import styles from './bridge.module.css';
import React from 'react'
import MyButton from '@/components/MyButton/MyButton';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Bridge</h1>
      </div>
      <MyButton className={styles.settings} href="/settings"> 
          <img src="/settings.png" className={styles.settings_icon} />
        </MyButton>
        <MyButton className={styles.back_button} href="/home">
          <img src="/back_button.png" className={styles.back_button_icon} />
        </MyButton>
      <div className={styles.rect}>
      </div>
      <div className={styles.square}>
        <div className={styles.point_down}>
          <img src="/point_down.png" className={styles.point_down_icon} />
        </div>
      </div>
      <div className ={styles.select_amount}>
        Select tocken and amount
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
        <div className={styles.tocken_balance_1}>
          0 SOL
        </div>
        <MyButton className={styles.bridge_to_button} href="/bridge-to">
            Bridge to
        </MyButton>
    </main>
  );
}