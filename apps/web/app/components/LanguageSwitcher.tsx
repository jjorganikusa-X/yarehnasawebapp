'use client';

import { useState, useEffect, useRef } from 'react';

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState('ID');
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const languageSwitcherRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Only run on client side
    const handleClickOutside = (event: MouseEvent) => {
      if (languageSwitcherRef.current && !languageSwitcherRef.current.contains(event.target as Node)) {
        setLanguageMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const changeLanguage = (lang: string) => {
    const langNames: { [key: string]: string } = {
      'id': 'ID',
      'en': 'EN',
      'jp': 'JP',
      'nl': 'NL',
      'de': 'DE'
    };
    setCurrentLang(langNames[lang]);
    setLanguageMenuOpen(false);
    console.log('Language changed to:', lang);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg">
        <i className="ph-fill ph-globe text-xl text-gray-600"></i>
        <span className="text-sm font-medium text-gray-700">ID</span>
        <i className="ph ph-caret-down text-sm text-gray-600"></i>
      </div>
    );
  }

  return (
    <div ref={languageSwitcherRef} className="relative language-switcher">
      <button onClick={toggleLanguageMenu} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
        <i className="ph-fill ph-globe text-xl text-gray-600"></i>
        <span className="text-sm font-medium text-gray-700">{currentLang}</span>
        <i className="ph ph-caret-down text-sm text-gray-600"></i>
      </button>
      <div className={`${languageMenuOpen ? '' : 'hidden'} absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[200px] z-50`}>
        <button onClick={() => changeLanguage('id')} className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors">
          <span className="text-2xl">🇮🇩</span>
          <span className="text-sm font-medium text-gray-700">Bahasa Indonesia</span>
        </button>
        <button onClick={() => changeLanguage('en')} className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors">
          <span className="text-2xl">🇺🇸</span>
          <span className="text-sm font-medium text-gray-700">English (USA)</span>
        </button>
        <button onClick={() => changeLanguage('jp')} className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors">
          <span className="text-2xl">🇯🇵</span>
          <span className="text-sm font-medium text-gray-700">日本語 (Japanese)</span>
        </button>
        <button onClick={() => changeLanguage('nl')} className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors">
          <span className="text-2xl">🇳🇱</span>
          <span className="text-sm font-medium text-gray-700">Nederlands (Dutch)</span>
        </button>
        <button onClick={() => changeLanguage('de')} className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors">
          <span className="text-2xl">🇩🇪</span>
          <span className="text-sm font-medium text-gray-700">Deutsch (German)</span>
        </button>
      </div>
    </div>
  );
}
