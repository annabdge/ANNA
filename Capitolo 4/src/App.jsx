import React from "react";

class Child extends React.Component {
  componentDidMount() {
    console.log("----- Child Component mounted -----");
  }

  componentWillUnmount() {
    console.log("----- Child Component unmounted -----");
  }

  render() {
    return (
      <div style={{ border: "1px dashed black", width: "40%" }}>
        <p>Child Component content</p>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor called");
    this.state = {
      showComponent: true,
    };
    // this.toggleComponent = this.toggleComponent.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps called");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called");
    return true;
    // console.log(
    //   "shouldComponentUpdate called",
    //   this.props,
    //   this.state,
    //   nextProps,
    //   nextState
    // );
    // return true;
    // return this.state === nextState;
  }

  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log("getSnapshotBeforeUpdate called");
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called");
  }

  // toggleComponent() {
  //   this.setState((prevState) => ({
  //     showComponent: !prevState.showComponent,
  //   }));
  // }
  toggleComponent = () => {
    this.setState((prevState) => ({
      showComponent: !prevState.showComponent,
    }));
  };

  render() {
    console.log("render called");
    return (
      <div>
        <h1>Component Lifecycle</h1>
        {this.state.showComponent && <Child />}
        <div style={{ marginTop: this.state.showComponent ? "20px" : "95px" }}>
          <button onClick={this.toggleComponent}>
            {this.state.showComponent ? "Unmount" : "Mount"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
