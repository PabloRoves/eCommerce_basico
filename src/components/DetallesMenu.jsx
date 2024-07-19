import { Component } from "react";

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
  menuItem: (isHovered) => ({
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "solid 1px #aaaa",
    cursor: "pointer",
    backgroundColor: isHovered ? "#359a2c" : "white",
  }),
};

class DetallesMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverStates: {
        1: false,
        2: false,
        3: false,
      },
    };
  }

  render() {
    return (
      <div style={styles.detallesMenu}>
        <ul style={styles.ul}>
          {["Listar productos", "Nuevo producto", "Eliminar producto"].map((item, index) => (
            <li
              onMouseEnter={() =>
                this.setState((prevState) => ({
                  hoverStates: { ...prevState.hoverStates, [index + 1]: true },
                }))
              }
              onMouseLeave={() =>
                this.setState((prevState) => ({
                  hoverStates: { ...prevState.hoverStates, [index + 1]: false },
                }))
              }
              style={styles.menuItem(this.state.hoverStates[index + 1])}
              key={index + 1}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DetallesMenu;
