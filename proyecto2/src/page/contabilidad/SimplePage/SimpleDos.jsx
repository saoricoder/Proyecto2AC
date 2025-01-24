import { MenuHeader } from "../../../moduls/Menu_header";

export function SimpleDos() {
  return (
    <div className="container">
      <MenuHeader
        title1="Atras"
        link1="/contabilidad"
        title2="Home"
        link2="/"
      />
      <h1 className="title">Cuentas</h1>
      <div className="form_container">
        <form action="" className="form_cuentas">
          <div className="item_container">
            <label htmlFor="codigo">Codigo</label>
            <input type="text" name="codigo" id="codigo" />
          </div>
          <div className="item_container">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" />
          </div>
          <div className="item_container">
            <label htmlFor="tipocuenta">Tipo de Cuenta</label>
            <select name="tipocuenta" id="tipocuenta">
              <option value="pasivo">pasivo</option>
            </select>
          </div>
          <input type="button" value="Insertar" />
          <input type="button" value="Eliminar" />
          <input type="button" value="Modificar" />
          <input type="button" value="Buscar" />
        </form>
      </div>
    </div>
  );
}
