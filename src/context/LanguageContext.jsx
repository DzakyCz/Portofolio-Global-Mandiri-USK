'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'gmu-language';

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('id');

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'id' || stored === 'en') setLanguage(stored);
  }, []);

  const toggleLanguage = () => {
    setLanguage((current) => {
      const next = current === 'id' ? 'en' : 'id';
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
