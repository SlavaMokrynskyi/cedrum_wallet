import React from 'react'
import styles from './page.module.css';
import MyButton from '@/components/MyButton/MyButton'
import BackupSwitch from '@/components/SwichButtonBackup/SwichButton';
import TopBar from '@/components/TopBar/TopBar';
import Link from 'next/link';

export default function page() {
  return (
    <main>
      <div className={styles.body}>
        <TopBar/>

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
        
        <div>
          <p className={styles.native_token_title}>Turn on backup and sync</p>
          <div className={styles.switch_button}>
            <BackupSwitch/>
          </div>
        </div>
        
        <div>
          <p className={styles.text}>
            Backup and sync lets us store encrypted data for your custom settings and features.
            This keeps your MetaMask experience the same across devices and restores settings and features if you ever need to reinstall MetaMask.
            This doesn't back up your Secret Recovery Phrase.
          </p>
        </div>
        
        <p className={styles.address_text}>
          <Link href="" target="_blank">
            <span style={{ color: 'blue', textDecoration: 'underline' }}>
              Learn how we protect your privacy.
            </span>
          </Link>
        </p>
        
        <div className={styles.line1}></div>
        
        <div>
          <p className={styles.text_1}>Manage what you sync</p>
        </div>
        
        <div>
          <p className={styles.text_2}>Turn on what&apos;s synced between your devices.</p>
        </div>
        
        <div className={styles.Contacts}>
          <img src="contacks.png" alt="icon" className={styles.contacts_icon} />
          <p className={styles.contacts_text}>Contacts</p>
          <div className={styles.switch_button_contacts}>
            <BackupSwitch/>
          </div>
        </div>
      </div>
    </main>
  )
}
