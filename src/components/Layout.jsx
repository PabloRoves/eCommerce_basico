import { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  layout: {
    backgroudColor: "#fff",
    color: "#0A283E",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  container: {
    width: "1200px",
  },
};

class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.container}>{this.props.children}</div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
