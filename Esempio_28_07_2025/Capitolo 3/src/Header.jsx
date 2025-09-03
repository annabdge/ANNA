import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <span className="logo">ITS Web App</span>
        <button
          id="menu-btn"
          className="menu-btn"
          aria-label="Apri menu"
          onClick={this.props.onButtonClick}
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
      </header>
    );
  }
}
export default Header;
