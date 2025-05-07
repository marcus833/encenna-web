import React from 'react';
import { FaBook, FaCogs, FaChalkboardTeacher, FaCalendarAlt, FaMoneyBill } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/configuracoes.css';

const Configuracoes = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <aside className="sidebar">
        <h2>Encenna<br /><small>Digital</small></h2>
        <nav className="sidebar-menu">
            <button onClick={() => navigate('/gestaoacademica')}>
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
                <span className="label">Financeiro</span></button>
            <button className='ativo'>
                <span className="icon"><FaCogs /></span>
                <span className="label">Configurações</span>
            </button>
        </nav>
      </aside>

      <main className="main-content">
        <div className="config-container">
          <div className="user-icon">
            <div className="circle">
              <div className="inner-circle" />
            </div>
          </div>

          <div className="form-card">
            <div className="form-grid">
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Telefone" />
              <input type="date" placeholder="Data de Nascimento" />
              <input type="email" placeholder="E-mail" />
              <input type="text" placeholder="CPF" />
              <input type="password" placeholder="Senha" />
            </div>

            <div className="logout-button">
              <button onClick={() => navigate('/')}>Logout</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Configuracoes;
