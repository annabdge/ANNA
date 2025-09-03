import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => console.log("Fetched data:", data))
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => console.log("MOUNT COMPLETED"));
  }

  componentDidUpdate() {
    if (this.state.count === 5)
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((data) => console.log("Fetched data:", data))
        .catch((error) => console.error("Error fetching data:", error))
        .finally(() => console.log("UPDATE COMPLETED"));
  }

  render() {
    return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => this.setState((prevState) => ({ count: prevState.count + 1 }))}>count is {this.state.count}</button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </>
    );
  }
}

export default App;
