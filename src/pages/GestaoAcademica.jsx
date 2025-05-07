import React, { useState } from 'react';
import { FaBook, FaCogs, FaChalkboardTeacher, FaCalendarAlt, FaMoneyBill, FaUsers, FaUser, FaTable } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/gestaoacademica.css';

const GestaoAcademica = () => {
  const navigate = useNavigate();
  const [mostrarPopup, setMostrarPopup] = useState(false);

  const abrirPopup = () => setMostrarPopup(true);
  const fecharPopup = () => setMostrarPopup(false);

  return (
    <div className="home-container">
      <aside className="sidebar">
        <h2>Encenna<br /><small>Digital</small></h2>
        <nav className="sidebar-menu">
          <button className='ativo'>
            <span className="icon"><FaChalkboardTeacher /></span>
            <span className="label">Gestão Acadêmica</span>
          </button>
          <button onClick={() => navigate('/biblioteca')}>
            <span className="icon"><FaBook /></span>
            <span className="label">Biblioteca Digital</span>
          </button>
          <button>
            <span className="icon"><FaCalendarAlt /></span>
            <span className="label">Audições</span>
          </button>
          <button onClick={() => navigate('/ensaios')}>
            <span className="icon"><FaCalendarAlt /></span>
            <span className="label">Ensaios</span>
          </button>
          <button onClick={() => navigate('/financeiro')}>
            <span className="icon"><FaMoneyBill /></span>
            <span className="label">Financeiro</span>
          </button>
          <button onClick={() => navigate('/configuracoes')}>
            <span className="icon"><FaCogs /></span>
            <span className="label">Configurações</span>
          </button>
        </nav>
      </aside>

      <main className="main-content">
        <h1 className="titulo-gestao">Gestão Acadêmica</h1>
        <div className="gestao-cards">
          <div className="card" onClick={abrirPopup}>
            <FaUsers className="card-icon" />
            <span>Turmas</span>
          </div>
          <div className="card">
            <FaUser className="card-icon" />
            <span>Alunos</span>
          </div>
          <div className="card">
            <FaTable className="card-icon" />
            <span>Grade de Horários</span>
          </div>
        </div>

        {mostrarPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h2>Marcar Faltas</h2>
              <p>(Simulação de lista de alunos)</p>
              <ul>
                <li><input type="checkbox" /> João Silva</li>
                <li><input type="checkbox" /> Maria Oliveira</li>
                <li><input type="checkbox" /> Pedro Santos</li>
              </ul>
              <button onClick={fecharPopup} className="fechar-btn">Fechar</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default GestaoAcademica;
