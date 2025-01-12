namespace WebApi2._0.Data
{
    public class Conexion
    {
        private static readonly string rutaConexion = "Data Source=DESKTOP-OBRLD3V\\SQLEXPRESS;Initial Catalog=taller;Persist Security Info=True;User ID=sa;Password=angel94;Trust Server Certificate=True";

        public static string RutaConexion
        {
            get { return rutaConexion; }
        }
    }
}
