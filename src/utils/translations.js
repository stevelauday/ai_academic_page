export const translations = {
  zh: {
    // 导航
    home: '首页',
    about: '关于我',
    interest: '研究兴趣',
    experience: '经历',
    publications: '发表论文',
    activities: '活动',
    welcome: '刘群的学术主页',

    // 首页
    introduction: '个人简介',
    currentPosition: '现任职位',
    education: '教育背景',
    researchInterests: '研究兴趣',
    contact: '联系方式',

    // 关于我
    aboutMe: '关于我',
    biography: '个人经历',
    skills: '专业技能',
    awards: '获奖情况',

    // 研究兴趣
    researchAreas: '研究领域',
    currentResearch: '当前研究',
    pastResearch: '过往研究',

    // 经历
    workExperience: '工作经历',
    academicExperience: '学术经历',
    teachingExperience: '教学经历',

    // 发表论文
    journalPapers: '期刊论文',
    conferencePapers: '会议论文',
    books: '著作',
    patents: '专利',

    // 活动
    academicActivities: '学术活动',
    professionalActivities: '专业活动',
    communityService: '社区服务',

    // 页脚
    email: '邮箱',
    copyright: '版权所有',
    unveil: '查看'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    interest: 'Interest',
    experience: 'Experience',
    publications: 'Publications',
    activities: 'Activities',
    welcome: 'Qun Liu\'s Academic Homepage',

    // Home
    introduction: 'Introduction',
    currentPosition: 'Current Position',
    education: 'Education',
    researchInterests: 'Research Interests',
    contact: 'Contact',

    // About
    aboutMe: 'About Me',
    biography: 'Biography',
    skills: 'Skills',
    awards: 'Awards',

    // Interest
    researchAreas: 'Research Areas',
    currentResearch: 'Current Research',
    pastResearch: 'Past Research',

    // Experience
    workExperience: 'Work Experience',
    academicExperience: 'Academic Experience',
    teachingExperience: 'Teaching Experience',

    // Publications
    journalPapers: 'Journal Papers',
    conferencePapers: 'Conference Papers',
    books: 'Books',
    patents: 'Patents',

    // Activities
    academicActivities: 'Academic Activities',
    professionalActivities: 'Professional Activities',
    communityService: 'Community Service',

    // Footer
    email: 'Email',
    copyright: 'Copyright',
    unveil: 'unveil'
  }
};

export const getTranslation = (key, language) => {
  return translations[language][key] || key;
}; 