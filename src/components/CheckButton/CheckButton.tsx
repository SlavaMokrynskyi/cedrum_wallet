'use client';
import React, { useState } from 'react';
import styles from './CheckButton.module.css';
import { CheckButtonProps } from '@/types/types';

export default function CheckButton({}: CheckButtonProps) {
  const [checked, setChecked] = useState(false);

  return (
    <button
      className={styles.checkbox}
      onClick={() => setChecked(!checked)}
    >
      {checked && <span className={styles.checkmark}>✔</span>}
    </button>
  );
}
