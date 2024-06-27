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
  //Esta es la implementación en el curso
  //En esta implementación, buscamos si ya existe el producto en el array carro con el método find.
  //Si existe, copiamos todos los productos del carro a un nuevo carro, menos el del producto
  //que estamos agregando, en su caso, creamos un nuevo objeto producto con la cantidad + 1
  //del producto anterior y lo agregamos al nuevo carro. Por ultimo, asignamos este nuevo carro
  //al estado de app con SetState(si es que ya existe en el array),
  /*  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if (carro.find(x => x.name === producto.name)){
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad +1
        })
        : x
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro:this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    });
  }*/

  //Esta es una implementación propia.
  //En este caso, usamos .map para iterar sobre el array carro, creando otro array "nuevo carro" y ponemos una condición para cada iteración.
  //En el caso que el nombre del producto en el cual estamos iterando sea igual al del producto que se deasea agregar al carro
  //guardamos una flag que nos indica que encontramos el producto que se desea agregar al carro en el array "carro".
  //creamos un nuevo objeto "producto" con la cantidad que ya tiene el producto iterado + 1 y agregamos este nuevo producto al "nuevo carro".
  //De lo contrario, simplemente agregamos el producto iterado al nuevo carro.
  //Al final, se pregunta si existía o no el producto, caso en el cual, se agrega al nuevo carro.
  //Finalmente, se remplaza en el state de APP, "carro" por "nuevo carro".
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
        //console.log("Agrego al array producto existente")
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
