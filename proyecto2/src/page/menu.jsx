import { MenuHeader } from "../moduls/Menu_header";

function Menu() {
  return (
    <div className="container">
      <MenuHeader />
      <h1>Menu</h1>
      <div className="container_menu">
        <ul className="menu">
          <li className="menu_item">Biblioteca</li>
          <li className="menu_item">Contabilidad</li>
          <li className="menu_item">Nomina</li>
          <li className="menu_item">Seleccion</li>
        </ul>
      </div>
    </div>
  );
}
