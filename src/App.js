import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate
} from 'react-router-dom';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import LanguageToggle from './components/LanguageToggle';
import Home from './pages/Home';
import About from './pages/About';
import Interest from './pages/Interest';
import Experience from './pages/Experience';
import Publications from './pages/Publications';
import Activities from './pages/Activities';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React, { useEffect } from 'react';

// 动态标题组件
const DynamicTitle = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const titles = {
      '/': language === 'zh' ? '刘群的学术主页' : "Qun Liu's Academic Homepage",
      '/about': language === 'zh' ? '关于 - 刘群的学术主页' : 'About - Qun Liu',
      '/interest': language === 'zh' ? '研究兴趣 - 刘群的学术主页' : 'Research Interests - Qun Liu',
      '/experience': language === 'zh' ? '工作经历 - 刘群的学术主页' : 'Experience - Qun Liu',
      '/publications': language === 'zh' ? '发表论文 - 刘群的学术主页' : 'Publications - Qun Liu',
      '/activities': language === 'zh' ? '学术活动 - 刘群的学术主页' : 'Activities - Qun Liu',
      '/contact': language === 'zh' ? '联系方式 - 刘群的学术主页' : 'Contact - Qun Liu'
    };

    document.title = titles[location.pathname] || titles['/'];
  }, [location, language]);

  return null;
};

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename="/ai_academic_page">
        <div className="App">
          <DynamicTitle />
          <LanguageToggle />
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/interest" element={<Interest />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
