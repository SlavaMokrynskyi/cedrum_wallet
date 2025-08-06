import React from 'react'
import styles from './page.module.css';
import BalanceComponent from '@/components/BalanceComponent/BalanceComponent';
import MyButton from '@/components/MyButton/MyButton';


export default function page() {  
  return (
    <div>
      <main>
        <div className={styles.body}>
          <div className={styles.line_div}>
          <hr className={styles.line} />
        </div>
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
          <img src='/send.png' className={styles.button_icon}/>
          <p className={styles.button_title}>Send</p>
          </MyButton>
        </div>
        <div className={styles.send_div}>
          <MyButton className={styles.swap} href='/send-page'>
          <img src='/recieve.png' className={styles.button_icon}/>
          <p className={styles.button_title}>Send</p>
          </MyButton>
        </div>
        
        </div>
        </div>
      </main>
    </div>
  )
}
