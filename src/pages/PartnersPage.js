import React from 'react';

export default function PartnersPage() {
  const partners = [
    {
      name: 'ICL',
      url: 'https://icl.ru/',
      desc: 'ICL — высокотехнологичная, динамично развивающаяся группа компаний, входящая в число крупнейших ИТ-компаний России, предоставляющая весь спектр ИТ-услуг.',
      color: '#e31e24' 
    },
    {
      name: 'ТАТНЕФТЬ',
      url: 'https://www.tatneft.ru/',
      desc: '«Татнефть» — одна из крупнейших российских вертикально-интегрированных компаний, в составе которой динамично развиваются нефтегазодобыча и нефтепереработка.',
      color: '#008d4b' 
    }
  ];

  return (
    <div className="container">
      <h2 className="page-title">Партнеры</h2>
      
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div className="partner-card" key={index}>
            
            {}
            <a 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="partner-header"
            >
              <h3 style={{ color: partner.color, fontSize: '28px', margin: 0 }}>
                {partner.name}
              </h3>
              <span className="arrow-icon">↗</span>
            </a>

            <p>{partner.desc}</p>
            
            {}
            <a 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline"
            >
              Перейти на сайт
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}