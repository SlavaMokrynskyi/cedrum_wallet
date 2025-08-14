'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { recoveryPhrases } from '../RecoveryPhrasesForm/data'
import styles from './RecoveryPhrasesInput.module.css'

export default function RecoveryPhrasesInput() {
    const router = useRouter()
    const [inputValues, setInputValues] = useState<{ [key: number]: string }>({})
    const [errorMessage, setErrorMessage] = useState<string>('')

    const handleInputChange = (id: number, value: string) => {
        setInputValues(prev => ({
            ...prev,
            [id]: value
        }))

        if (errorMessage) {
            setErrorMessage('')
        }
    }

    const handlerOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // Перевіряємо чи всі 12 фраз введені
        const allPhrasesEntered = recoveryPhrases.every(phrase => {
            const inputValue = inputValues[phrase.id] || ''
            return inputValue.trim() !== ''
        })

        if (!allPhrasesEntered) {
            setErrorMessage('Будь ласка, введіть всі фрази відновлення.')
            return
        }

        // Перевіряємо чи всі фрази введені правильно
        const allValid = recoveryPhrases.every(phrase => {
            const inputValue = inputValues[phrase.id] || ''
            return inputValue.toLowerCase().trim() === phrase.phrase.toLowerCase()
        })
        
        if (allValid) {
            console.log('Всі фрази введені правильно!')
            setErrorMessage('')
            router.push('/reset-wallet/create-new-password')
        } else {
            setErrorMessage('Деякі фрази введені неправильно. Будь ласка, перевірте точність вашого введення.')
        }
    }

    const closeError = () => {
        setErrorMessage('')
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handlerOnSubmit} className={styles.form}>
                {recoveryPhrases.map((phrase) => (
                    <div key={phrase.id} className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                            <span className={styles.inputNumber}>{phrase.id}.</span>
                            <input 
                                type="text" 
                                placeholder="..."  
                                value={inputValues[phrase.id] || ''}
                                onChange={(e) => handleInputChange(phrase.id, e.target.value)}
                                className={styles.input}
                                style={{
                                    WebkitAppearance: 'none',
                                    MozAppearance: 'none',
                                    appearance: 'none',
                                    outline: 'none'
                                }}
                            />
                        </div>
                    </div>
                ))}
                <button type="submit" className={styles.submitButton}>
                    Продовжити
                </button>
            </form>

            {errorMessage && (
                <>
                    <div className={styles.errorOverlay} onClick={closeError}></div>
                    <div className={styles.errorMessage}>
                        <div style={{ marginBottom: '15px' }}>{errorMessage}</div>
                        <button 
                            onClick={closeError}
                            style={{
                                background: 'none',
                                border: '1px solid #ff6b6b',
                                color: '#ff6b6b',
                                padding: '8px 16px',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontSize: '12px'
                            }}
                        >
                            Закрити
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
