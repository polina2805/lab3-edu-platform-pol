import React, { useState } from 'react';
import { lecturers } from '../data/lecturers';
import LecturerCard from '../components/LecturerCard';

export default function LecturersPage() {
  const [search, setSearch] = useState('');

  const filteredLecturers = lecturers.filter(l => 
    l.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="page-title">Лекторы</h2>
      
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Поиск по ФИО..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="lecturers-list">
        {filteredLecturers.map(lecturer => (
          <LecturerCard key={lecturer.id} lecturer={lecturer} />
        ))}
      </div>
    </div>
  );
}