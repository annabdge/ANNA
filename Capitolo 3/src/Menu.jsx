import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <aside
        id="sidebar"
        className="sidebar"
        style={{ right: this.props.right }}
      >
        <button
          id="close-sidebar"
          className="close-btn"
          aria-label="Chiudi menu"
          onClick={this.props.onCloseButtonClick}
        >
          &times;
        </button>
        <div className="sidebar-content">
          <div className="user-info">
            <div className="user-icon">
              {/*  icona utente SVG */}
              <svg width="48" height="48" viewBox="0 0 24 24" fill="#fff">
                <circle cx="12" cy="8" r="4" />
                <path d="M12 14c-5 0-8 2.5-8 4v2h16v-2c0-1.5-3-4-8-4z" />
              </svg>
            </div>
            <div className="user-details">
              <div className="user-name">Matteo Bruzzone</div>
            </div>
          </div>
          <button
            className="sidebar-btn"
            id="btn-home"
            onClick={() =>
              this.props.onButtonClick("Navigazione verso la home page")
            }
          >
            <span className="icon">
              {/*  icona casa SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#004f9f">
                <path d="M12 3l10 9h-3v9h-6v-6h-2v6H5v-9H2z" />
              </svg>
            </span>
            Home
          </button>
          <button
            className="sidebar-btn"
            id="btn-docs"
            onClick={() =>
              this.props.onButtonClick("Navigazione verso la pagina Documenti")
            }
          >
            <span className="icon">
              {/*  icona libreria SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#004f9f">
                <path d="M4 22h16V2H4v20zm2-2V4h12v16H6zm2-2h8v-2H8v2zm0-4h8v-2H8v2zm0-4h8V8H8v2z" />
              </svg>
            </span>
            Documenti
          </button>
          <button
            className="sidebar-btn"
            id="btn-dati"
            onClick={() =>
              this.props.onButtonClick("Navigazione verso la pagina di ricerca")
            }
          >
            <span className="icon">
              {/*  icona lente SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#004f9f">
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                  stroke="#004f9f"
                  strokeWidth="2"
                  fill="none"
                />
                <line
                  x1="21"
                  y1="21"
                  x2="16.65"
                  y2="16.65"
                  stroke="#004f9f"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            Cerca
          </button>
        </div>
      </aside>
    );
  }
}
export default Menu;
