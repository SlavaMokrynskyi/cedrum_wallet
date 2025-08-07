import React from 'react';
import styles from './page.module.css';
import MyButton from '@/components/MyButton/MyButton';
import DropdownButton from '@/components/DropdownButton_currency/DropdownButton';
import DropdownButtonLanguage from '@/components/DropdownButtonLanguage/DropdownButtonLanguage';
import ToggleSwitch from '@/components/SwitchButtonToken/SwitchButton';


export default function Page() {
  return (
    <main>
      <div className={styles.body}>
        <div className={styles.menu_div}>
          <MyButton className={styles.menu} href='/settings'>
            <img src='/menu.png' alt='icon' className={styles.menu_icon}/>
          </MyButton>
        </div>
        <div className={styles.line_div}>
          <hr className={styles.line} />
        </div>

        <div className={styles.general_title_row}>
          <MyButton className={styles.back_button} href='/settings'>
            <img src='./back_button.png' className={styles.back_button_icon} />
          </MyButton>
          <h1 className={styles.title_general}>General</h1>
        </div>

        <div className={styles.input_wrapper}>
          <img src="/serch.png" alt="icon" className={styles.input_image} />
          <input type="text" placeholder="Search" className={styles.search} />
        </div>

        <div>
          <h2 className={styles.title_exchange}>Currency exchange</h2>
        </div>

        <div className={styles.dropdownButton_div}>
          <DropdownButton />
        </div>
        
        <div >
          <p className={styles.native_token_title}>Show native token  as main balance</p>
        <div className={styles.switch_button}>
          <ToggleSwitch/>
        </div>
        </div>
        <div>
          <p className={styles.language_title}>Current language</p>
        </div>

        <div className={styles.dropdownButton_div}>
          <DropdownButtonLanguage />
        </div>

        
      </div>
    </main>
  );
}
