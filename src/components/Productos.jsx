import { Component } from "react";
import Producto from "./Producto";
import PropTypes from "prop-types";

const style = {
  productos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props;
    return (
      <div style={style.productos}>
        {productos.map((producto) => (
          <Producto key={producto.id} agregarAlCarro={agregarAlCarro} producto={producto} />
        ))}
      </div>
    );
  }
}

Productos.propTypes = {
  productos: PropTypes.any.isRequired,
  agregarAlCarro: PropTypes.any.isRequired,
};

export default Productos;
