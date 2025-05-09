import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';

const Contact = () => {
  const { language } = useLanguage();

  return (
    <section>
      <h2>{getTranslation('contact', language)}</h2>
      <div className="contact-info">
        <p>
          {getTranslation('email', language)}: c3RldmVsYXVkYXlAZ21haWwuY29t 
          (<a href="https://www.base64decode.org" target="_blank" rel="noopener noreferrer">
            {getTranslation('unveil', language)}
          </a>)
        </p>
      </div>
    </section>
  );
};

export default Contact; 