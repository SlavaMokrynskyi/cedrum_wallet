'use client'
import React, { useState } from 'react'
import styles from './TopBar.module.css'
import MyButton from '../MyButton/MyButton'
import Account_btn from '../Account_btn/Account_btn'

export default function TopBar() {
    
  return (
    <div className={styles.body}>
        <div className={styles.top_buttons_container}>
          <div className={styles.market_div}>
            <MyButton className={styles.market} href='/NFT'>
                <img src='/market.png' alt='icon' className={styles.market_icon} />
            </MyButton>
          </div>
          <Account_btn/>
          <div className={styles.menu_div}>
            <MyButton className={styles.menu} href='/settings'>
              <img src='/menu.png' alt='icon' className={styles.menu_icon}/>
            </MyButton>
          </div>
        </div>
        <div className={styles.line_div}>
          <hr className={styles.line} />
        </div>
    </div>
  )
}
