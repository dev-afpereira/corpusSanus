import  { useState } from "react";

import useAuth  from "../../hooks/useAuth";
import Modal from "../Modal/Modal";
import LoginForm from "../Auth/LoginForm";
import RegisterForm from "../Auth/RegisterForm";
import "../../styles/Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        {/* Removido o botão de logout daqui */}
      </div>

      <div className="header-center">
        <h1 className="title">
          <span className="title-corpus">Corpus</span>
          <span className="title-sanus">Sanus</span>
        </h1>
      </div>

      <div className="header-right">
        {!user && (
          <div className="auth-links">
            <button 
              className="auth-button" 
              onClick={() => setIsLoginOpen(true)}
            >
              Login
            </button>
            <button 
              className="auth-button" 
              onClick={() => setIsRegisterOpen(true)}
            >
              Registrar
            </button>
          </div>
        )}
        {user && (
          <button onClick={logout} className="logout-button">
            <span className="icon">→</span> Sair
          </button>
        )}
      </div>

      <Modal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        title="Login"
      >
        <LoginForm onSuccess={() => setIsLoginOpen(false)} />
      </Modal>

      <Modal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)}
        title="Registro"
      >
        <RegisterForm onSuccess={() => setIsRegisterOpen(false)} />
      </Modal>
    </header>
  );
};

export default Header;