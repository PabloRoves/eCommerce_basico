import { Component } from "react";
import Menu from "./Menu.jsx";
import Carro from "./Carro.jsx";
import PropTypes from "prop-types";

const styles = {
  navContainer: {
    width: "100%",
    maxWidth: "1200px",
    padding: "0 20px",
    boxSizing: "border-box",
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    heigh: "100px",
    justifyContent: "space-between",
    position: "relative",
    padding: "5px 20px",
    boxShadow: "0 2px 3px rgb(0, 0, 0, 0.1)",
    borderRadius: "5px",
  },
};

class Navbar extends Component {
  render() {
    const { carro, onEliminarClick, onNewProductClick } = this.props;
    return (
      <div className='navContainer' style={styles.navContainer}>
        <nav style={styles.navbar}>
          <Menu onEliminarClick={onEliminarClick} onNewProductClick={onNewProductClick} />
          <Carro carro={carro} muestro={false} />
        </nav>
      </div>
    );
  }
}

//<button onClick={onEliminarClick}>Eliminar Producto</button>
Navbar.propTypes = {
  carro: PropTypes.any.isRequired,
  onEliminarClick: PropTypes.any.isRequired,
  onNewProductClick: PropTypes.any.isRequired,
};

export default Navbar;
