
import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Atletas from './Atletas';
import Resultados from './Resultados';
import Cronometragem from './Cronometragem';

function App() {
  // Estado para controlar a página atual
  const [currentPage, setCurrentPage] = useState('dashboard');

  // Função para renderizar a página correta com base no estado
  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard': return <Dashboard setCurrentPage={setCurrentPage} />;
      case 'atletas': return <Atletas />;
      case 'resultados': return <Resultados />;
      case 'cronometragem': return <Cronometragem />;
      default: return <Dashboard setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    //Navegação Lateral
    <div className="app-container">

      <aside className="sidebar">
        <div style={{ paddingBottom: '20px' }}>
          <h1>🌊 SwimCore</h1>
          <p style={{ color: '#94a3b8', fontSize: '20px' }}>Painel do Árbitro</p>

          <nav className="nav-menu">
            
            <button 
              className={`nav-item ${currentPage === 'dashboard' ? 'active' : ''}`}
              onClick={() => setCurrentPage('dashboard')}
            >
              <span className="nav-icon">📊</span> Dashboard
            </button>
            
            <button 
              className={`nav-item ${currentPage === 'atletas' ? 'active' : ''}`}
              onClick={() => setCurrentPage('atletas')}
            >
              <span className="nav-icon">👥</span> Atletas
            </button>
            
            <button 
              className={`nav-item ${currentPage === 'resultados' ? 'active' : ''}`}
              onClick={() => setCurrentPage('resultados')}
            >
              <span className="nav-icon">🏆</span> Resultados
            </button>
            
            <button 
              className={`nav-item ${currentPage === 'cronometragem' ? 'active' : ''}`}
              onClick={() => setCurrentPage('cronometragem')}
            >
              <span className="nav-icon">⏱️</span> Cronometragem
            </button>
          </nav>
        </div>

        <div className="user-profile">
          <div className="user-avatar">R</div>
          <div>
            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Maria Rita</p>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Árbitra</p>
          </div>
        </div>
      </aside>

      {/* Renderização Dinâmica do Conteúdo */}
      <main className="main-content">
        {renderPage()}
      </main>
      
    </div>
  );
}

export default App;



/*import { useState } from "react";

import Header from "./Header";
import Atleta from "./Atleta";
import AtletaInfo from "./AtletaInfo";
import ResultTable from "./ResultTable";

function App() {
  const [atletas, setAtletas] = useState([]);

  function addAtleta(atleta) {
    setAtletas([...atletas, atleta]);
  }

  return (
    <div>
      <Header />

      <Atleta addAtleta={addAtleta} />

      <ResultTable atletas={atletas} />

      <AtletaInfo atletas={atletas} />
    </div>
  );
}

export default App;*/