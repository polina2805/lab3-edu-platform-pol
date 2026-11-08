import React, { useState } from 'react';
import BookingModal from './BookingModal'; // 

export default function LecturerCard({ lecturer }) {
  const [isOpen, setIsOpen] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  return (
    <div className="lecturer-card">
      <div className="lecturer-top">
        <div className="lecturer-photo-wrapper">
          <img src={lecturer.photo} alt={lecturer.name} className="lecturer-photo" />
        </div>
        
        <div className="lecturer-info">
          <h3>{lecturer.name}</h3>
          <p className="degree">{lecturer.degree}</p>
          <p>Образование: {lecturer.education}</p>
          <p>Стаж: {lecturer.experience}</p>
          
          {}
          <button className="btn-book" onClick={() => setIsModalOpen(true)}>
            Записаться на занятие
          </button>
        </div>
      </div>

      <div className="lecturer-bottom">
        <button className="btn-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Скрыть детали' : 'Показать дисциплины и тарифы'}
        </button>
        
        {isOpen && (
          <div className="details">
            <div className="disciplines">
              <h4>Дисциплины:</h4>
              {lecturer.disciplines.map((d, i) => (
                <div key={i} className="discipline-block">
                  <h5>{d.title}</h5>
                  <ul>
                    {d.topics.map((t, j) => <li key={j}>{t}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div className="tariffs">
              <h4>Тарифы:</h4>
              <ul>
                {lecturer.tariffs.map((t, i) => (
                  <li key={i}><span>{t.name}</span> <b>{t.price}</b></li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {}
      {isModalOpen && (
        <BookingModal lecturer={lecturer} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}