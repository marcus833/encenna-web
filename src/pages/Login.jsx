import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import "../styles/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await api.post("http://localhost:3000/api/usuario/login", {
        email,
        senha,
      });
  
      const { token, usuario } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("usuario", JSON.stringify(usuario));
  
      navigate("/home");
    } catch (error) {
      console.error("Erro no login:", error);
      setErro("Email ou senha inválidos.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h2 className="login-title">Login</h2>
        {erro && <p className="erro">{erro}</p>}
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <div className="esqueci-senha">
          <Link to="/recuperar-senha">Esqueceu a senha?</Link>
        </div>
        <button to="/login" type="submit">Login</button>
        <div className="cadastro-link">
          <span>Não tem uma conta?</span>
          <Link to="/cadastro">Cadastre-se</Link>
        </div>
      </form>
    </div>
  );
}
