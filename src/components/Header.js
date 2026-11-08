import React from 'react';

export default function Header({ currentPage, setPage, theme, toggleTheme }) {
  const menu = [
    { id: 'home', label: 'Главная' },
    { id: 'partners', label: 'Партнеры' },
    { id: 'about', label: 'О нас' },
    { id: 'lecturers', label: 'Лекторы' }
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo" onClick={() => setPage('home')}>
          🎓 EduPlatform
        </div>
        
        <nav className="nav">
          {menu.map(item => (
            <button 
              key={item.id}
              className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => setPage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-right">
          {}
          <button className="theme-toggle" onClick={toggleTheme} title="Сменить тему">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <button className="btn-header" onClick={() => setPage('lecturers')}>
            Записаться
          </button>
        </div>
      </div>
    </header>
  );
}