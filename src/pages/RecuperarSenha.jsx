import React, { useState } from "react";
import "../styles/recuperarSenha.css";

export default function RecuperarSenha() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Instruções enviadas para: ${email}`);
  };

  return (
    <div className="recuperar-container">
      <form className="recuperar-card" onSubmit={handleSubmit}>
        <h2 className="recuperar-title">Atualizar senha</h2>
        <p className="recuperar-subtitle">
          Enviaremos um e-mail com instruções de como redefinir sua senha.
        </p>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
