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
  button: {
    marginRight: "10px",
  },
};

class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      img: "",
    };
  }

  handleFileChange = (e) => {
    this.setState({ img: null });
    let file = e.target.files[0];
    if (!file) return;
    const imgName = file === undefined ? "" : file.name;
    if (this.getExtension(imgName).toLowerCase() !== ".jpeg") {
      alert("Solo se pueden cargar archivos .jpeg");
      e.target.value = null;
      return;
    }
    this.setState({ img: file });
  };

  getExtension(imgName) {
    return imgName.substr(imgName.length - 5);
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  crear = async () => {
    const { img, name, price } = this.state;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("img", img);

    console.log("Nombre del producto:", name);
    console.log("Precio del producto:", price);
    console.log("Datos de la imagen:", img);
    /*for (let entry of formData.entries()) {
      console.log(entry[0] + ":", entry[1]);
    }*/

    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const productoId = await response.json();
      console.log(`Producto ${productoId} creado correctamente.`);

      /*
      console.log(JSON.stringify(producto));

      console.log("Enviando datos al servidor...");
      const respuesta = await fetch("http://localhost:3000/products", {
        method: "POST",
        body: JSON.stringify(producto),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Producto creado correctamente.");
      //console.log(respuesta);
      */
    } catch (err) {
      console.log("Error al intentar crear un producto. " + err);
    }
  };

  render() {
    const { onClose } = this.props;
    //const { imgData } = this.state.imgData;
    //<img src={imgData}></img>
    return (
      <div style={styles.modal}>
        <div style={styles.modalContent}>
          <div>
            <p>Nuevo Producto</p>

            <input type='text' id='name' placeholder='Product Name' onChange={this.handleInputChange} value={this.state.productName}></input>
            <input type='text' id='price' placeholder='price' onChange={this.handleInputChange} value={this.state.productPrice}></input>
            <input type='file' onChange={this.handleFileChange} accept='.jpeg' />
            <button onClick={this.crear}>cargar Producto</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

NewProduct.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default NewProduct;
