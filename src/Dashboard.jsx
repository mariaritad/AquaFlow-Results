import React from 'react';

export default function Dashboard({ setCurrentPage }) {
  return (
    <>
      <header className="header">
        <div>
          <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>VISÃO GERAL</span>
          <h2>Bem-vindo ao painel de controle</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="status-badge">
            <div className="dot"></div>
            Sistema online
          </div>
        </div>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="emoji-icon">👥</div>
          <h3>24</h3>
          <p>Atletas registrados</p>
        </div>
        <div className="stat-card" style={{ borderColor: 'var(--accent)' }}>
          <div className="emoji-icon">⏱️</div>
          <h3>01</h3>
          <p>Provas em andamento</p>
        </div>
        <div className="stat-card">
          <div className="emoji-icon">🏆</div>
          <h3>00</h3>
          <p>Provas finalizadas</p>
        </div>
        <div className="stat-card">
          <div className="emoji-icon">📊</div>
          <h3>03</h3>
          <p>Baterias pendentes</p>
        </div>
      </div>

      <div className="table-container">
        <div className="table-header">
          <h3>Próximas provas</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>HORA</th>
              <th>PROVA / CATEGORIA</th>
              <th>STATUS</th>
              <th style={{ textAlign: 'right' }}>AÇÃO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>14:45</strong></td>
              <td>
                <strong>100m Livre Masculino</strong><br/>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Sênior • Livre</span>
              </td>
              <td>
                <span style={{ color: 'var(--danger)', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '4px 12px', borderRadius: '16px', fontSize: '12px', border: '1px solid var(--danger)' }}>
                  Em andamento
                </span>
              </td>
              <td style={{ textAlign: 'right' }}>
                <button className="btn-action" onClick={() => setCurrentPage('cronometragem')}>
                  <span style={{ fontSize: '14px' }}>⏱️</span> Cronometrar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}