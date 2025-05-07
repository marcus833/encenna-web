import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/cadastro.css";

export default function CadastroPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senhaHash, setsenhaHash] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();
    try {
      await api.post("http://localhost:3001/api/usuario/criarUsuario", {
        nome,
        email,
        senhaHash,
        telefone,
        cpf,
      });
      navigate("/");
    } catch (error) {
      setErro("Erro ao realizar o cadastro. Verifique os dados.");
    }
  };

  return (
    <div className="cadastro-container">
      <main className="cadastro-main">
        <form className="cadastro-card" onSubmit={handleCadastro}>
          <h2 className="cadastro-title">Cadastro</h2>
          {erro && <p className="erro">{erro}</p>}
          <div className="input-grid">
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Senha"
              value={senhaHash}
              onChange={(e) => setsenhaHash(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="cadastro-button" >
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  );
}