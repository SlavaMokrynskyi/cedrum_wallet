"use client"
import { useRouter } from 'next/navigation'; 
import styles from './page.module.css';
import React, {useState} from 'react';
import MyButton from '@/components/MyButton/MyButton';
const tokens = [
  { name: 'CED1', symbol: 'CED', balance: '0 CED', subtitle: 'Cedra', price: '$0.00', icon: '/cedra1.png' },
  { name: 'CED2', symbol: 'CED', balance: '0 CED', subtitle: 'Cedra', price: '$0,00', icon: '/cedra2.png' },
  { name: 'CED3', symbol: 'CED', balance: '0 CED', subtitle: 'Cedra', price: '$0.00', icon: '/cedra3.png' },
];
export default function Home() {
    const [selected, setSelected] = useState<string>('USDC');
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Swap to</h1>
      </div>
      <MyButton className={styles.back_button} href="/swap-page">
        <img src="/back_button.png" className={styles.back_button_icon} />
      </MyButton>
      <div className={styles.input_wrapper}>
          <img src="/serch.png" alt="icon" className={styles.input_image} />
          <input type="text" placeholder="Search" className={styles.search} />
        </div>
        <div className={styles.token_list}>
        {tokens.map(token => (
          <button key={token.name}
            className={`${styles.token_button} ${selected === token.name ? styles.token_button_selected : ''}`}
            onClick={() => setSelected(token.name)} type="button">
            <img src={token.icon} alt={token.name} className={styles.token_icon} />
            <div className={styles.token_info}>
              <span className={styles.token_name}>{token.name}
              </span>
              <span className={styles.token_subtitle}>{token.subtitle}
              </span>
            </div>
            {token.balance && (
              <div className={styles.token_balance}>
                <span className={styles.token_balance_amount}>{token.balance}
                </span>
                {token.price && <span className={styles.token_balance_price}>{token.price}
                </span>}
              </div>
            )}
          </button>
        ))}
      </div>
    </main>
  );
}