import "../css/menu_header.css";

export function MenuHeader() {
  return (
    <div className="item_login">
      <div className="item_container">
        <h1 className="title_header">Proyecto 2</h1>
        <ul className="menu_item">
          <li className="item_menu">Home</li>
          <li className="item_menu">Registro</li>
        </ul>
      </div>
    </div>
  );
}
