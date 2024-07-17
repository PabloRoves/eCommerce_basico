import { Component } from "react";
import Producto from "./Producto";
import PropTypes from "prop-types";

const style = {
  productos: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "flex-start",
  },
};

class Productos extends Component {
  render() {
    const { productos, agregarAlCarro, quitarDelCarro } = this.props;
    return (
      <div style={style.productos}>
        {productos.map((producto) => (
          <Producto key={producto.name} agregarAlCarro={agregarAlCarro} quitarDelCarro={quitarDelCarro} producto={producto} />
        ))}
      </div>
    );
  }
}

Productos.propTypes = {
  productos: PropTypes.array.isRequired,
  agregarAlCarro: PropTypes.func.isRequired,
  quitarDelCarro: PropTypes.func.isRequired,
};

export default Productos;
