import { Component } from "react";
import Productos from "./components/Productos.jsx";
import Layout from "./components/Layout.jsx";
import Title from "./components/Title.jsx";
import Navbar from "./components/Navbar.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      /* productos: [
        { id: 1, name: "Tomate", price: 1500, img: "/productos/tomates.jpeg" },
        { id: 2, name: "Arvejas", price: 2000, img: "/productos/arbejas.jpeg" },
        { id: 3, name: "Lechuga", price: 500, img: "/productos/lechuga.jpeg" },
      ], */
      carro: [],
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

  getProductos = async () => {
    try {
      const response = await fetch("http://localhost:3000/productos");
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
      if (x.name === producto.name) {
        encontre = true;
        const nuevoProducto = { ...x, cantidad: x.cantidad + 1 };
        return nuevoProducto;
      } else {
        return x;
      }
    });
    if (!encontre) {
      const nuevoProducto = { ...producto, cantidad: 1 };
      newCarro = carro.concat(nuevoProducto);
    }
    this.setState({ carro: newCarro });
    //console.log(this);
  };

  render() {
    return (
      <div>
        <Navbar carro={this.state.carro} />
        <Layout>
          <Title />
          <Productos agregarAlCarro={this.agregarAlCarro} productos={this.state.productos} />
        </Layout>
      </div>
    );
  }
}

export default App;
