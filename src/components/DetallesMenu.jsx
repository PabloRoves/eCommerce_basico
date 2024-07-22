import { Component } from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

const styles = {
  detallesMenu: {
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: 30,
    boxShadow: "3px 3px 3px rgb(0,0,0,0.3)",
    borderRadius: "5px",
    width: "300px",
    left: 0,
    overflow: "hidden",
  },
  ul: {
    margin: 0,
    padding: 0,
  },
};

class DetallesMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onEliminarClick, onNewProductClick, toggleVisibility } = this.props;
    return (
      <div style={styles.detallesMenu} onMouseLeave={() => toggleVisibility()}>
        <ul
          style={styles.ul}
          onClick={() => {
            toggleVisibility();
          }}
        >
          <MenuItem
            key='1'
            onClick={() => {
              onNewProductClick();
            }}
          >
            Nuevo productos
          </MenuItem>
          <MenuItem
            key='2'
            onClick={() => {
              onEliminarClick();
            }}
          >
            Eliminar productos
          </MenuItem>
        </ul>
      </div>
    );
  }
}

DetallesMenu.propTypes = {
  onEliminarClick: PropTypes.func.isRequired,
  onNewProductClick: PropTypes.func.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
};

export default DetallesMenu;
