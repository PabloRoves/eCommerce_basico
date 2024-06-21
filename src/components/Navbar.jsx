import { Component } from "react";
import Logo from "./Logo.jsx";
import Carro from "./Carro.jsx";

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    heigh: "100px",
    justifyContent: "space-between",
    position: "relative", //esta propiedad la necesitaremos más adelante para poder mostrar el carro de compras y que el mismo se necuentre relativo al navbar
    padding: "0 50px",
    boxShadow: "0 2px 3px rgb(0, 0, 0, 0.1)",
  },
};
class Navbar extends Component {
  render() {
    const { carro } = this.props;
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Carro carro={carro} muestro={false} />
      </nav>
    );
  }
}

export default Navbar;
