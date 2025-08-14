import React from 'react'
import MyButton from '@/components/MyButton/MyButton'
import styles from './page.module.css'

export default function Unlockpage() {
  return (
    <main className={styles.main}>
      <div>
        <img src="/logo.png" className={styles.logo} /> 
      </div>
      <div className={styles.password}>
        Password
      </div>
      <div>
        <input type="password" placeholder="Keep a password" className={styles.password_input} />
      </div>
      <div className={styles.rect}>
        <div className={styles.cedra}>Cedra</div>
        <div>
          <img src="/cedra.png" className={styles.cedra_logo} /> 
        </div>
        <div className={styles.cedrum}>
          <div className={styles.cedrum_logo}>Cedrum</div>
        </div>
      </div>

      <div>
        <MyButton className={styles.unlock_button} href={'/home'}>
          Unlock
        </MyButton> 
      </div>

      <div>
        <MyButton className={styles.forget_button} href={'/reset-wallet'}>
          Forgot password
        </MyButton>
      </div>

      <div>
        <h1 className={styles.help}>Need help?</h1>
      </div>
    </main>
  )
}
