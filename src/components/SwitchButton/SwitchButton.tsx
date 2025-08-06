'use client';
import React, { useState } from 'react';
import './SwitchButton.css';

export default function SwitchButton() {
  const [isOn, setIsOn] = useState(false);

  const switchButton = () => setIsOn(!isOn);

  return (
    <div className={`toggle-switch ${isOn ? 'on' : ''}`} onClick={switchButton}>
      <div className="toggle-circle" />
    </div>
  );
}