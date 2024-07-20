import { Component } from "react";
//import DetallesCarro from "./DetallesCarro.jsx";
import DetallesMenu from "./DetallesMenu";
import menu from "/menu.svg";

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
    visible: false,
  };

  render() {
    return (
      <div className='menu-container'>
        <div
          className='menu-trigger'
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          <img src={menu} alt='menu-image' />
        </div>
        {this.state.visible == true ? <DetallesMenu /> : null}
      </div>
    );
  }
}

export default Menu;
