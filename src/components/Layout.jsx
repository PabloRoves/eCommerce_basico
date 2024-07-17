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
    //width: "1200px",
    width: "100%", // Use percentage width for responsiveness
    maxWidth: "1200px", // Max width to maintain readability on larger screens
    padding: "0 20px", // Added padding for better spacing
    boxSizing: "border-box", // Ensures padding is included in the width
  },
};

class Layout extends Component {
  render() {
    return (
      <div className='Layout' style={styles.layout}>
        <div className='containerLayout' style={styles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
