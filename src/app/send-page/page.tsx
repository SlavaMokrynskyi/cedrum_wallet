import { useRouter } from 'next/navigation'; 
import styles from './send.module.css';
import React from 'react';
import MyButton from '@/components/MyButton/MyButton';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Send</h1>
      </div>
      <div className={styles.From}>
        <h1 className={styles.From}>From</h1>
      </div>
      <div className={styles.To}>
        <h1 className={styles.To}>To</h1>
      </div>
      <div>
          <input className={styles.address_input} placeholder='Enter public address' />
        </div>
        <MyButton className={styles.back_button} href="/home">
        <img src="/back_button.png" className={styles.back_button_icon} />
      </MyButton>
      <div className={styles.buttons}>
        <MyButton className={styles.cancel_button} href="/home">
          Cancel
        </MyButton>
        <MyButton className={styles.continue_button} href="/confirm">
          Continue
        </MyButton>
        </div>
    </main>
  );
}