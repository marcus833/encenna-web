import React from 'react';
import { FaBook, FaCogs, FaChalkboardTeacher, FaCalendarAlt, FaMoneyBill } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/financeiro.css';

const meses = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril',
  'Maio', 'Junho', 'Julho', 'Agosto',
  'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

const Mensalidades = () => {
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
            <button >
                <span className="icon"><FaCalendarAlt /></span>
                <span className="label">Audições</span>
            </button>
            <button onClick={() => navigate('/ensaios')}>
                <span className="icon"><FaCalendarAlt /></span>
                <span className="label">Ensaios</span>
            </button>
            <button className='ativo'>
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
        <h1 className="titulo-mensalidade">MenSalidades</h1>
        <div className="mensalidade-container">
          {meses.map((mes, index) => (
            <div key={index} className="mensalidade-card">
              <h3>{mes}</h3>
              <p>Gerar Boleto</p>
              <p>Cartão</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Mensalidades;
