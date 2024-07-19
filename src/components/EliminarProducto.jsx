import { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5px",
    width: "300px",
  },
  select: {
    width: "100%",
    marginBottom: "10px",
  },
  button: {
    marginRight: "10px",
  },
};

class EliminarProducto extends Component {
  state = {
    selectedProduct: "",
  };

  handleSelectChange = (e) => {
    this.setState({ selectedProduct: e.target.value });
  };

  handleEliminar = () => {
    if (this.state.selectedProduct) {
      this.props.onEliminar(this.state.selectedProduct);
    }
  };

  render() {
    const { productos, onClose } = this.props;

    return (
      <div style={styles.modal}>
        <div style={styles.modalContent}>
          <h2>Eliminar Producto</h2>
          <select style={styles.select} value={this.state.selectedProduct} onChange={this.handleSelectChange}>
            <option value=''>Seleccione un producto</option>
            {productos.map((producto) => (
              <option key={producto.id} value={producto.id}>
                {producto.name}
              </option>
            ))}
          </select>
          <button style={styles.button} onClick={this.handleEliminar}>
            Eliminar
          </button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    );
  }
}

EliminarProducto.propTypes = {
  onEliminar: PropTypes.any.isRequired,
  productos: PropTypes.array.isRequired,
  onClose: PropTypes.any.isRequred,
};

export default EliminarProducto;
