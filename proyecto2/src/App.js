import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Inicio de Sesion</h1>
          <form className="form_login">
            <input
              className="login_info"
              type="text"
              placeholder="Usuario"
              name="usuario"
              required
            />
            <input
              className="login_info"
              type="password"
              placeholder="password"
              name="password"
              required
            />
            <input
              className="login_button"
              type="submit"
              value="Iniciar Sesion"
            />
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
