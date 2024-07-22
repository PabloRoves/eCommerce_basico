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

class DeleteProduct extends Component {
  state = {
    selectedProduct: "",
  };

  handleSelectChange = (e) => {
    this.setState({ selectedProduct: e.target.value });
  };

  handleDelete = () => {
    if (this.state.selectedProduct) {
      this.props.onDelete(this.state.selectedProduct);
    }
  };

  render() {
    const { productos, onClose } = this.props;

    return (
      <div style={styles.modal}>
        <div style={styles.modalContent}>
          <h2>Delete product</h2>
          <select style={styles.select} value={this.state.selectedProduct} onChange={this.handleSelectChange}>
            <option value=''>Select a product</option>
            {productos.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
          <button style={styles.button} onClick={this.handleDelete}>
            Delete
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    );
  }
}

DeleteProduct.propTypes = {
  onDelete: PropTypes.func.isRequired,
  productos: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DeleteProduct;
