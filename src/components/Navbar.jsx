import { Component } from "react";
import Logo from "./Logo.jsx";
import Menu from "./Menu.jsx";
import Carro from "./Carro.jsx";
import PropTypes from "prop-types";

const styles = {
  navContainer: {
    //width: "1200px",
    width: "100%", // Use percentage width for responsiveness
    maxWidth: "1200px", // Max width to maintain readability on larger screens
    padding: "0 20px", // Added padding for better spacing
    boxSizing: "border-box", // Ensures padding is included in the width
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    heigh: "100px",
    justifyContent: "space-between",
    position: "relative", //esta propiedad la necesitaremos más adelante para poder mostrar el carro de compras y que el mismo se necuentre relativo al navbar
    padding: "5px 20px",
    boxShadow: "0 2px 3px rgb(0, 0, 0, 0.1)",
    borderRadius: "5px",
  },
};

class Navbar extends Component {
  render() {
    const { carro } = this.props;
    return (
      <div className='navContainer' style={styles.navContainer}>
        <nav style={styles.navbar}>
          <Menu />
          <Carro carro={carro} muestro={false} />
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  carro: PropTypes.any.isRequired,
};

export default Navbar;
