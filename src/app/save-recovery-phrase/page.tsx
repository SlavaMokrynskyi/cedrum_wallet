import React from 'react'
import styles from './page.module.css';
import MyButton from '@/components/MyButton/MyButton';


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
            <p className={styles.title_step}>Step 2 of 3</p>
        </div>
        <div className={styles.title_big_div}>
          <p className={styles.title_big}>Save your Secret<br/> Recovery Phrase</p>
        </div>
        <div className={styles.title_small_div}>
          <p className={styles.title_small}>This is your Secret Recovery Phrase. Write it down in the correct order and keep it safe. If someone has your Secret Recovery Phrase, they can access your wallet.</p>
        </div>
        <div className={styles.title_small_div}>
          <p className={styles.title_small}>Don't share it with anyone, ever.</p>
        </div>
        <div className={styles.later_button_div}>
          <MyButton className={styles.later_button} href='/'>
            <p >Continue</p>
          </MyButton>
        </div>
        </div>
    </main>
  )
}
