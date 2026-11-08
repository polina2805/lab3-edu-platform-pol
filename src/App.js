import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PartnersPage from './pages/PartnersPage';
import AboutPage from './pages/AboutPage';
import LecturersPage from './pages/LecturersPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  

  const [theme, setTheme] = useState('light');

 
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);

  
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setPage={setCurrentPage} />;
      case 'partners': return <PartnersPage />;
      case 'about': return <AboutPage />;
      case 'lecturers': return <LecturersPage />;
      default: return <HomePage setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      {}
      <Header 
        currentPage={currentPage} 
        setPage={setCurrentPage} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}