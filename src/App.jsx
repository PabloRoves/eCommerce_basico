import { Component } from "react";
import Productos from "./components/Productos.jsx";
import Layout from "./components/Layout.jsx";
import Title from "./components/Title.jsx";
import Navbar from "./components/Navbar.jsx";
import NewProduct from "./components/NewProduct.jsx";
import EliminarProducto from "./components/DeleteProduct.jsx";

const styles = {
  appContainer: {
    display: "flex",
    justifyContent: "center",
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      /* productos: [
        { id: 1, name: "Tomate", price: 1500, img: "/productos/tomates.jpeg" },
        { id: 2, name: "Arvejas", price: 2000, img: "/productos/arvejas.jpeg" },
        { id: 3, name: "Lechuga", price: 500, img: "/productos/lechuga.jpeg" },
      ], */
      carro: [],
      imgData: null,
      imgName: "",
      showEliminarModal: false,
      showNewProductModal: false,
    };
  }

  async componentDidMount() {
    try {
      const productos = await this.getProductos();
      console.log(productos);
      this.setState({ productos: productos });
    } catch (err) {
      console.log("err");
    }
  }

  //onEliminarClick = () => {};

  toggleEliminarModal = () => {
    this.setState((prevState) => ({ showEliminarModal: !prevState.showEliminarModal }));
  };
  toggleNewProductModal = () => {
    this.setState((prevState) => ({ showNewProductModal: !prevState.showNewProductModal }));
  };

  eliminarProducto = async (productoId) => {
    try {
      console.log("elimino" + productoId);

      await fetch(`http://localhost:3000/products/${productoId}`, {
        method: "DELETE",
      });
      const updatedProductos = this.state.productos.filter((p) => p.id !== productoId);
      this.setState({
        productos: updatedProductos,
        showEliminarModal: false,
      });
      console.log("producto eliminado ok");
    } catch (err) {
      console.log("Error al intentar eliminar el producto.");
      console.log(err);
    }
  };

  getProductos = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      return await response.json();
    } catch (err) {
      console.log("Error al intentar obtener los datos.");
      console.log(err);
    }
  };

  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    let encontre = false;
    let newCarro = [];
    newCarro = carro.map((x) => {
      if (x.id === producto.id) {
        encontre = true;
        const p = { ...x, cantidad: x.cantidad + 1 };
        return p;
      } else {
        return x;
      }
    });
    if (!encontre) {
      const p = { ...producto, cantidad: 1 };
      newCarro = carro.concat(p);
    }
    this.setState({ carro: newCarro });
  };

  quitarDelCarro = (producto) => {
    const { carro } = this.state;
    if (carro == []) {
      console.log("el carro esta vacio, no hago nada");
      return;
    }
    let newCarro = [];

    carro.forEach((p) => {
      if (p.id !== producto.id) {
        newCarro.push({ ...p });
      } else if (p.id === producto.id && p.cantidad >= 2) {
        const pAux = { ...p, cantidad: p.cantidad - 1 };
        newCarro.push(pAux);
      }
    });
    this.setState({ carro: newCarro });
  };

  /*async crear(producto) {
    try {
      console.log("Enviando datos al servidor...");
      const respuesta = await fetch("http://localhost:3000/products", {
        method: "POST",
        body: JSON.stringify(producto),
      });
      console.log("Producto creado correctamente.");
      //console.log(respuesta);
    } catch (err) {
      console.log("Error al intentar crear un producto.");
      throw err;
    }
  }*/

  /*   nuevoProducto = () => {
    const { imgData, imgName } = this.state;
  }; */

  render() {
    return (
      <div className='appCont' style={styles.appContainer}>
        <div>
          <Navbar carro={this.state.carro} onEliminarClick={this.toggleEliminarModal} onNewProductClick={this.toggleNewProductModal} />
          <Layout>
            <Title />
            <Productos agregarAlCarro={this.agregarAlCarro} quitarDelCarro={this.quitarDelCarro} productos={this.state.productos} />
          </Layout>
          {this.state.showEliminarModal && <EliminarProducto productos={this.state.productos} onDelete={this.eliminarProducto} onClose={this.toggleEliminarModal} />}
          {this.state.showNewProductModal && <NewProduct onClose={this.toggleNewProductModal} />}
        </div>
      </div>
    );
  }
}

export default App;
