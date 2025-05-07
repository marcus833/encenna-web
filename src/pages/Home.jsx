import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import { FaBook, FaCogs, FaChalkboardTeacher, FaCalendarAlt, FaMoneyBill } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <aside className="sidebar">
        <h2>Encenna<br /><small>Digital</small></h2>
        <nav>
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
            <span className="label">Financeiro</span>
          </button>
          <button onClick={() => navigate('/configuracoes')}>
            <span className="icon"><FaCogs /></span>
            <span className="label">Configurações</span>
          </button>
        </nav>
      </aside>

      <main className="conteudo">
        <div className="top-bar">
          <h1>Bem-vindo à Plataforma Encenna Digital</h1>
        </div>
        <section>
          <p>Selecione uma funcionalidade no menu lateral para começar.</p>
        </section>
      </main>
    </div>
  );
};

export default Home;
