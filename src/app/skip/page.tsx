import React from 'react';
import styles from './page.module.css';
import MyButton from '@/components/MyButton/MyButton';
export default function Page() {
    return (
        <main>
            <div className={styles.body}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Skip account security?</h1>
                </div>
                <div>
                    <MyButton className={styles.back_button} href='/home'>
                    <img src='/back.png' alt='icon' className={styles.icon_back_to_menu}/>
                    </MyButton>
                </div>
                <div className={styles.warning}>
                    <p className={styles.warning_text}>Skipping account security is not recommended. You will not be able to recover your account if you lose access.</p>
                </div>
                
            </div>
        </main>
    );
}