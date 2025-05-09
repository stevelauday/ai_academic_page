import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Activities() {
  const { language } = useLanguage();

  const content = {
    zh: {
      title: '学术活动',
      tpc: '技术程序委员会',
      tpcItems: [
        '亚太知识发现与数据挖掘会议（PAKDD），2020年，2021年',
        'IEEE 服务计算国际会议（SCC），2020年'
      ],
      reviewing: '论文审稿',
      reviewingItems: [
        '国际遥感期刊',
        'IEEE 人工智能汇刊',
        'IEEE 学习技术汇刊',
        '基于知识的系统',
        '遥感快报',
        '工程中的数学问题',
        'IEEE 世界服务大会（SERVICES）',
        'IEEE 消费者通信与网络会议（CCNC）',
        '认知科学学会年会（CogSci）',
        'IEEE 计算智能研讨会系列（SSCI）',
        '欧洲机器学习会议和知识发现与数据挖掘原理与实践会议（ECML-PKDD）',
        'SIAM 数据挖掘国际会议（SDM）',
        '医学图像计算与计算机辅助干预国际会议（MICCAI）'
      ]
    },
    en: {
      title: 'Activities',
      tpc: 'Technical Program Committee',
      tpcItems: [
        'Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD), 2020, 2021',
        'IEEE International Conference on Services Computing (SCC), 2020'
      ],
      reviewing: 'Paper Reviewing',
      reviewingItems: [
        'International Journal of Remote Sensing',
        'IEEE Transactions on Artificial Intelligence',
        'IEEE Transactions on Learning Technologies',
        'Knowledge-Based Systems',
        'Remote Sensing Letters',
        'Mathematical Problems in Engineering',
        'IEEE World Congress on Services (SERVICES)',
        'IEEE Consumer Communications & Networking Conference (CCNC)',
        'Annual Meeting of the Cognitive Science Society (CogSci)',
        'IEEE Symposium Series on Computational Intelligence (SSCI)',
        'European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases (ECML-PKDD)',
        'SIAM International Conference on Data Mining (SDM)',
        'International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI)'
      ]
    }
  };

  return (
    <header className="App-header">
      <h1>{content[language].title}</h1>
      <section>
        <h3>{content[language].tpc}</h3>
        <ul>
          {content[language].tpcItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3>{content[language].reviewing}</h3>
        <ul>
          {content[language].reviewingItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </header>
  );
} 