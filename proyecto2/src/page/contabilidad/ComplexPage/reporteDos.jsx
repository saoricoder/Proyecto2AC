import { MenuHeader } from "../../../moduls/Menu_header";

export function ReporteDos() {
  return (
    <div className="container">
      <MenuHeader
        title1="Atras"
        link1="/contabilidad"
        title2="Home"
        link2="/"
      />
      <h1 className="title_reporte_dos">Estado de resultados</h1>
      <div className="resultado_container">
        <ul className="item_resultado">
          <h2 className="title_section">Ingreso</h2>
        </ul>
      </div>
      <div className="resultado_container">
        <ul className="item_resultado">
          <h2 className="title_section">Egreso</h2>
        </ul>
      </div>
      <div className="resultado_container">
        <ul className="item_resultado">
          <h2 className="title_section">Utilidad</h2>
        </ul>
      </div>
    </div>
  );
}
