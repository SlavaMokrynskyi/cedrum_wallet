import React from 'react'
import styles from './page.module.css';
import MyButton from '@/components/MyButton/MyButton'
import BackupSwitch from '@/components/SwichButtonBackup/SwitchButton';


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
          <h1 className={styles.title_general}>Backup and sync</h1>
        </div>
        
        <div className={styles.input_wrapper}>
          <img src="/serch.png" alt="icon" className={styles.input_image} />
          <input type="text" placeholder="Search" className={styles.search} />
        </div>
        <div >
          <p className={styles.native_token_title}>Turn on backup and sync</p>
        <div className={styles.switch_button}>
          <BackupSwitch/>
        </div>
        </div>
        </div>
    </main>
  )
}
