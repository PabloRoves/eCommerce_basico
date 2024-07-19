import { Component } from "react";
import Productos from "./components/Productos.jsx";
import Layout from "./components/Layout.jsx";
import Title from "./components/Title.jsx";
import Navbar from "./components/Navbar.jsx";
import NuevoProducto from "./components/NuevoProducto.jsx";

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
        { id: 2, name: "Arvejas", price: 2000, img: "/productos/arbejas.jpeg" },
        { id: 3, name: "Lechuga", price: 500, img: "/productos/lechuga.jpeg" },
      ], */
      carro: [],
      imgData: null,
      imgName: "",
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
  };

  quitarDelCarro = (producto) => {
    const { carro } = this.state;
    if (carro == []) {
      console.log("el carro esta vacio, no hago nada");
      return;
    }
    let newCarro = [];

    carro.forEach((p) => {
      if (p.name !== producto.name) {
        newCarro.push({ ...p });
      } else if (p.name === producto.name && p.cantidad >= 2) {
        const nuevoProducto = { ...p, cantidad: p.cantidad - 1 };
        newCarro.push(nuevoProducto);
      }
    });
    this.setState({ carro: newCarro });
  };

  nuevoProducto = () => {
    const { imgData, imgName } = this.state;
  };

  loadImage(img) {
    const name = this.removeExtension(img.name);
    this.setState({ imgName: name });

    const fileReader = new FileReader();
    fileReader.readAsDataURL(img);
    fileReader.onloadend = () => {
      this.setState({ imgData: fileReader.result }, () => {});
    };
  }
  removeExtension(imgName) {
    return imgName.substr(0, imgName.length - 5);
  }

  getExtension(imgName) {
    return imgName.substr(imgName.length - 5);
  }

  render() {
    return (
      <div className='appCont' style={styles.appContainer}>
        <div>
          <Navbar carro={this.state.carro} />
          <Layout>
            <Title />
            <Productos agregarAlCarro={this.agregarAlCarro} quitarDelCarro={this.quitarDelCarro} productos={this.state.productos} />
          </Layout>
          <NuevoProducto />
        </div>
      </div>
    );
  }
}

export default App;
