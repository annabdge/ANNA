import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

class Timestamp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      giorno: "14",
      mese: "7",
      anno: "2025",
    };
  }

  render() {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginRight: "5px" }}>Ciao sono le</p>
        <>
          {this.props.ore}:{this.props.minuti}:{this.props.secondi}
        </>
        <p style={{ margin: "0 5px" }}>del</p>
        <>
          {this.state.giorno}/{this.state.mese}/{this.state.anno}
        </>
      </div>
    );
  }
}

function App() {
  return <Timestamp ore="10" minuti="35" secondi="57" />;
}

createRoot(document.getElementById("root")).render(<App />);
