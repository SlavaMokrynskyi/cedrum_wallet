"use client"
import { useRouter } from 'next/navigation'; 
import styles from './swap.module.css';
import React, {useState} from 'react'
import MyButton from '@/components/MyButton/MyButton';
export default function Home() {
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');
  const isActive = amount1.trim() !== '' && amount2.trim() !== '';
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Swap</h1>
      </div>
      <MyButton className={styles.settings} href="/settings"> 
        <img src="/settings.png" className={styles.settings_icon} />
      </MyButton>
      <MyButton className={styles.back_button} href="/home">
        <img src="/back_button.png" className={styles.back_button_icon} />
      </MyButton>
      <div className={`${styles.rect} ${isActive ? styles.rect_active : ''}`}>
      </div>
      <div className={`${styles.square} ${isActive ? styles.square_active : ''}`}>
        <div className={styles.point_down}>
          <img src="/point_down.png" className={styles.point_down_icon} />
        </div>
      </div>
      <MyButton className ={`${styles.select_amount} ${isActive ? styles.select_amount_active : ''}`} href="swap-to" disabled={!isActive}>
        Select amount
      </MyButton>
        <div>
          <input className={styles.number_input_1} type="number" placeholder='0' value={amount1} onChange={e => setAmount1(e.target.value)}/>
        </div>
        <div>
          <input className={styles.number_input_2} type="number" placeholder='0' value={amount2} onChange={e => setAmount2(e.target.value)} />
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