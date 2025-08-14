import React from 'react'
import styles from './page.module.css';
import MyButton from '@/components/MyButton/MyButton';
import TopBar from '@/components/TopBar/TopBar';

export default function page() {
  return (
    <main>
      <TopBar />
      <div className={styles.body}>
        <div className={styles.general_title_row}>
          <MyButton className={styles.back_button} href='/settings'>
            <img src='./back_button.png' className={styles.back_button_icon} />
          </MyButton>
        </div>
        <p className={styles.title}>Will be yet(Sorry for the wait)</p>
      </div>
    </main>

  )
}
