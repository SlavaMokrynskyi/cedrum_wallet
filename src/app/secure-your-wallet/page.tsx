import React from 'react'
import styles from './page.module.css';
import MyButton from '@/components/MyButton/MyButton';


export default function page() {
  return (
    <main>
        <div className={styles.body}>
            <div className={styles.back_div}>
          <MyButton className={styles.back_button} href='/create-password'>
            <img src='./back_button.png' className={styles.back_button_icon} />
          </MyButton>
        </div>
        <div className={styles.title_div}>
            <p className={styles.title_step}>Step 2 of 3</p>
        </div>
        <div className={styles.secure_div}>
            <p className={styles.title_secure}>Secure your wallet</p>
        </div>
        <div className={styles.icon_div}>
            <img src='/book.png' className={styles.icon}/>
        </div>
        <div className={styles.title_div_risk}>
            <p className={styles.title_risk}>Don't risk losing your funds. Protect your wallet <br/> by saving your Secret Recovery Phrase in a <br/> place you trust.</p>
        </div>
        <div className={styles.title_div_way}>
            <p className={styles.title_way}>It's the only way to recover your wallet if you get <br/> locked out of the app or get a new device.</p>
        </div>
        <div  className={styles.started_button_div}>
          <MyButton className={styles.started_button} href='save-recovery-phrase'>
            <p className={styles.button_title}> Get started </p>
          </MyButton>
        </div>
         <div className={styles.later_button_div}>
          <MyButton className={styles.later_button} href='/skip'>
            <p >Remind me later </p>
          </MyButton>
        </div>
        </div>
    </main>
  )
}
