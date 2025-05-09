import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Publications() {
  const { language } = useLanguage();

  const content = {
    zh: {
      title: '发表论文',
      publications: [
        {
          text: '基于单次学习框架的心肌梗死二次谐波生成图像中纤维胶原蛋白评估，<b>刘群</b>，Supratik Mukhopadhyay，Maria Ximena Bastidas Rodriguez 等，发表于 IEEE 生物医学成像国际研讨会（ISBI 2020）',
          link: 'https://ieeexplore.ieee.org/document/9098565'
        },
        {
          text: 'DeepSat V2：用于卫星图像分类的特征增强卷积神经网络，<b>刘群</b>，Saikat Basu，Sangram Ganguly 等，发表于遥感快报（RSL），2019年',
          link: 'https://www.tandfonline.com/doi/full/10.1080/2150704X.2019.1693071'
        },
        {
          text: '基于深度学习的复杂物理模拟特征感知数据建模，<b>刘群</b>，Subhashis Hazarika，John Patchett 等，发表于高性能计算、网络、存储和分析国际会议（SC\'19）（海报论文）',
          link: 'https://dl.acm.org/doi/10.1145/3295500.3356173'
        },
        {
          text: 'PCGAN-CHAR：用于噪声孟加拉手写字符分类的渐进式训练分类器生成对抗网络，<b>刘群</b>，Edward Collier，Supratik Mukhopadhyay，发表于第21届亚洲数字图书馆国际会议（ICADL 2019）',
          link: 'https://link.springer.com/chapter/10.1007/978-3-030-34058-2_19'
        },
        {
          text: '通过知识蒸馏整合上下文因素改进路线选择模型，<b>刘群</b>，Supratik Mukhopadhyay，Yimin Zhu 等，发表于神经网络国际联合会议（IJCNN 2019）',
          link: 'https://ieeexplore.ieee.org/document/8852097'
        },
        {
          text: '使用预训练CNN和关联记忆库的无监督学习，<b>刘群</b>，Supratik Mukhopadhyay，发表于神经网络国际联合会议（IJCNN 2018）',
          link: 'https://ieeexplore.ieee.org/document/8489660'
        },
        {
          text: 'SafeRNet：车联网和移动众包感知时代的安全交通路由，<b>刘群</b>，Suman Kumar，Vijay Mago，发表于IEEE消费者通信和网络会议（CCNC 2017）',
          link: 'https://ieeexplore.ieee.org/document/7983201'
        },
        {
          text: '使用二次谐波生成成像表征梗死小鼠心脏中的纤维胶原蛋白亚型，Sushant Sahu，Qianglin Liu，Alisha Prasad，Syed Mohammad Abid Hasan，<b>刘群</b>，Maria Ximena Bastidas Rodriguez，Orna Mukhopadhyay，David Burk，Joseph Francis，Supratik Mukhopadhyay，Xing Fu，Manas Ranjan Gartia，发表于生物医学光学快报，2021年',
          link: 'https://opg.optica.org/boe/fulltext.cfm?uri=boe-12-2-1029'
        },
        {
          text: '为什么你打开了那盏灯？，Supratik Mukhopadhyay，Alimire Nabijiang，Chanachok Chokwitthaya，Yimin Zhu，Girish Rentala，<b>刘群</b>，发表于IEEE智能数据服务国际会议（SMDS 2021）',
          link: 'https://ieeexplore.ieee.org/document/9520000'
        },
        {
          text: '网络物理人机系统（CPHS）的上下文感知设计，Supratik Mukhopadhyay，<b>刘群</b>，Edward Collier 等，发表于第12届通信系统和网络国际会议（COMSNETS 2020）',
          link: 'https://ieeexplore.ieee.org/document/9027391'
        },
        {
          text: '为什么你选择那条路线？，Alimire Nabijiang，Supratik Mukhopadhyay，Sanaz SaeidiYimin Zhu，Ravindra Gudishala，<b>刘群</b>，发表于第41届认知科学学会年会（CogSci 2019）',
          link: 'https://cogsci.mindmodeling.org/2019/papers/0257/'
        },
        {
          text: '噪声孟加拉手写字符的像素级重建和分类，Manohar Karki，<b>刘群</b>，Robert DiBiano 等，发表于第16届手写识别前沿国际会议（ICFHR 2018）',
          link: 'https://ieeexplore.ieee.org/document/8387688'
        },
        {
          text: '使用稀疏可变形模板模型的在线目标跟踪和学习，Bowen Shi，Tianze Fan，<b>刘群</b>，发表于计算智能与设计国际研讨会（ISCID 2015）',
          link: 'https://ieeexplore.ieee.org/document/7389900'
        }
      ]
    },
    en: {
      title: 'Publications',
      publications: [
        {
          text: 'A One-Shot Learning Framework for Assessment of Fibrillar Collagen from Second Harmonic Generation Images of an Infarcted Myocardium, <b>Qun Liu</b>, Supratik Mukhopadhyay, Maria Ximena Bastidas Rodriguez, et al., in the IEEE International Symposium on Biomedical Imaging (ISBI 2020)',
          link: 'https://ieeexplore.ieee.org/document/9098565'
        },
        {
          text: 'DeepSat V2: Feature Augmented Convolutional Neural Nets for Satellite Image Classification, <b>Qun Liu</b>, Saikat Basu, Sangram Ganguly, et al., in the Remote Sensing Letters (RSL), 2019',
          link: 'https://www.tandfonline.com/doi/full/10.1080/2150704X.2019.1693071'
        },
        {
          text: 'Deep Learning-Based Feature-Aware Data Modeling for Complex Physics Simulations, <b>Qun Liu</b>, Subhashis Hazarika, John Patchett, et al., in the International Conference for High Performance Computing, Networking, Storage, and Analysis (SC\'19) (Poster Paper)',
          link: 'https://dl.acm.org/doi/10.1145/3295500.3356173'
        },
        {
          text: 'PCGAN-CHAR: Progressively Trained Classifier Generative Adversarial Networks for Classification of Noisy Handwritten Bangla Characters, <b>Qun Liu</b>, Edward Collier, Supratik Mukhopadhyay, in the 21st International Conference on Asia Digital Libraries (ICADL 2019)',
          link: 'https://link.springer.com/chapter/10.1007/978-3-030-34058-2_19'
        },
        {
          text: 'Improving Route Choice Models by Incorporating Contextual Factors via Knowledge Distillation, <b>Qun Liu</b>, Supratik Mukhopadhyay, Yimin Zhu, et al., in the International Joint Conference on Neural Networks (IJCNN 2019)',
          link: 'https://ieeexplore.ieee.org/document/8852097'
        },
        {
          text: 'Unsupervised Learning using Pretrained CNN and Associative Memory Bank, <b>Qun Liu</b>, Supratik Mukhopadhyay, in the International Joint Conference on Neural Networks (IJCNN 2018)',
          link: 'https://ieeexplore.ieee.org/document/8489660'
        },
        {
          text: 'SafeRNet: Safe Transportation Routing in the era of Internet of Vehicles and Mobile Crowd Sensing, <b>Qun Liu</b>, Suman Kumar, Vijay Mago, in the IEEE Consumer Communications and Networking Conference (CCNC 2017)',
          link: 'https://ieeexplore.ieee.org/document/7983201'
        },
        {
          text: 'Characterization of Fibrillar Collagen Isoforms in the Infarcted Mouse Hearts Using Second Harmonic Generation Imaging, Sushant Sahu, Qianglin Liu, Alisha Prasad, Syed Mohammad Abid Hasan, <b>Qun Liu</b>, Maria Ximena Bastidas Rodriguez, Orna Mukhopadhyay, David Burk, Joseph Francis, Supratik Mukhopadhyay, Xing Fu, Manas Ranjan Gartia, in the Biomedical Optics Express, 2021',
          link: 'https://opg.optica.org/boe/fulltext.cfm?uri=boe-12-2-1029'
        },
        {
          text: 'Why did you turn on that light?, Supratik Mukhopadhyay, Alimire Nabijiang, Chanachok Chokwitthaya, Yimin Zhu, Girish Rentala, <b>Qun Liu</b>, in the IEEE International Conference on Smart Data Services (SMDS 2021)',
          link: 'https://ieeexplore.ieee.org/document/9520000'
        },
        {
          text: 'Context-Aware Design of Cyber-Physical Human Systems (CPHS), Supratik Mukhopadhyay, <b>Qun Liu</b>, Edward Collier, et al., in the 12th International Conference on Communication Systems and Networks (COMSNETS 2020)',
          link: 'https://ieeexplore.ieee.org/document/9027391'
        },
        {
          text: 'Why do you take that route?, Alimire Nabijiang, Supratik Mukhopadhyay, Sanaz Saeidi, Yimin Zhu, Ravindra Gudishala, <b>Qun Liu</b>, in the 41st Annual Meeting of the Cognitive Science Society (CogSci 2019)',
          link: 'https://cogsci.mindmodeling.org/2019/papers/0257/'
        },
        {
          text: 'Pixel-level Reconstruction and Classification for Noisy Handwritten Bangla Characters, Manohar Karki, <b>Qun Liu</b>, Robert DiBiano, et al., in the 16th International Conference on Frontiers in Handwriting Recognition (ICFHR 2018)',
          link: 'https://ieeexplore.ieee.org/document/8387688'
        },
        {
          text: 'Online Object Tracking and Learning with Sparse Deformable Template Models, Bowen Shi, Tianze Fan, <b>Qun Liu</b>, in the International Symposium on Computational Intelligence and Design (ISCID 2015)',
          link: 'https://ieeexplore.ieee.org/document/7389900'
        }
      ]
    }
  };

  return (
    <header className="App-header">
      <h1>{content[language].title}</h1>
      <section>
        <ol>
          {content[language].publications.map((pub, index) => (
            <li key={index}>
              <div dangerouslySetInnerHTML={{ __html: pub.text }} />
              <a 
                href={pub.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#0066cc',
                  textDecoration: 'none',
                  fontSize: '0.9em',
                  display: 'inline-block',
                  marginTop: '5px'
                }}
              >
                {language === 'zh' ? '查看论文' : 'View Paper'}
              </a>
            </li>
          ))}
        </ol>
      </section>
    </header>
  );
} 