import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';

const Navbar = () => {
  const { language } = useLanguage();

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">{getTranslation('home', language)}</Link></li>
        <li><Link to="/about">{getTranslation('about', language)}</Link></li>
        <li><Link to="/interest">{getTranslation('interest', language)}</Link></li>
        <li><Link to="/experience">{getTranslation('experience', language)}</Link></li>
        <li><Link to="/publications">{getTranslation('publications', language)}</Link></li>
        <li><Link to="/activities">{getTranslation('activities', language)}</Link></li>
        <li><Link to="/contact">{getTranslation('contact', language)}</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar; 