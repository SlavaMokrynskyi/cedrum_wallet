 

import { useRouter } from 'next/navigation'; 
import styles from './page.module.css';
import React from 'react';
import MyButton from '../components/unlock_button'; 

export default function Home() {
  


  return (
    <main className={styles.main}>
      <div>
        <img src="/logo.png" className={styles.logo} /> 
      </div>
      <div className={styles.password}>
        Пароль
      </div>
      <div>
        <input type="password" placeholder="Введіть пароль" className={styles.password_input} />
      </div>
      <div className={styles.rect}>
        <div className={styles.cedra}>Cedra</div>
        <div>
          <img src="/cedra.png" className={styles.cedra_logo} /> 
        </div>
        <div className={styles.cedrum}>
          <div className={styles.cedrum_logo}>Cedrum</div>
        </div>
      </div>

      <div>
        <MyButton
          className={styles.unlock_button} 
        >
          Розблокувати
        </MyButton> 
      </div>

      <div>
        <button
          className={styles.forget_button}
        >
          Забули пароль?
        </button>
      </div>

      <div>
        <h1 className={styles.help}>Потрібна допомога?</h1>
      </div>
    </main>
  );
}

 
 