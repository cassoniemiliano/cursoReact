import "./Card.css";
import Text from "./Text.jsx";
import Button from "./Button.jsx";

// 👉 Este es nuestro componente padre "Card".
// Recibe props: image, title, price y rating
// y organiza toda la información de un producto.
function Card({ image, title, price, rating }) {
  return (
    <div className="container-card">
      <div className="container-img">
        <img src={image} />
        {rating && (
          <div className="rating-badge">
            <span>{rating}</span>
            <span>⭐</span>
          </div>
        )}
      </div>
      <div className="container-text">
        <Text title={title} styles={styles.textTitle} />
        <Text title={`$ ${price}`} styles={styles.textPrice} />
      </div>

      <div className="container-info">
        <Text title={"hot"} styles={styles.infoText} />
        <Text title={"cold"} styles={styles.infoText} />

        <Button
          labelButton={"+"}
          styles={styles.button}
          className="button-add"
        />
      </div>
    </div>
  );
}

/*
  ℹ️ Notas para alumnos:
  - Aquí usamos un objeto "styles" para definir estilos en formato camelCase.
  - Esto es diferente de los archivos CSS, donde usamos kebab-case.
  - Los estilos en JS son útiles cuando queremos algo más dinámico.
*/

const styles = {
  textTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Roboto",
  },

  textPrice: {
    fontSize: "15px",
    fontWeight: "bold",
    fontFamily: "Roboto",
  },

  infoText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #ffdba6",
    color: "#ffdba6",
    padding: "5px",
    borderRadius: "8px",
    fontSize: "16px",
    width: "35px",
  },

  button: {
    borderRadius: "100px",
    width: 35,
    height: 35,
    backgroundColor: "#ff902a",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "25px",
  },
};

export default Card;
