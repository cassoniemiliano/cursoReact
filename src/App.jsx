import "./App.css";
import ReactLogo from "./assets/react.svg";

function App() {
  return (
    <>
      <div>
        <h1>Componentes en React</h1>
      </div>
      <div className="container">
        <div className="card">
          <p>Nuevo componente de react</p>
          <div className="container-img">
            <img src={ReactLogo} />
          </div>
          <div className="container-itemBox">
            <div className="itemBox">precio</div>
            <div className="itemBox">descrip</div>
          </div>
        </div>
        <div className="card">
          <p>Nuevo componente de react</p>
          <div className="container-img">
            <img src={ReactLogo} />
          </div>
          <div className="container-itemBox">
            <div className="itemBox">precio</div>
            <div className="itemBox">descrip</div>
          </div>
        </div>
        <div className="card">
          <p>Nuevo componente de react</p>
          <div className="container-img">
            <img src={ReactLogo} />
          </div>
          <div className="container-itemBox">
            <div className="itemBox">precio</div>
            <div className="itemBox">descrip</div>
          </div>
        </div>
        <div className="card">
          <p>Nuevo componente de react</p>
          <div className="container-img">
            <img src={ReactLogo} />
          </div>
          <div className="container-itemBox">
            <div className="itemBox">precio</div>
            <div className="itemBox">descrip</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
