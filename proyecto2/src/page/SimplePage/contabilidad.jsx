import React, { useState } from "react";
import { Insertar } from "../../moduls/useFetch";

export function SimpleContabilidad() {
  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState("");
  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);
  const url = "http://localhost:5261/api/Taller";

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = { nombre: nombre, codigo: codigo };
    setExito(false);
    if (nombre.trim() === "" || codigo.trim() === "") {
      setError(true);
      return;
    }
    Insertar("POST", url, data);
    setError(false);
    setExito(true);
    setNombre("");
    setCodigo("");
  };

  return (
    <div className="container">
      <h1>Contabilidad Simple Page</h1>
      <form onSubmit={handleSubmit} className="form_contabilidad">
        <div className="item_contabilidad">
          <label htmlFor="codigo">Codigo</label>
          <input
            className="ingresar_info"
            type="number"
            name="codigo"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
        </div>
        <div className="item_contabilidad">
          <label htmlFor="nombre">Nombre</label>
          <input
            className="ingresar_info"
            type="text"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <input className="insertar_button" type="submit" value="Insertar" />
      </form>
      {error && <p className="error">Todos los campos son obligatorios</p>}
      {exito && <p className="exito">Registro exitoso</p>}
    </div>
  );
}
