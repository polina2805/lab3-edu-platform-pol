import React from 'react';

export default function AboutPage() {
  return (
    <div className="container">
      <h2 className="page-title">О нас</h2>
      
      {}
      <div className="about-hero">
        <h1>Мы создаем будущее образования</h1>
        <p className="about-lead">
          Наша учебная платформа соединяет компании, образовательные учреждения и НКО 
          с профессиональными лекторами, спикерами и тренерами. Мы упрощаем процесс подбора, 
          бронирования и организации лекций, помогая находить экспертов, которые не просто 
          делятся знаниями, но и вдохновляют аудиторию.
        </p>
      </div>

      {}
      <section className="values-section">
        <h2 className="section-title">Наши ценности</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h3>Миссия</h3>
            <p>Сделать качественное образование доступным для каждого, независимо от географии и бюджета.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Подход</h3>
            <p>Мы работаем только с проверенными практиками, которые умеют объяснять сложное простыми словами.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🚀</div>
            <h3>Сообщество</h3>
            <p>Создаем среду, где студенты и лекторы растут вместе, обмениваются опытом и находят единомышленников.</p>
          </div>
        </div>
      </section>

      {/* Блок 3: Как мы работаем */}
      <section className="steps-section">
        <h2 className="section-title">Как мы работаем</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h4>Выбираете лектора</h4>
            <p>Изучаете профили экспертов, их опыт и дисциплины.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h4>Выбираете формат</h4>
            <p>Определяетесь с удобным временем и способом проведения (онлайн/офлайн).</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h4>Оплачиваете</h4>
            <p>Выбираете подходящий тариф и вносите оплату без скрытых комиссий.</p>
          </div>
          <div className="step-card">
            <div className="step-number">4</div>
            <h4>Занимаетесь</h4>
            <p>Получаете знания, выполняете практику и получаете обратную связь.</p>
          </div>
        </div>
      </section>
    </div>
  );
}