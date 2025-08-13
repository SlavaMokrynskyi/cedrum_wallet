"use client"
import { useRouter } from 'next/navigation'; 
import styles from './page.module.css';
import React, {useState} from 'react';
import MyButton from '@/components/MyButton/MyButton';
const networks = [
  { name: 'Ethereum', icon: '/eth_icon.png' },
  { name: 'Base', icon: '/base_icon.png' }, 
  { name: 'Solana', icon: '/solana_icon.png' },
  { name: 'Avalanche', icon: '/avax_icon.png' },
];
export default function Home() {
    const [selected, setSelected] = useState<string>('');
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Bridge to</h1>
      </div>
      <MyButton className={styles.back_button} href="/bridge-page">
        <img src="/back_button.png" className={styles.back_button_icon} />
      </MyButton>
      <div className={styles.network_list}>
        {networks.map((net) => (
          <button
            key={net.name}
            className={`${styles.network_button} ${selected === net.name ? styles.selected : ''}`}
            onClick={() => setSelected(net.name)}
            type="button"
          >
            <span className={styles.icon_box}>
              <img src={net.icon} alt={net.name} className={styles.network_icon} />
            </span>
            <span className={styles.network_name}>{net.name}</span>
          </button>
        ))}
      </div>
    </main>
  );
}