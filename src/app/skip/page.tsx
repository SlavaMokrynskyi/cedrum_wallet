import React from 'react';
import styles from './page.module.css';
import MyButton from '@/components/MyButton/MyButton';
import CheckButton from '@/components/CheckButton/CheckButton';
export default function Page() {
    return (
        <main>
            <div className={styles.body}>
                <div className={styles.rect}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Skip account security?</h1>
                </div>
                
                
                
                <div className={styles.warning_icon_container}>
                    <img src='/warning.png' alt='icon' className={styles.warning_icon} />
                </div>
                <div className={styles.warning}>
                    <div className={styles.check_button_div}>
            <CheckButton/>
          </div >
                    <p className={styles.warning_text}>If you lose this Secret Recovery Phrase, you won't be able to access this wallet.</p>
                    
                </div>
                <div className={styles.buttons}>
                    <MyButton className={styles.secure_now_button} href='/save-recovery-phrase'>
                        Secure now
                    </MyButton>
                    <MyButton className={styles.skip_button} href='/'>
                        Skip
                    </MyButton>
                </div>




                <div className={styles.warning_button}>

                </div>
                


                </div>
            </div>
        </main>
    );
}