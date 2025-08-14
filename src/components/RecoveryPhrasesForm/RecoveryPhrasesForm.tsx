'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { recoveryPhrases } from './data'
import styles from './RecoveryPhrasesForm.module.css'

export default function RecoveryPhrasesForm() {
    const router = useRouter()
    const [inputValues, setInputValues] = useState<{ [key: number]: string }>({})
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [randomIds, setRandomIds] = useState<number[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const generateRandomIds = () => {
            const numbers: number[] = []
            while (numbers.length < 3) {
                const randomNum = Math.floor(Math.random() * 12) + 1
                if (!numbers.includes(randomNum)) { 
                    numbers.push(randomNum)
                }
            }
            setRandomIds(numbers)
            setIsLoading(false)
        }
        
        generateRandomIds()
    }, [])

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

        const allValid = randomIds.every(id => {
            const phrase = recoveryPhrases.find(p => p.id === id)
            if (!phrase) return false
            
            const inputValue = inputValues[id] || ''
            return inputValue.toLowerCase() === phrase.phrase.toLowerCase()
        })
        
        if (allValid) {
            console.log('Всі фрази введені правильно!')
            setErrorMessage('')
            router.push('/unlock-page')
        } else {
            setErrorMessage('Some phrases are entered incorrectly. Please check the accuracy of your input.')
        }
    }

    const closeError = () => {
        setErrorMessage('')
    }

    if (isLoading) {
        return (
            <div className={styles.container}>
                <div style={{ color: '#ffffff', textAlign: 'center' }}>
                    Loading...
                </div>
            </div>
        )
    }
  
    return (
        <div className={styles.container}>
            <form onSubmit={handlerOnSubmit} className={styles.form}>
                {recoveryPhrases.map((phrase) => (
                    <div key={phrase.id} className={styles.inputGroup}>
                        {randomIds.includes(phrase.id) ? (
                            <div className={styles.inputWrapper}>
                                <span className={styles.inputNumber}>{phrase.id}.</span>
                                <input 
                                    type="text" 
                                    placeholder="......."  
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
                        ) : (
                            <div className={styles.inputWrapper}>
                                <span className={styles.inputNumber}>{phrase.id}.</span>
                                <div className={styles.phraseText}>
                                    {phrase.phrase}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                <button type="submit" className={styles.submitButton}>
                    Continue
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
                            Close
                        </button>
                    </div>
                </>
            )}
        </div>
  )
}