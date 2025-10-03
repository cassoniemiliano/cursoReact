import "./App.css";

//componentes
import Card from "./Card.jsx";

//imagenes
import Espresso from "./assets/espresso.jpg";
import Latte from "./assets/Latte.jpg";
import vainillaLate from "./assets/vanillaLate.jpg";

function App() {
  return (
    <>
      <div>
        <h1>Componentes en React</h1>
      </div>
      <div className="container">
        <Card
          image={vainillaLate}
          title={"Vanilla Latte"}
          price={8000}
          type={"hot"}
          rating={4.8}
        />
        <Card
          image={Espresso}
          title={"Cafe Ezequiel"}
          price={5500}
          type={"hot"}
          rating={9}
        />
        <Card
          image={Latte}
          title={"Latte"}
          price={6000}
          type={"hot"}
          rating={10}
        />
      </div>
    </>
  );
}

export default App;
