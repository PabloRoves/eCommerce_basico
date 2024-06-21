import { Component } from "react";
import BubbleAlert from "./BubbleAlert.jsx";
import DetallesCarro from "./DetallesCarro.jsx";
import PropTypes from 'prop-types';

const styles = {
  carro: {
    backgroundColor: "#359A2C",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    left: 12,
    top: 20,
  },
};


class Carro extends Component {
  state = {
    detalleCarro: false,
  };

  render() {
    const { carro } = this.props;
    const cantidad = carro.reduce((acumulado, producto) => acumulado + producto.cantidad, 0);
    //console.log(cantidad);
    return (
      <div>
        <span style={styles.bubble}>{cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}</span>
        <button
          style={styles.carro}
          onClick={() => {
            //console.log(this.state.detalleCarro);
            if (cantidad !== 0) {
              console.log(`muestro ${this.state.detalleCarro}`);
              this.setState({ detalleCarro: !this.state.detalleCarro });
            }
          }}
        >
          Carro
        </button>
        {cantidad > 0 && this.state.detalleCarro ? <DetallesCarro carro={carro} /> : null}
      </div>
    );
  }
}

Carro.propTypes = {
  carro: PropTypes.any.isRequired,
};

export default Carro;
