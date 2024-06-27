import { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  bubbleAlert: {
    backgroundColor: "#E9725A",
    borderRadius: "15px",
    color: "#fff",
    padding: "2px 10px",
    fontSize: "0.9rem",
    width: "20px",
  },
};

class BubbleAlert extends Component {
  getNumber(n) {
    if (!n) {
      return "";
    }
    return n > 9 ? "9+" : n;
  }

  render() {
    const value = this.props.value;
    return <span style={styles.bubbleAlert}>{this.getNumber(value)}</span>;
  }
}

BubbleAlert.propTypes = {
  value: PropTypes.any.isRequired,
};

export default BubbleAlert;
