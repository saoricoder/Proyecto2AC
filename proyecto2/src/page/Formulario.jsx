import React, { useState, useEffect } from "react";
export function Formulario() {
  const { usuario, setUsuario } = useState("");
  const { password, setPassword } = useState("");
  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setExito(false);
    if (usuario.trim() === "" || password.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setExito(true);
    setPassword("");
    setUsuario("");
  };

  return (
    <div className="container">
      <h1>Inicio de Sesion</h1>
      <div className="container_form">
        <form className="form_login" onSubmit={handleSubmit}>
          <div className="item_login">
            <label htmlFor="usuario" className="item_title">
              Usuario
            </label>
            <input
              className="login_info"
              type="text"
              name="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div className="item_login">
            <label htmlFor="password" className="item_title">
              Password
            </label>
            <input
              className="login_info"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="item_login">
            <input
              className="login_button"
              type="submit"
              value="Iniciar Sesion"
            />
          </div>
        </form>
        {error && <p className="error">Todos los campos son obligatorios</p>}
        {exito && <p className="exito">Registro exitoso</p>}
      </div>
    </div>
  );
}
