import "./Card.css";
import Text from "./Text.jsx";
import Button from "./Button.jsx";

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
  el formato camel Case para los estilos, se puede usar si
  tus clases CSS se definen en un archivo de JavaScript.
  (por ejemplo, dentro de un componente de React)
*/

const styles = {
  textTitle: {
    fontSize: "30px",
    fontWeight: "bold",
    fontFamily: "Roboto",
  },

  textPrice: {
    fontSize: "20px",
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
    fontSize: "18px",
    width: "50px",
  },

  button: {
    borderRadius: "100px",
    width: 40,
    height: 40,
    backgroundColor: "#ff902a",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    // transition: "#ff902a 0.3s ease",
    fontSize: "30px",
  },
};

export default Card;
