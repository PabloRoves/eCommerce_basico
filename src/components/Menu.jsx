import { Component } from "react";
import DetallesMenu from "./DetallesMenu";
import menu from "/menu.svg";
import PropTypes from "prop-types";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  toggleVisibility = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    const { onEliminarClick, onNewProductClick } = this.props;
    return (
      <div className='menu-container'>
        <div
          className='menu-trigger'
          onClick={() => {
            this.setState((prevState) => ({ visible: !prevState.visible }));
          }}
        >
          <img src={menu} alt='menu-image' />
        </div>
        {this.state.visible == true ? <DetallesMenu onEliminarClick={onEliminarClick} onNewProductClick={onNewProductClick} toggleVisibility={this.toggleVisibility} /> : null}
      </div>
    );
  }
}

//onEliminarClick={this.onEliminarClick}
Menu.propTypes = {
  onEliminarClick: PropTypes.func.isRequired,
  onNewProductClick: PropTypes.func.isRequired,
};

export default Menu;
