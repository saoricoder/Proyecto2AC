import { MenuHeader } from "../../../moduls/Menu_header";

export function ComplexUno() {
  return (
    <div className="container">
      <MenuHeader
        title1="Atras"
        link1="/contabilidad"
        title2="Home"
        link2="/"
      />
      <h1 className="title">Comprobante de Contabilidad</h1>
      <div className="cabecera_comprobante">
        <h2 className="title_cabecera">Cabecera Comprobante de Contabilidad</h2>
        <div className="table_comprobante">
          <form action="" className="comprobante_form">
            <div className="form_item">
              <label htmlFor="numero">Numero</label>
              <input type="text" name="numero" id="numero" />
            </div>
            <div className="form_item">
              <label htmlFor="fecha">Fecha</label>
              <input type="date" name="fecha" id="fecha" />
            </div>
            <div className="form_item">
              <label htmlFor="">Observaciones</label>
              <input type="text" name="observaciones" id="observaciones" />
            </div>
          </form>
          <div className="cabecera_detalle">
            <table>
              <tr>
                <th>Numero</th>
                <th>Fecha</th>
                <th>Observaciones</th>
              </tr>
              <tr>
                <td>""</td>
                <td>""</td>
                <td>""</td>
              </tr>
            </table>
          </div>
          <h2 className="title_cabecera">
            Detalle Comprobante de Contabilidad
          </h2>
          <form action="" className="detalle_comprobante">
            <div className="form_item">
              <label htmlFor="debe">Debe</label>
              <input type="text" name="debe" id="debe" />
            </div>
            <div className="form_item">
              <label htmlFor="cuenta">Cuenta</label>
              <input type="text" name="cuenta" id="cuenta" />
            </div>
            <div className="form_item">
              <label htmlFor="haber">Haber</label>
              <input type="text" name="haber" id="haber" />
            </div>
          </form>
          <div className="cabecera_detalle">
            <table>
              <tr>
                <th>Debe</th>
                <th>Cuenta</th>
                <th>Haber</th>
              </tr>
              <tr>
                <td>""</td>
                <td>""</td>
                <td>""</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
