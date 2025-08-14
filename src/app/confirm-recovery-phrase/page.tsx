import React from 'react'
import styles from './page.module.css';
import MyButton from '@/components/MyButton/MyButton';
import RecoveryPhrasesForm from '@/components/RecoveryPhrasesForm/RecoveryPhrasesForm';

export default function page() {
  return (
    <main>
        <div className={styles.body}>
          <div className={styles.back_div}>
            <MyButton className={styles.back_button} href='/secure-your-wallet'>
              <img src='./back_button.png' className={styles.back_button_icon} />
            </MyButton>
          </div>
          <div className={styles.title_div}>
              <p className={styles.title_step}>Step 3 of 3</p>
          </div>
          <div className={styles.title_big_div}>
            <p className={styles.title_big}>Confirm your Secret<br/> Recovery Phrase</p>
          </div>
          <div className={styles.title_small_div}>
            <p className={styles.title_small}>Select the missing words in the correct order.</p>
          </div>
          <RecoveryPhrasesForm />
        </div>
    </main>
  )
}