import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RecuperarSenha from "./pages/RecuperarSenha";
import CadastroPage from './pages/Cadastro';
import Home from "./pages/Home";
import Biblioteca from "./pages/Biblioteca";
import Ensaios from "./pages/Ensaios";
import Configuracoes from "./pages/Configuracoes";
import Mensalidades from "./pages/Financeiro";
import GestaoAcademica from "./pages/GestaoAcademica";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/ensaios" element={<Ensaios />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/financeiro" element={<Mensalidades />} />
        <Route path="/gestaoacademica" element={<GestaoAcademica />} />
      </Routes>
    </Router>
  );
}

export default App;
