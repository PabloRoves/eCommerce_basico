import { Component } from "react";

class NuevoProducto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgData: null,
      imgName: "",
    };
  }

  async componentDidMount() {}
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
      <div className='nuevoProducto'>
        <p>Nuevo Producto</p>
        <input type='text' id='productName' placeholder='Product Name'></input>
        <input type='text' id='productPrice' placeholder='price'></input>
        <input type='file' onChange={this.handleFileChange} accept='.jpeg' />
        <button onClick={this.nuevoProducto}>cargar Producto</button>
      </div>
    );
  }
}

export default NuevoProducto;
