'use client'
import React , {useState} from 'react'
import styles from './Account_btn.module.css'
import ChangeAccountModal from '../ChangeAccountModal/ChangeAccountModal'

export default function Account_btn() {
    const [modalActive, setModalActive] = useState<boolean>(false)

    const copyAddress = () => {
        navigator.clipboard.writeText('WE4RL...TH6CU');
      };

    return (
        <div>
            <div className={styles.account_div} onClick={() => setModalActive(prev => !prev)}>
                <div className={styles.account_info_container}>
                    <div className={styles.account_left}>
                        <div className={styles.account_avatar}></div>
                        <div className={styles.account_text}>
                            <h5 className={styles.account_name}>will_cher</h5>
                            <div className={styles.address_container}>
                                <p 
                                className={styles.account_address} 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    copyAddress();
                                    }}
                                    style={{ cursor: 'pointer' }}
                                    >
                                WE4RL...TH6CU
                                </p>
                                <button 
                                className={styles.copy_button} 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    copyAddress();
                                    }}
                                    >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.account_arrow}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="6,9 12,15 18,9"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
      <ChangeAccountModal active={modalActive} setActive={setModalActive}/>
    </div>
    )
}
