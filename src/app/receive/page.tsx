import Link from 'next/link';
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
            <img src='./back_button.png' className={styles.back_button_icon} />
          </MyButton>
      </div>
      <div className={styles.qr_code_container}>
        <img src="/qr.png" alt="icon" className={styles.qr_code} />
      </div>
      <div>

        <p className={styles.address_text}>
            <Link href="https://discord.gg/Wg4Hws85" target="_blank">
              <span style={{ color: 'blue', textDecoration: 'underline' }}>
                Discord
              </span>
            </Link>
         </p>
      </div>
      </div>
    </main>
  );
}
