import { MenuHeader } from "../../../moduls/Menu_header";

export function ReporteUno() {
  return (
    <div className="container">
      <MenuHeader
        title1="Atras"
        link1="/contabilidad"
        title2="Home"
        link2="/"
      />
      <h1 className="title_reporte_uno">Balance general </h1>
      <div className="balance_section">
        <ul className="balance_container">
          <h2 className="title_section">Pasivo</h2>
        </ul>
      </div>
      <div className="balance_section">
        <ul className="balance_container">
          <h2 className="title_section">Activo</h2>
        </ul>
      </div>
      <div className="balance_section">
        <ul className="balance_container">
          <h2 className="title_section">Capital</h2>
        </ul>
      </div>
    </div>
  );
}
