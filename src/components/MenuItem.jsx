import { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  menuItem: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "solid 1px #aaaa",
  },
};

class MenuItem extends Component {
  render() {
    //const { menu } = this.props;
    return <li style={styles.menuItem} key={this.props.text}></li>;
  }
}

MenuItem.propTypes = {
  text: PropTypes.text.isRequired,
};

export default MenuItem;
