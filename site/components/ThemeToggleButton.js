'use client'
// React example
import React, { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState('mytheme');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setCurrentTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'mytheme' ? 'mytheme_dark' : 'mytheme';
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button onClick={toggleTheme}>Change to {currentTheme ? 'Light' : 'Dark'} Theme</button>
  );
};

export default ThemeSwitcher;
