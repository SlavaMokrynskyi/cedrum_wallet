'use client'
import { recoveryPhrases } from './data'
import styles from './RecoveryPhrasesForm.module.css'
import MyButton from '../MyButton/MyButton'

export default function RecoveryPhrasesDisplay() {
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                {recoveryPhrases.map((phrase) => (
                    <div key={phrase.id} className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                            <span className={styles.inputNumber}>{phrase.id}.</span>
                            <div className={styles.phraseText}>
                                {phrase.phrase}
                            </div>
                        </div>
                    </div>
                ))}
                <MyButton href='/confirm-recovery-phrase' className={styles.submitButton}>
                    Continue
                </MyButton>
            </div>
        </div>
    )
}
