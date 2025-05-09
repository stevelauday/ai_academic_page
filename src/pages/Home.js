import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';
import './Home.css';

export default function Home() {
  const { language } = useLanguage();

  const content = {
    zh: {
      greeting: '你好，我是刘群 :)',
      intro1: '我曾就读于路易斯安那州立大学计算机科学系，在 Supratik Mukhopadhyay 博士的指导下完成了我的博士论文（2020年），专注于深度学习和计算机视觉领域。在此期间，我也积极参与并领导了多个项目。',
      intro2: '在此之前，在攻读硕士学位期间，我的研究主要集中在模拟和建模、概率图模型、智能系统等领域。',
      intro3: '此外，作为实习生和访问学者，我很幸运能够在学习期间与帕洛阿尔托研究中心（2020年）和洛斯阿拉莫斯国家实验室（2019年夏季）进行合作研究。'
    },
    en: {
      greeting: 'Hi, I\'m Qun :)',
      intro1: 'I was affilated with the Department of Computer Science, Louisiana State University, Baton Rouge, worked with Dr. Supratik Mukhopadhyay on my Ph.D. dissertation accomplished in 2020, focused on deep learning and computer vision. During the period, I also actively led and participated in various projects.',
      intro2: 'Before that, when I was pursuing my master, I dedicated my research efforts into the areas of simulation and modeling, probabilistic graphical models, intelligent systems etc.',
      intro3: 'Alternatively, as an intern and visiting scholar, I was very fortunate to work and collaborate with Palo Alto Research Center (2020) and Los Alamos National Laboratory (Summer 2019) during my study.'
    }
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">{getTranslation('welcome', language)}</h1>
        <div className="home-text">
          <h2>{content[language].greeting}</h2>
          <p>{content[language].intro1}</p>
          <p>{content[language].intro2}</p>
          <p>{content[language].intro3}</p>
        </div>
      </div>
    </div>
  );
} 