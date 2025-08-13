import React from 'react'
import styles from './page.module.css';
import BalanceComponent from '@/components/BalanceComponent/BalanceComponent';
import MyButton from '@/components/MyButton/MyButton';

export default function Page() {
  return (
    <main>
      <div className={styles.body}>
        

        <div className={styles.back_div}>
          <MyButton className={styles.back_button} href='/home'>
            <img src='./back_button.png' className={styles.back_button_icon} />
          </MyButton>
        </div>
        <div className={styles.big_title_div}>
          <p className={styles.big_title}>NFT</p>
        </div>


        <div className={styles.link_div}>
          <MyButton className={styles.link} href='/'>
            <img src='./link.png' className={styles.link_icon} />
          </MyButton>
        </div>

        <div className={styles.input_wrapper}>
          <img src="/serch.png" alt="icon" className={styles.input_image} />
          <input type="text" placeholder="Search" className={styles.search} />
        </div>
        <div className={styles.cardContainer}>
          <MyButton href='/NFT-component' className={styles.card}>
            <div className={styles.cardImage}></div>
            <p className={styles.cardTitle}>7777777 #7777</p>
            <p className={styles.cardPrice}>0,000 USD</p>
          </MyButton>
        </div>

      </div>
    </main>
  )
}
