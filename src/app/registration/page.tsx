import React from 'react'
import styles from './page.module.css';
import MyButton from '@/components/MyButton/MyButton';


export default function page() {
  return (
    <main>
        <div className={styles.body}>
            <div>
                <img src="/logo.png" className={styles.logo} /> 
            </div>
            <div>
                <p className={styles.title}>Let`s roll!</p>
            </div>
            <div>
                <MyButton className={styles.create_button} href={'/home'}>
                    Create a new wallet
                </MyButton> 
            </div>
            <div>
                <MyButton className={styles.import_button} href={'/home'}>
                    Import using Secret Recovery Phrase
                </MyButton> 
            </div>
        </div>
    </main>
  )
}
