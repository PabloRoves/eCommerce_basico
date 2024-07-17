import { Component } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const styles = {
  producto: {
    border: "solid 1px #eee",
    boxShadow: "4px 5px 3px rgb(0, 0, 0, 0.2)",
    padding: "10px 15px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    //justifyContent: "space-between",
    height: "200px",
    width: "150px",
  },
  imageContainer: {
    height: "30%",
    width: "100%",
    marginBottom: "10px",
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain", // Hace que la imagen cubra el contenedor manteniendo su relación de aspecto
  },
  infoContainer: {
    //alignItems: "center",
    //flex: 1,
    //display: "flex",
    //flexDirection: "column",
  },
  priceContainer: {
    height: "30px",
    display: "flex",
    alignItems: "center",
  },
  buttonContainer: {
    height: "40px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
};

class Producto extends Component {
  render() {
    const { producto, agregarAlCarro, quitarDelCarro } = this.props;
    return (
      <div style={styles.producto}>
        <div style={styles.imageContainer}>
          <img style={styles.img} alt={producto.name} src={producto.img} />
        </div>
        <div style={styles.infoContainer}>
          <h3>{producto.name}</h3>
          <p>{producto.price}</p>
          <div style={styles.buttonContainer}>
            <Button onClick={() => agregarAlCarro(producto)}>+</Button>
            <Button onClick={() => quitarDelCarro(producto)}>-</Button>
          </div>
        </div>
      </div>
    );
  }
}

Producto.propTypes = {
  producto: PropTypes.any.isRequired,
  agregarAlCarro: PropTypes.func.isRequired,
  quitarDelCarro: PropTypes.func.isRequired,
};

export default Producto;
