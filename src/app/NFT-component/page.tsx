import React from 'react'
import styles from './page.module.css';
import MyButton from '@/components/MyButton/MyButton';

export default function page() {
  return (
    <main>
        <div className={styles.body}>
            <div className={styles.back_div}>
          <MyButton className={styles.back_button} href='/NFT'>
            <img src='./back_button.png' className={styles.back_button_icon} />
          </MyButton>
        </div>
        <div className={styles.cardImage}></div>
        <div className={styles.big_title_div}>
        <p className={styles.big_title}>777777777#7777</p>
        </div>
        <div className={styles.small_title_div}>
        <p className={styles.small_title}>777777777777777777777777777777777777777777<br/>777777777777777777777777777777777777777777<br/>777777777777777777777777777777777777777777<br/>77</p>
        </div>
        <div className={styles.card}>
      <p className={styles.label}>Current Price</p>
      <p className={styles.mainPrice}>0,000 USD</p>
      <p className={styles.subPrice}>0,000 USD</p>
    </div>
    <div className={styles.later_button_div}>
          <MyButton className={styles.later_button} href='/confirm-recovery-phrase'>
            <p >Buy</p>
          </MyButton>
        </div>
        </div>
    </main>
  )
}
