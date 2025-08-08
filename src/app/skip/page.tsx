import React from 'react';
import styles from './page.module.css';
import MyButton from '@/components/MyButton/MyButton';
export default function Page() {
    return (
        <main>
            <div className={styles.body}>
                <div className={styles.rect}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Skip account security?</h1>
                </div>
                
                
                <div>
                    <MyButton className={styles.back_button} href='/home'>
                    <img src='/back.png' alt='icon' className={styles.icon_back_to_menu}/>
                    </MyButton>
                </div>
                <div className={styles.warning_icon_container}>
                    <img src='/warning.png' alt='icon' className={styles.warning_icon} />
                </div>
                <div className={styles.warning}>
                    <p className={styles.warning_text}>Skipping account security is not recommended. You will not be able to recover your account if you lose access.</p>
                </div>
                <div className={styles.buttons}>
                    <MyButton className={styles.secure_now_button} href='/Recovery_Phrase'>
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