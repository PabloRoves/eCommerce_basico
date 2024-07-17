import { Component } from "react";
//import DetallesCarro from "./DetallesCarro.jsx";
import DetallesMenu from "./DetallesMenu";
import logo from "/Vector.svg";

/* const styles = {
  menu: {
    backgroundColor: "#359A2C",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
  },
}; */

class Menu extends Component {
  state = {
    muestro: false,
  };

  render() {
    return (
      <div className='menu-container'>
        <div
          className='menu-trigger'
          onClick={() => {
            this.setState({ muestro: !this.state.muestro });
          }}
        >
          <img src={logo} alt='menu-image' />
        </div>
        {this.state.muestro == true ? <DetallesMenu /> : null}
      </div>
    );
  }
}

export default Menu;
