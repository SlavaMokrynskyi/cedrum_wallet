import React from 'react'
import styles from './page.module.css';
import MyButton from '@/components/MyButton/MyButton';
import InputWithState from '@/components/InputWithState/InputWithState';

import RecoveryPhrasesInput from '@/components/RecoveryPhrasesInput/RecoveryPhrasesInput';

export default function page() {
  return (
    <main>
        <div className={styles.body}>
            <div className={styles.back_div}>
          <MyButton className={styles.back_button} href='/'>
            <img src='./back_button.png' className={styles.back_button_icon} />
          </MyButton>
        </div>
        <div className={styles.big_title_div}>
            <p className={styles.big_title}>Reset wallet</p>
        </div>
        <div className={styles.small_title_div}>
            <p className={styles.small_title}>To reset your wallet, enter your Secret Recovery Phrase. This will:<br/>
                                              Delete your current wallet from the device<br/>
                                              Restore accounts with balances<br/>
                                              Require you to re-add imported accounts and custom tokens<br/>
                                              Warning: This cannot be undone. Use the correct phrase.</p>
        </div>
        <div className={styles.rectangle}>
            I have a 12-word phrase
            </div>
        <div className={styles.global_title_div}>
        <p className={styles.global_title}>Secret Recovery Phraset</p>
        </div>
        <RecoveryPhrasesInput></RecoveryPhrasesInput>
        
        </div>
    </main>
  )
}
