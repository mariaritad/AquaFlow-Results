import React from 'react';

export default function Resultados() {
  return (
    <>
      <header className="header">
        <div>
          <span style={{color: 'var(--text-muted)', fontSize: '12px'}}>RANKING FINAL</span>
          <h2>Resultados Oficiais</h2>
        </div>
        <div className="top-bar">
          <button className="btn-action">📄 Exportar PDF</button>
        </div>
      </header>

      <div className="table-container">
        <div className="table-header">
          <h3>50m Borboleta Feminino - Final</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>POS</th>
              <th>ATLETA</th>
              <th>EQUIPE</th>
              <th>TEMPO FINAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className="podium-pos pos-1">1</span></td>
              <td><strong>Ana Beatriz</strong></td>
              <td>Clube Aquático</td>
              <td style={{ color: 'var(--accent)', fontWeight: 'bold', fontFamily: 'monospace', fontSize: '16px' }}>00:26.45</td>
            </tr>
            <tr>
              <td><span className="podium-pos pos-2">2</span></td>
              <td><strong>Carla Mendes</strong></td>
              <td>Natação Central</td>
              <td style={{ fontWeight: 'bold', fontFamily: 'monospace', fontSize: '16px' }}>00:27.10</td>
            </tr>
            <tr>
              <td><span className="podium-pos pos-3">3</span></td>
              <td><strong>Juliana Costa</strong></td>
              <td>Tubarões do Sul</td>
              <td style={{ fontWeight: 'bold', fontFamily: 'monospace', fontSize: '16px' }}>00:27.85</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );

}