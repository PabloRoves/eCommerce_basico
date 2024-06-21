import { Component } from "react";

const styles = {
  detallesCarro: {
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: 30,
    boxShadow: "3px 3px 3px rgb(0,0,0,0.3)",
    borderRadius: "5px",
    width: "300px",
    right: 50,
  },
  producto: {
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

class DetallesCarro extends Component {
  render() {
    const { carro } = this.props;
    return (
      <div style={styles.detallesCarro}>
        <ul style={styles.ul}>
          {carro.map((x) => (
            <li style={styles.producto} key={x.name}>
              <img alt={x.name} src={x.img} width="50" height="30" />
              {x.name} <span>{x.cantidad}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DetallesCarro;
