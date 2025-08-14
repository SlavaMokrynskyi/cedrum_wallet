'use client'
import React from 'react'
import { useState } from 'react'
import styles from './HomeFooter.module.css'
import { tokens } from './tokens'
import TokenItem from '../TokenItem/TokeItem'
import NFTCard from '../NFTCard/NFTCard'

export default function HomeFooter() {
    const[btnInfo,setBtnInfo] = useState<string>('tokens')

    if(btnInfo == 'tokens'){
        return(
        <div className={styles.body}>
            <div className={styles.buttons_container}>
                <button className={styles.active} onClick={() => {
                    setBtnInfo('tokens')
                }}>
                    Tokens
                </button>
                <button onClick={() => {
                    setBtnInfo('activity')
                }}>
                    Activity
                </button>
                <button onClick={() => {
                    setBtnInfo('nft')
                }}>
                    NFTs
                </button>
            </div>
            
            <div className={styles.tokens_container}>
                {tokens.map(token => (
                    <TokenItem key={token.id} token={token}/>
                ))}
            </div>

        </div>
        )
    }

    else if(btnInfo == 'activity'){
        return(
        <div className={styles.body}>
            <div className={styles.buttons_container}>
                <button  onClick={() => {
                    setBtnInfo('tokens')
                }}>
                    Tokens
                </button>
                <button className={styles.active} onClick={() => {
                    setBtnInfo('activity')
                }}>
                    Activity
                </button>
                <button onClick={() => {
                    setBtnInfo('nft')
                }}>
                    NFTs
                </button>
            </div>
            <div className={styles.activity_container}>
                <p>Will be yet</p>
            </div>
        </div>
        )
    }

    else if(btnInfo == 'nft'){
        return(
        <div className={styles.body}>
            <div className={styles.buttons_container}>
                <button onClick={() => {
                    setBtnInfo('tokens')
                }}>
                    Tokens
                </button>
                <button onClick={() => {
                    setBtnInfo('activity')
                }}>
                    Activity
                </button>
                <button className={styles.active} onClick={() => {
                    setBtnInfo('nft')
                }}>
                    NFTs
                </button>
            </div>
            <div className={styles.nft_container}>
                <NFTCard count = {6}></NFTCard>
            </div>
        </div>
        )
    }
    else {
        return(
            <div className={styles.body}>
                <p>Something went wrong</p>
            </div>
        )
    }
}
