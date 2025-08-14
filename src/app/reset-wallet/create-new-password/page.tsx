import React from 'react'
import styles from './page.module.css'
import InputWithState from '@/components/InputWithState/InputWithState'
import MyButton from '@/components/MyButton/MyButton'

export default function page() {
  return (
    <div className={styles.body}>
            <div className={styles.back_div}>
                <MyButton className={styles.back_button} href='/'>
                    <img src='./back_button.png' className={styles.back_button_icon} />
                </MyButton>
            </div>
        <div className={styles.big_title_div}>
            <p className={styles.big_title}>Reset wallet</p>
        </div>
        <div className={styles.title_password_div}>
            <p className={styles.title_password}>Create new password</p>
        </div>
        <div className={styles.input_div1}>
              <InputWithState placeholder="Password"   />
        </div>
        <div className={styles.title_password_div2}>
          <p className={styles.title_password}>Confirm password</p>
        </div>
        <div className={styles.input_div2}>
              <InputWithState placeholder="Password"  />
        </div>
        <div>
          <MyButton className={styles.create_button} href='/unlock-page'>
            <p>Restore </p>
          </MyButton>
        </div>
    </div>
  )
}
