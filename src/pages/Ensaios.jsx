import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBook, FaCogs, FaChalkboardTeacher, FaCalendarAlt, FaMoneyBill } from 'react-icons/fa';
import '../styles/ensaios.css';

const Ensaios = () => {
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
            <button className="ativo">
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
        <div className="agendamento-container">
          <h1>Agendamento de Ensaios</h1>
          <form className="agendamento-form">
            <label>
              Data do Ensaio:
              <input type="date" name="data" />
            </label>

            <label>
              Horário:
              <div className="time-inputs">
                <input type="time" name="horaInicio" />
                <span>—</span>
                <input type="time" name="horaFim" />
              </div>
            </label>

            <label>
              Local:
              <input type="text" name="local" />
            </label>

            <label>
              Peça relacionada:
              <input type="text" name="peca" />
            </label>

            <label>
              Participantes:
              <textarea rows="4" name="participantes" />
            </label>

            <div className="form-buttons">
              <button type="submit" className="btn-salvar">Salvar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Ensaios;
