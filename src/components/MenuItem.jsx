import { Component } from "react";

const styles = {
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

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  }

  render() {
    // prettier-ignore
    return <li 
      {...this.props} 
      onMouseEnter={() => this.setState({ hovered: true })} 
      onMouseLeave={() => this.setState({ hovered: false })} 
      style={styles.menuItem(this.state.hovered)}>
    </li>;
  }
}

export default MenuItem;
