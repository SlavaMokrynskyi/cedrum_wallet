import React from 'react'
import { TokenItemProps } from '@/types/types'
import styles from './TokenItem.module.css'

export default function TokenItem({token} : TokenItemProps) {
  return (
    <div className={styles.token_card}>
        <div className={styles.token_info}>
            <div className={styles.token_avatar}></div>
            <div>
                <h4>{token.token_name}</h4>
                <p className={styles.token_growth}>{token.token_daily_growth}%</p>
            </div>
        </div>
        <div className={styles.token_price}>
            <h5>{token.token_price.toFixed(2)} USD</h5>
            <p>{token.token_amount}</p>
        </div>
    </div>
  )
}
