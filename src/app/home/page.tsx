import React from 'react'
import styles from './page.module.css';
import BalanceComponent from '@/components/BalanceComponent/BalanceComponent';
import MyButton from '@/components/MyButton/MyButton';
import TopBar from '@/components/TopBar/TopBar';
import HomeFooter from '@/components/HomeFooter/HomeFooter';

export default function page() {  
  return (
    <div>
      <main>
        <div className={styles.body}>
          <TopBar/>
          <div className={styles.Balance}>
            <BalanceComponent/>
          </div>
          <div className={styles.buttons_row}>
  <div className={styles.button_box}>
    <MyButton  className={styles.button} href='/swap-page'>
      <div className={styles.icon_wrapper}>
        <img src='/swap.png' alt='Swap'/>
      </div>
    </MyButton>
    <p className={styles.button_title}>Swap</p>
  </div>

  <div className={styles.button_box}>
    <MyButton className={styles.button} href='/bridge-page'>
      <div className={styles.icon_wrapper}>
        <img src='/bridge.png' alt='Bridge'/>
      </div>
    </MyButton>
    <p className={styles.button_title}>Bridge</p>
  </div>

  <div className={styles.button_box}>
    <MyButton  className={styles.button} href='/send-page'>
      <div className={styles.icon_wrapper}>
        <img src='/send.png' alt='Send'/>
      </div>
    </MyButton>
    <p className={styles.button_title}>Send</p>
  </div>

  <div className={styles.button_box}>
    <MyButton className={styles.button}  href='/receive'>
      <div className={styles.icon_wrapper}>
        <img src='/recieve.png' alt='QR'/>
      </div>
    </MyButton>
    <p className={styles.button_title}>QR</p>
  </div>
</div>


          <HomeFooter/>
        </div>
      </main>
    </div>
  )
}
