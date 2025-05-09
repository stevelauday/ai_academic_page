import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <div style={{marginBottom: '6px'}}>
        {getTranslation('email', language)}: c3RldmVsYXVkYXlAZ21haWwuY29t 
        (<a href="https://www.base64decode.org" target="_blank" rel="noopener noreferrer">
          {getTranslation('unveil', language)}
        </a>)
      </div>
      <div style={{marginBottom: '6px'}}>
        {language === 'zh' ? (
          <>本站由AI参考<a href="https://laudays.com" target="_blank" rel="noopener noreferrer">Laudays.com</a>生成</>
        ) : (
          <>This site is AI-generated based on <a href="https://laudays.com" target="_blank" rel="noopener noreferrer">Laudays.com</a></>
        )}
      </div>
      <div>
        {getTranslation('copyright', language)} © 2025 Qun Liu's AI Assistant
      </div>
    </footer>
  );
};

export default Footer; 