import React from 'react';

export default function Atletas() {
  return (
    <>
      <header className="header">
        <div>
          <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>GESTÃO</span>
          <h2>Atletas Cadastrados</h2>
        </div>
        <div className="top-bar">
          <input type="text" placeholder="Buscar atleta..." className="input-field" />
          <button className="btn-primary">➕ Novo Atleta</button>
        </div>
      </header>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nº INSCRIÇÃO</th>
              <th>NOME DO ATLETA</th>
              <th>CATEGORIA</th>
              <th>CLUBE / EQUIPE</th>
              <th style={{ textAlign: 'right' }}>AÇÃO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1042</td>
              <td><strong>Lucas Martins</strong></td>
              <td>Sênior (20+)</td>
              <td>Clube Aquático BR</td>
              <td style={{ textAlign: 'right' }}>
                <button className="btn-action">Editar</button>
              </td>
            </tr>
            <tr>
              <td>#1043</td>
              <td><strong>Mariana Silva</strong></td>
              <td>Júnior (17-19)</td>
              <td>Associação Natação</td>
              <td style={{ textAlign: 'right' }}>
                <button className="btn-action">Editar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}