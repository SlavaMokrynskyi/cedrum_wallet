'use client';
import React, { useState } from 'react';
import { CurrencyOption } from '@/types/types';
import './DropdownButton.css';

const currencyOptions: CurrencyOption[] = [
  { code: 'USD', name: 'United States Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'UAH', name: 'Ukrainian Hryvnia' },
];

export default function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<CurrencyOption>(currencyOptions[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: CurrencyOption) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="currency-selector">
      <button className="selector-button" onClick={toggleDropdown}>
        {selected.code} - {selected.name}
        <span className="arrow">▾</span>
      </button>
      {isOpen && (
        <ul className="dropdown">
          {currencyOptions.map((option) => (
            <li
              key={option.code}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option.code} - {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
