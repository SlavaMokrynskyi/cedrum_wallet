'use client'
import React from 'react'
import { useState } from 'react'
import styles from './HomeFooter.module.css'
import { tokens } from './tokens'
import TokenItem from '../TokenItem/TokeItem'

export default function HomeFooter() {
    const[isToken,setIsToken] = useState<boolean>(true)
    const[isActivity,setIsActivity] = useState<boolean>(false)
    const[isNFT,setIsNFT] = useState<boolean>(false)

    if(isToken){
        return(
        <div className={styles.body}>
            <div className={styles.buttons_container}>
                <button className={styles.active} onClick={() => {
                    setIsToken(true)
                    setIsActivity(false)
                    setIsNFT(false)
                }}>
                    Tokens
                </button>
                <button onClick={() => {
                    setIsToken(false)
                    setIsActivity(true)
                    setIsNFT(false)
                }}>
                    Activity
                </button>
                <button onClick={() => {
                    setIsToken(false)
                    setIsActivity(false)
                    setIsNFT(true)
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

    else if(isActivity){
        return(
        <div className={styles.body}>
            <div className={styles.buttons_container}>
                <button  onClick={() => {
                    setIsToken(true)
                    setIsActivity(false)
                    setIsNFT(false)
                }}>
                    Tokens
                </button>
                <button className={styles.active} onClick={() => {
                    setIsToken(false)
                    setIsActivity(true)
                    setIsNFT(false)
                }}>
                    Activity
                </button>
                <button onClick={() => {
                    setIsToken(false)
                    setIsActivity(false)
                    setIsNFT(true)
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

    else if(isNFT){
        return(
        <div className={styles.body}>
            <div className={styles.buttons_container}>
                <button onClick={() => {
                    setIsToken(true)
                    setIsActivity(false)
                    setIsNFT(false)
                }}>
                    Tokens
                </button>
                <button onClick={() => {
                    setIsToken(false)
                    setIsActivity(true)
                    setIsNFT(false)
                }}>
                    Activity
                </button>
                <button className={styles.active} onClick={() => {
                    setIsToken(false)
                    setIsActivity(false)
                    setIsNFT(true)
                }}>
                    NFTs
                </button>
            </div>
        </div>
        )
    }

}
