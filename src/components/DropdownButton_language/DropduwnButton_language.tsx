'use client';
import React, { useState } from 'react';
import { LanguageOption } from '@/types/types';
import './DropduwnButton_language.css'; // або './DropdownButton_language.css' якщо там була помилка

const languageOptions: LanguageOption[] = [
  { code: 'UA', name: 'Українська мова' },
  { code: 'EN', name: 'English' },
];

export default function DropdownButton_language() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<LanguageOption>(languageOptions[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option: LanguageOption) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selected.name}
        <span className="arrow">▾</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {languageOptions.map((option) => (
            <li
              key={option.code}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
