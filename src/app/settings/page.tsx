
import React from 'react';
import styles from './page.module.css';
import MyButton from '@/components/MyButton/MyButton';

export default function Page() {
  return (
    <main>
      <div className={styles.body}>
       <div>
        
       </div>
      <div>
        <MyButton className={styles.menu_button} href=''>
        <img src='/menu.png' alt='icon' className={styles.icon_menu}/>
        </MyButton>
      </div>
        <div className={styles.line_div}>
        <hr className={styles.line} />
      </div>
      <div>
        <MyButton className={styles.back_button} href='/home'>
          <img src='/back.png' alt='icon' className={styles.icon_back_to_menu}/>
          
        </MyButton>
      </div>
        <div>
          <h1 className={styles.title_setting}>Settings</h1>
        </div>
      
        <div className={styles.input_wrapper}>
          <img src="/serch.png" alt="icon" className={styles.input_image} />
          <input type="text" placeholder="Search" className={styles.search} />
        </div>

        <div>
            <MyButton className={styles.global_button} href='/general-settings'>
              <img src="/settings.png" alt="icon" className={styles.icon_setting} />
              <p className={styles.setting_button_title}>General</p>
              <img src="/back_button_reversed.png" alt="icon" className={styles.icon_back} />
            </MyButton>

        </div>

        <div>
        <MyButton className={styles.global_button} href=''>
            <div className={styles.button_extensions_div}>
              <img src="/extensions.png" alt="icon" className={styles.extensions_icon} />
              <p className={styles.setting_button_title}>Extended</p>
              <img src="/back_button_reversed.png" alt="icon"  className={styles.icon_back}/>
            </div>
        </MyButton>

      </div>
      <div>
          <MyButton className={styles.global_button} href=''>
            <div className={styles.button_extensions_div}>
              <img src='/backup_and_sync.png' alt='icon' className={styles.extensions_icon}/>
              <p className={styles.setting_button_title}>Backup and sync</p>
              <img src='/back_button_reversed.png' alt='icon' className={styles.icon_back}/>
            </div>
          </MyButton>
      </div>
      <div>
        <MyButton className={styles.global_button} href=''>
          <div className={styles.button_extensions_div}>
            <img src='/contacks.png' alt='icon'className={styles.extensions_icon}/>
            <p className={styles.setting_button_title}>Contacts</p>
            <img src='back_button_reversed.png' alt='icon' className={styles.icon_back}/>
          </div>
        </MyButton>
      </div>
      <div>
        <MyButton className={styles.global_button} href=''>
          <div className={styles.button_extensions_div}>
            <img  src='/notifications.png' alt='icons' className={styles.extensions_icon}/>
            <p className={styles.setting_button_title}>Notifications</p>
            <img src='/back_button_reversed.png' alt='icon' className={styles.icon_back} />
          </div>
        </MyButton>
      </div>
      <div>
        <MyButton className={styles.global_button} href=''>
          <div className={styles.button_extensions_div}>
            <img src='/security.png' alt='icon' className={styles.extensions_icon}/>
            <p className={styles.setting_button_title}>Security and privacy</p>
            <img src='/back_button_reversed.png' className={styles.icon_back} alt='icon'/>
          </div>
        </MyButton>
      </div>
      </div>
    </main>
  );
}
