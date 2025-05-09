import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import profileImage from '../assets/avatarr.png';

export default function About() {
  const { language } = useLanguage();

  const content = {
    zh: {
      title: '关于我',
      intro1: '<b>刘群</b>是斯坦福大学的博士后研究员。他在路易斯安那州立大学获得计算机科学博士学位，专注于深度学习和计算机视觉研究。他的研究兴趣广泛涵盖人工智能、深度学习、计算机视觉、模拟建模和智能系统等领域。',
      intro2: '在学术生涯中，刘群领导并参与了多个研究项目，并与帕洛阿尔托研究中心和洛斯阿拉莫斯国家实验室等机构进行合作。他在顶级会议和期刊上发表了多篇论文，包括 ISBI、RSL、SC、ICADL、IJCNN 等。',
      intro3: '刘群在学术社区也很活跃，担任 PAKDD 和 IEEE SCC 等会议的技术程序委员会委员，以及 Remote Sensing Letters、IEEE TAI、KBS、CCNC、CogSci 等期刊和会议的审稿人。',
      aiNote: '注：以上内容为 AI 基于本站内容的总结'
    },
    en: {
      title: 'About',
      intro1: '<b>Qun Liu</b> is a Postdoctoral Researcher at Stanford University. He received his Ph.D. in Computer Science from Louisiana State University, where he focused on deep learning and computer vision. His research interests broadly cover artificial intelligence, deep learning, computer vision, simulation and modeling, and intelligent systems.',
      intro2: 'During his academic journey, Qun Liu has led and participated in various research projects, and has collaborated with institutions such as Palo Alto Research Center and Los Alamos National Laboratory. He has published multiple papers in top conferences and journals, including ISBI, RSL, SC, ICADL, IJCNN, and more.',
      intro3: 'Qun Liu is also active in the academic community, serving as a technical program committee member for conferences like PAKDD and IEEE SCC, and as a reviewer for journals and conferences such as Remote Sensing Letters, IEEE TAI, KBS, CCNC, CogSci, and others.',
      aiNote: 'Note: The above content is an AI-generated summary based on the website content'
    }
  };

  return (
    <header className="App-header">
      <h1>{content[language].title}</h1>
      <section style={{ display: 'flex', alignItems: 'flex-start', gap: '3rem', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ 
          flex: '0 0 220px',
          position: 'relative',
          padding: '10px',
          background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
          borderRadius: '20px',
          boxShadow: '5px 5px 15px rgba(0,0,0,0.1), -5px -5px 15px rgba(255,255,255,0.8)',
          overflow: 'hidden'
        }}>
          <img 
            src={profileImage} 
            alt="Qun Liu" 
            style={{ 
              width: '100%',
              height: 'auto',
              borderRadius: '15px',
              display: 'block',
              objectFit: 'cover',
              objectPosition: 'center 30%',
              transform: 'scale(1.2)'
            }} 
          />
        </div>
        <div style={{ flex: 1 }}>
          <p dangerouslySetInnerHTML={{ __html: content[language].intro1 }} />
          <p>{content[language].intro2}</p>
          <p>{content[language].intro3}</p>
          <p style={{ 
            fontSize: '0.9em', 
            color: '#666', 
            fontStyle: 'italic',
            marginTop: '20px',
            borderTop: '1px solid #eee',
            paddingTop: '10px'
          }}>
            {content[language].aiNote}
          </p>
        </div>
      </section>
    </header>
  );
} 