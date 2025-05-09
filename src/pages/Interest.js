import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Interest() {
  const { language } = useLanguage();

  const content = {
    zh: {
      title: '研究兴趣',
      intro: '总的来说，我对人工智能的所有领域都感兴趣，特别是深度学习和计算机视觉。除此之外，在日常生活中，我喜欢打乒乓球、滑冰、绘画、攀岩和体验冒险。我也偶尔学习和练习摄影 =.='
    },
    en: {
      title: 'Interest',
      intro: 'Generally, I am interested in all the fields in artificial intelligence, especially in deep learning and computer vision. Besides that, in my daily, I enjoy playing ping-pong, skating, drawing, climbing, and experiencing adventures. I am learning and practicing photography occasionally =.='
    }
  };

  return (
    <header className="App-header">
      <h1>{content[language].title}</h1>
      <section>
        <p>{content[language].intro}</p>
      </section>
    </header>
  );
} 