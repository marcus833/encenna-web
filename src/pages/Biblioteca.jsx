import React, { useEffect, useState } from 'react';
import '../styles/Biblioteca.css';
import { FaPlus, FaBook, FaCogs, FaChalkboardTeacher, FaCalendarAlt, FaMoneyBill } from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom';

const Biblioteca = () => {
  const [documentos, setDocumentos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [novoDoc, setNovoDoc] = useState({ titulo: '', autor: '', arquivo: '', tipo: 'Roteiro' });

  useEffect(() => {
    fetch('/api/biblioteca')
      .then(res => res.json())
      .then(data => setDocumentos(data))
      .catch(err => console.error('Erro ao buscar documentos:', err));
  }, []);

  const adicionarDocumento = async () => {
    try {
      const res = await fetch('/api/biblioteca', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoDoc),
      });
      const data = await res.json();
      setDocumentos([...documentos, data]);
      setShowModal(false);
      setNovoDoc({ titulo: '', autor: '', arquivo: '', tipo: 'Roteiro' });
    } catch (err) {
      console.error('Erro ao adicionar documento:', err);
    }
  };
  
  const navigate = useNavigate();

  return (
    <div className="biblioteca-container">
      <aside className="sidebar">
        <h2>Encenna<br /><small>Digital</small></h2>
        <nav>
          <button onClick={() => navigate('/gestaoacademica')}>
            <span className="icon"><FaChalkboardTeacher /></span>
            <span className="label">Gestão Acadêmica</span>
          </button>
          <button className="ativo">
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
          <input type="text" placeholder="Buscar..." />
          <button className="add-btn" onClick={() => setShowModal(true)}>
            <FaPlus />
          </button>
        </div>

        <div className="lista-documentos">
          {documentos.map((doc, index) => (
            <div key={index} className="documento-card">
              <h3>{doc.titulo} - {doc.autor}</h3>
              <p><strong>Tipo:</strong> {doc.tipo}</p>
              <p><a href={doc.arquivo} target="_blank" rel="noopener noreferrer">Abrir Arquivo</a></p>
            </div>
          ))}
        </div>
      </main>

      {showModal && (
        <div className="modal">
          <div className="modal-conteudo">
            <h3>Novo Documento</h3>
            <input
              type="text"
              placeholder="Título"
              value={novoDoc.titulo}
              onChange={e => setNovoDoc({ ...novoDoc, titulo: e.target.value })}
            />
            <input
              type="text"
              placeholder="Autor"
              value={novoDoc.autor}
              onChange={e => setNovoDoc({ ...novoDoc, autor: e.target.value })}
            />
            <input
              type="text"
              placeholder="Arquivo"
              value={novoDoc.arquivo}
              onChange={e => setNovoDoc({ ...novoDoc, arquivo: e.target.value })}
            />
            <select
              value={novoDoc.tipo}
              onChange={e => setNovoDoc({ ...novoDoc, tipo: e.target.value })}
            >
              <option value="Roteiro">Roteiro</option>
              <option value="Livro">Livro</option>
              <option value="Outro">Outro</option>
            </select>
            <button onClick={adicionarDocumento}>Salvar</button>
            <button onClick={() => setShowModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Biblioteca;
