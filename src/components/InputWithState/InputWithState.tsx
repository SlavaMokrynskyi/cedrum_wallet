'use client';

import React, { useState } from 'react';
import { InputWithStateProps } from '@/types/types';
import styles from './InputWithState.module.css';

export default function InputWithState({ placeholder }: InputWithStateProps) {
  const [value, setValue] = useState<string>('');

  return (
    <input
      type="password"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      placeholder={placeholder ?? 'password'}
      className={styles.input}
    />
  );
}
