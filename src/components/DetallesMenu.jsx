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
  },
  menuItem: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "solid 1px #aaaa",
  },
  ul: {
    margin: 0,
    padding: 0,
  },
};

class DetallesMenu extends Component {
  render() {
    return (
      <div style={styles.detallesMenu}>
        <ul style={styles.ul}>
          <li style={styles.menuItem} key='1'>
            primer item
          </li>
          <li style={styles.menuItem} key='2'>
            segundo item
          </li>
          <li style={styles.menuItem} key='3'>
            tercer item
          </li>
        </ul>
      </div>
    );
  }
}

export default DetallesMenu;
