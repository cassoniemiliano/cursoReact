import "./App.css";

//componentes
import Card from "./Card.jsx";

//imagenes
import Espresso from "./assets/espresso.jpg";
import Latte from "./assets/Latte.jpg";
import vainillaLate from "./assets/vanillaLate.jpg";
// import { useEffect, useState } from "react";

//hooks

// 👉 Este es el componente raíz de la aplicación.
// Se encarga de mostrar el título y renderizar varias "Card" (nuestros productos)
function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   return () => {
  //     if (count === 5) {
  //       alert("error");
  //       setCount(0);
  //     }
  //   };
  // }, [count]);

  // const incrementar = () => {
  //   setCount(count + 1);
  // };

  return (
    <>
      <div>
        <h1>Componentes en React</h1>
      </div>
      {/* <button onClick={incrementar}>+</button>
      <h1>{count}</h1> */}
      <div className="container">
        {/* 🎯 Cada Card recibe props distintos para mostrar información única */}
        <Card
          image={vainillaLate}
          title={"Vanilla Latte"}
          price={8000}
          type={"hot"}
          rating={4.8}
          valorInicial={5}
        />
        <Card
          image={Espresso}
          title={"Cafe Ezequiel"}
          price={5500}
          type={"hot"}
          rating={9}
          valorInicial={3}
        />
        <Card
          image={Latte}
          title={"Latte"}
          price={6000}
          type={"hot"}
          rating={10}
          valorInicial={50}
        />
      </div>
    </>
  );
}

export default App;
