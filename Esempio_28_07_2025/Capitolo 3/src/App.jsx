import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import Form from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      right: "-260px",
    };
    this.onOpenMenu = this.onOpenMenu.bind(this);
    this.onCloseMenu = this.onCloseMenu.bind(this);
    this.onNavigate = this.onNavigate.bind(this);
  }

  onOpenMenu() {
    this.setState({ right: "0px" });
  }
  onCloseMenu() {
    this.setState({ right: "-260px" });
  }
  onNavigate(path) {
    alert(path);
    this.onCloseMenu();
  }

  render() {
    return (
      <>
        <Header onButtonClick={this.onOpenMenu} />
        <Form />
        <Footer />
        <Menu
          right={this.state.right}
          onCloseButtonClick={this.onCloseMenu}
          onButtonClick={this.onNavigate}
        />
      </>
    );
  }
}
export default App;
