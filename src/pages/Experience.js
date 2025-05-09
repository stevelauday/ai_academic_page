import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Experience() {
  const { language } = useLanguage();

  const content = {
    zh: {
      title: '经历',
      work: {
        title: '工作经历',
        experiences: [
          '博士后研究员，斯坦福大学，2020年至今',
          '实习生，帕洛阿尔托研究中心，2020年',
          '访问学者，洛斯阿拉莫斯国家实验室，2019年夏季'
        ]
      },
      education: {
        title: '教育经历',
        experiences: [
          '博士，计算机科学，路易斯安那州立大学，2020年',
          '硕士，计算机科学，特洛伊大学，2016年'
        ]
      }
    },
    en: {
      title: 'Experience',
      work: {
        title: 'Work Experience',
        experiences: [
          'Postdoctoral Researcher, Stanford University, 2020 - Present',
          'Intern, Palo Alto Research Center, 2020',
          'Visiting Scholar, Los Alamos National Laboratory, Summer 2019'
        ]
      },
      education: {
        title: 'Education',
        experiences: [
          'Ph.D. in Computer Science, Louisiana State University, 2020',
          'M.S. in Computer Science, Troy University, 2016'
        ]
      }
    }
  };

  return (
    <header className="App-header">
      <h1>{content[language].title}</h1>
      <section>
        <h2>{content[language].work.title}</h2>
        <ul>
          {content[language].work.experiences.map((exp, index) => (
            <li key={index}>{exp}</li>
          ))}
        </ul>
        <h2>{content[language].education.title}</h2>
        <ul>
          {content[language].education.experiences.map((exp, index) => (
            <li key={index}>{exp}</li>
          ))}
        </ul>
      </section>
    </header>
  );
} 