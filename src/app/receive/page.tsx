
import React from 'react';
import styles from './page.module.css';
import MyButton from '@/components/MyButton/MyButton';

export default function Page() {
  return (
    <main>
      <div className={styles.body}>
      <div className={styles.header}>
        <h1 className={styles.title}>Receive</h1>
      </div>
      <div>
        <MyButton className={styles.back_button} href='/home'>
          <img src='/back.png' alt='icon' className={styles.icon_back_to_menu}/>
          
        </MyButton>
      </div>
      <div className={styles.qr_code_container}>
        <img src="/qr.png" alt="icon" className={styles.qr_code} />
      </div>
      <div>
        <div className={styles.address_container}>
          <p className={styles.address_text}>Discord</p>
          <img src="/copy.png" alt="icon" className={styles.copy_icon} />
        </div>
      </div>
      </div>
    </main>
  );
}
