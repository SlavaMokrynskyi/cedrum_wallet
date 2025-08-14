import React from 'react'
import MyButton from '../MyButton/MyButton'
import styles from './NFTCard.module.css'

export default function NFTCard({count} : {count : number}) {
  return (
    <div className={styles.body}>
      {Array.from({ length: count }).map((_, i) => (
        <div className={styles.cardContainer} key={i}>
          <MyButton href='/NFT-component' className={styles.card}>
            <div className={styles.cardImage}></div>
            <p className={styles.cardTitle}>7777777 #{i}</p>
            <p className={styles.cardPrice}>0,000 USD</p>
          </MyButton>
        </div>
      ))}
    </div>
  )
}
