import React from 'react';

export default function HomePage({ setPage }) {
  return (
    <div className="container">
      {}
      <section className="hero">
        <div className="hero-image">
          <img src="/home.jpg" alt="Наши лекторы" />
        </div>
        
        <div className="hero-content">
          <h1>Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями.</h1>
          <p className="hero-subtitle">
            Онлайн и офлайн занятия с ведущими экспертами в IT, экономике, дизайне и науке. 
            Выберите своего наставника уже сегодня.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => setPage('lecturers')}>
              НАЙТИ ЛЕКТОРА
            </button>
            <button className="btn-secondary" onClick={() => setPage('about')}>
              О платформе
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Лекторов</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">Дисциплин</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Студентов</span>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="directions-section">
        <h2 className="section-title">Популярные направления</h2>
        <div className="directions-grid">
          <div className="direction-card" onClick={() => setPage('lecturers')}>
            <h3>💻 IT и Программирование</h3>
            <p>От основ CS до машинного обучения</p>
          </div>
          <div className="direction-card" onClick={() => setPage('lecturers')}>
            <h3>📊 Экономика и Финансы</h3>
            <p>Микро- и макроэкономика, инвестиции</p>
          </div>
          <div className="direction-card" onClick={() => setPage('lecturers')}>
            <h3>🎨 Дизайн и UX/UI</h3>
            <p>Графический дизайн, интерфейсы, Figma</p>
          </div>
          <div className="direction-card" onClick={() => setPage('lecturers')}>
            <h3>🧠 Психология</h3>
            <p>Общая, социальная и возрастная психология</p>
          </div>
        </div>
      </section>
    </div>
  );
}