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
            <div className={styles.swap_div}>
              <MyButton className={styles.swap} href='/swap-page'>
              <img src='/swap.png' className={styles.button_icon}/>
              <p className={styles.button_title}>Swap</p>
              </MyButton>
            </div>
            <div className={styles.bridge_div}>
              <MyButton className={styles.swap} href='/bridge-page'>
              <img src='/bridge.png' className={styles.button_icon}/>
              <p className={styles.button_title}>Bridge</p>
              </MyButton>
            </div>
            <div className={styles.send_div}>
              <MyButton className={styles.swap} href='/send-page'>
              <img src='/swap.png' className={styles.button_icon}/>
              <p className={styles.button_title}>Send</p>
              </MyButton>
            </div>
            <div className={styles.send_div}>
              <MyButton className={styles.swap} href='/receive'>
              <img src='/recieve.png' className={styles.button_icon}/>
              <p className={styles.button_title}>QR</p>
              </MyButton>
            </div>      
          </div>

          <HomeFooter/>
        </div>
      </main>
    </div>
  )
}
