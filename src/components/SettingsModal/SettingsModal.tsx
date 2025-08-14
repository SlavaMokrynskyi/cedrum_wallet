'use client'
import React from 'react'
import styles from './SettingsModal.module.css'
import MyButton from '../MyButton/MyButton'

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  if (!isOpen) return null

  return (
    <>
      <div className={styles.settingsModalOverlay} onClick={onClose}></div>
      <div className={styles.settingsModal}>
        <div className={styles.settingsModalHeader}>
          <h1 className={styles.settingsModalTitle}>Settings</h1>
          <button className={styles.settingsCloseButton} onClick={onClose}>
            ×
          </button>
        </div>

        <div className={styles.settingsInputWrapper}>
          <img src="/serch.png" alt="icon" className={styles.settingsInputImage} />
          <input type="text" placeholder="Search" className={styles.settingsSearch} />
        </div>

        <div className={styles.settingsContent}>
          <MyButton className={styles.settingsGlobalButton} href='/general-settings'>
            <img src="/settings.png" alt="icon" className={styles.settingsIcon} />
            <p className={styles.settingsButtonTitle}>General</p>
            <img src="/back_button_reversed.png" alt="icon" className={styles.settingsIconBack} />
          </MyButton>

          <MyButton className={styles.settingsGlobalButton} href='/will-be-yet'>
            <div className={styles.settingsButtonExtensionsDiv}>
              <img src="/extensions.png" alt="icon" className={styles.settingsExtensionsIcon} />
              <p className={styles.settingsButtonTitle}>Extended</p>
              <img src="/back_button_reversed.png" alt="icon" className={styles.settingsIconBack} />
            </div>
          </MyButton>

          <MyButton className={styles.settingsGlobalButton} href='/backup-and-sync'>
            <div className={styles.settingsButtonExtensionsDiv}>
              <img src='/backup_and_sync.png' alt='icon' className={styles.settingsExtensionsIcon} />
              <p className={styles.settingsButtonTitle}>Backup and sync</p>
              <img src='/back_button_reversed.png' alt='icon' className={styles.settingsIconBack} />
            </div>
          </MyButton>

          <MyButton className={styles.settingsGlobalButton} href='/will-be-yet'>
            <div className={styles.settingsButtonExtensionsDiv}>
              <img src='/contacks.png' alt='icon' className={styles.settingsExtensionsIcon} />
              <p className={styles.settingsButtonTitle}>Contacts</p>
              <img src='back_button_reversed.png' alt='icon' className={styles.settingsIconBack} />
            </div>
          </MyButton>

          <MyButton className={styles.settingsGlobalButton} href='/will-be-yet'>
            <div className={styles.settingsButtonExtensionsDiv}>
              <img src='/notifications.png' alt='icons' className={styles.settingsExtensionsIcon} />
              <p className={styles.settingsButtonTitle}>Notifications</p>
              <img src='/back_button_reversed.png' alt='icon' className={styles.settingsIconBack} />
            </div>
          </MyButton>

          <MyButton className={styles.settingsGlobalButton} href='/will-be-yet'>
            <div className={styles.settingsButtonExtensionsDiv}>
              <img src='/security.png' alt='icon' className={styles.settingsExtensionsIcon} />
              <p className={styles.settingsButtonTitle}>Security and privacy</p>
              <img src='/security.png' className={styles.settingsIconBack} alt='icon' />
            </div>
          </MyButton>
        </div>
      </div>
    </>
  )
}
