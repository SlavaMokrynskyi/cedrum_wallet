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
        </div>
    </main>
  )
}
