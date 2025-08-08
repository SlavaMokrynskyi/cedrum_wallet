import React from 'react'
import styles from './page.module.css';
import MyButton from '@/components/MyButton/MyButton';
export default function page() {
  return (
    <main>
        <div className={styles.body}>
            <div className={styles.menu_div}>
          <MyButton className={styles.menu} href='/settings'>
            <img src='/menu.png' alt='icon' className={styles.menu_icon}/>
          </MyButton>
        </div>
        <div className={styles.line_div}>
          <hr className={styles.line} />
        </div>
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
