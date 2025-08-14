import React from 'react'
import styles from './ChangeAccountModal.module.css'

export default function ChangeAccountModal({active,setActive}:{active:boolean,setActive:React.Dispatch<React.SetStateAction<boolean>>}) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setActive(false);
    }
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      className={active ? styles.modal_active : styles.modal} 
      onClick={handleBackdropClick}
    >
        <div className={styles.modal_content} onClick={handleContentClick}>
            <div className={styles.modal_header}>
                <h2>Accounts</h2>
            </div>
            <div className={styles.modal_body}>
                <div className={styles.account_item}>
                    <div className={styles.account_avatar}></div>
                    <div className={styles.account_info}>
                        <h5>Account 1</h5>
                        <p>WE4RL...TH6CU</p>
                    </div>
                    <div className={styles.account_amount}>
                        <p>$0.000</p>
                    </div>
                </div>
                
            </div>
            <div className={styles.modal_footer}>
                <button className={styles.modal_footer_button}>
                    <p>Add New Account</p>
                </button>
            </div>
        </div>
    </div>
  )
}
