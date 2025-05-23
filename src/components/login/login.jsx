import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Acesse o Sistema</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button>Entrar</button>
      </div>
    </div>
  );
};

export default Login;