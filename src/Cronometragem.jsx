import React from 'react';

export default function Cronometragem() {
  return (
    <>
      <header className="header" style={{ marginBottom: '16px' }}>
        <div>
          <span style={{ color: 'var(--danger)', fontSize: '12px', fontWeight: 'bold' }}>🔴 AO VIVO</span>
          <h2>100m Livre Masculino - Bateria 1</h2>
        </div>
        <div className="top-bar">
          <button className="btn-primary" style={{ backgroundColor: 'var(--danger)', color: 'white' }}>Parar Prova</button>
          <button className="btn-primary" style={{ backgroundColor: 'var(--success)', color: 'white' }}>Finalizar Resultados</button>
        </div>
      </header>

      <div className="stopwatch-display">00:45.32</div>

      <div className="lanes-grid">
        {[1, 2, 3, 4].map((raia) => (
          <div className="lane-card" key={raia}>
            <div className="lane-number">{raia}</div>
            <div className="lane-info">
              <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Atleta Exemplo {raia}</p>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Clube Aquático</p>
            </div>
            <div>
              <input 
                type="text" 
                placeholder="00:00.00" 
                className="input-field" 
                style={{ fontSize: '20px', fontFamily: 'monospace', width: '140px', textAlign: 'center' }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}