import React from "react";
import dayjs from "dayjs";

class Item extends React.Component {
  onDelete = () => {
    let text =
      "Sei sicuro di voler eliminare questo elemento?\nPremi Ok per confermare, Annulla per annullare";
    if (confirm(text) == true) {
      this.props.onDelete();
    }
  };

  render() {
    return (
      <div className="card">
        <p>
          <span>Nome:</span>
          {this.props.nome}
        </p>
        <p>
          <span>Cognome:</span>
          {this.props.cognome}
        </p>
        <p>
          <span>Data di nascita:</span>
          {dayjs(this.props.dataNascita).format("DD/MM/YYYY")}
        </p>
        <button onClick={this.onDelete}>Elimina</button>
      </div>
    );
  }
}

class Form extends React.Component {
  formSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    this.props.onSave(data);
    event.target.reset(); // Reset the form after submission
  };

  render() {
    return (
      <form className="form" onSubmit={this.formSubmit}>
        <label>
          Nome:
          <input type="text" name="nome" required />
        </label>
        <label>
          Cognome:
          <input type="text" name="cognome" required />
        </label>
        <label>
          Data di nascita:
          <input type="date" name="dataNascita" required />
        </label>
        <button type="submit">Aggiungi a lista</button>
      </form>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
    };
  }

  addToList = (item) => {
    this.setState((prevState) => ({
      lista: [...prevState.lista, { id: dayjs().unix(), ...item }],
    }));
  };

  onDeleteItem = (id) => {
    this.setState((prevState) => ({
      lista: prevState.lista.filter((item) => item.id !== id),
    }));
  };

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       console.log("RESPONSE", response);
  //       return response.json();
  //     })
  //     // .then(data => this.setState({ users: data, loading: false }))
  //     .then((data) => console.log("DATA:", data)) // Log the data to console for debugging
  //     // .catch(error => this.setState({ error, loading: false }));
  //     .catch((error) => console.error("Error fetching data:", error));
  // }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ users: data, loading: false }))
  //     .catch((error) => this.setState({ error, loading: false }));
  // }

  render() {
    return (
      <>
        <div className="lista">
          {this.state.lista.map((item, index) => (
            <Item
              key={index}
              nome={item.nome}
              cognome={item.cognome}
              dataNascita={item.dataNascita}
              onDelete={() => this.onDeleteItem(item.id)}
            />
          ))}
        </div>
        <Form onSave={this.addToList} />
      </>
    );
  }
}

export default App;
