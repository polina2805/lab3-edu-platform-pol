import React, { useState } from 'react';

export default function BookingModal({ lecturer, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [discipline, setDiscipline] = useState(lecturer.disciplines[0]?.title || '');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Заявка отправлена:', { lecturer: lecturer.name, name, phone, discipline });
    setIsSubmitted(true);
    
    
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  return (
    
    <div className="modal-overlay" onClick={onClose}>
      {}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close" onClick={onClose}>✕</button>

        {isSubmitted ? (
          <div className="modal-success">
            <h2>Заявка отправлена! 🎉</h2>
            <p>Мы свяжемся с вами в ближайшее время для подтверждения записи к лектору <b>{lecturer.name}</b>.</p>
          </div>
        ) : (
          <>
            <h2>Запись на занятие</h2>
            <p className="modal-lecturer">Лектор: <b>{lecturer.name}</b></p>
            
            <form onSubmit={handleSubmit} className="booking-form">
              <label>
                Ваше имя:
                <input 
                  type="text" 
                  required 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Иван Иванов"
                />
              </label>
              
              <label>
                Телефон:
                <input 
                  type="tel" 
                  required 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  placeholder="+7 (999) 123-45-67"
                />
              </label>

              <label>
                Дисциплина:
                <select value={discipline} onChange={(e) => setDiscipline(e.target.value)}>
                  {lecturer.disciplines.map((d, i) => (
                    <option key={i} value={d.title}>{d.title}</option>
                  ))}
                </select>
              </label>

              <button type="submit" className="btn-primary" style={{ marginTop: '15px' }}>
                Отправить заявку
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}