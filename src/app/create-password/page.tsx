import React from 'react'
import styles from './page.module.css';
import MyButton from '@/components/MyButton/MyButton';
import InputWithState from '@/components/InputWithState/InputWithState';


export default function page() {
  return (
    <main>
    <div  className={styles.body}>
        <div className={styles.back_div}>
          <MyButton className={styles.back_button} href='/registration'>
            <img src='./back_button.png' className={styles.back_button_icon} />
          </MyButton>
        </div>
        <div className={styles.title_div}>
            <p className={styles.title_step}>Step 1 of 3</p>
        </div>
        <div className={styles.title_create_div}>
            <p className={styles.title_create}>Create a password</p>
        </div>
        <div className={styles.title_unlocks_div}>
            <p className={styles.title_unlocks}>Unlocks on this device only.</p>
        </div>
        <div className={styles.title_password_div}>
            <p className={styles.title_password}>Create new password</p>
        </div>
        <div className={styles.input_div}>
              <InputWithState placeholder="Password"  />
        </div>
    </div>
    </main>
  )
}
