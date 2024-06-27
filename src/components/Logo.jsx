import { Component } from "react";
import logo from "/Vector.svg";

const styles = {
  logo: {
    fontWeight: "700",
    fontSize: "2rem",
  },
};
class Logo extends Component {
  render() {
    return (
      <div style={styles.logo}>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
    );
  }
}

export default Logo;
