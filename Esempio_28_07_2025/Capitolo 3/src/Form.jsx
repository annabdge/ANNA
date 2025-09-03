import React from "react";

const NOME = "nome";
const COGNOME = "cognome";
const DATA_NASCITA = "dataNascita";
const LUOGO_NASCITA = "luogoNascita";
const CITTA_NASCITA = "cittaNascita";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      [NOME]: "",
      [COGNOME]: "",
      [DATA_NASCITA]: "",
      [LUOGO_NASCITA]: "",
      [CITTA_NASCITA]: "",
    };
    this.onSetField = this.onSetField.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onSetField(e, field) {
    this.setState({ [field]: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log("Dati inseriti", this.state);
    alert("Dati salvati! Controlla la console.");
  }

  render() {
    return (
      <form id="user-form" className="user-form" onSubmit={this.onFormSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={this.state[NOME]}
            required
            onChange={function (e) {
              this.onSetField(e, NOME);
            }.bind(this)}
          />
        </label>
        <label>
          Cognome:
          <input
            type="text"
            name="cognome"
            value={this.state[COGNOME]}
            required
            onChange={function (e) {
              this.onSetField(e, COGNOME);
            }.bind(this)}
          />
        </label>
        <label>
          Data di nascita:
          <input
            type="date"
            name="dataNascita"
            value={this.state[DATA_NASCITA]}
            required
            onChange={function (e) {
              this.onSetField(e, DATA_NASCITA);
            }.bind(this)}
          />
        </label>
        <label>
          Luogo di nascita:
          <select
            name="luogoNascita"
            id="luogoNascita"
            value={this.state[LUOGO_NASCITA]}
            required
            onChange={function (e) {
              this.onSetField(e, LUOGO_NASCITA);
            }.bind(this)}
          >
            <option value="">Seleziona...</option>
            <option value="Italia">Italia</option>
            <option value="Estero">Estero</option>
          </select>
        </label>
        <label
          id="citta-label"
          style={{
            display: this.state[LUOGO_NASCITA] === "" ? "none" : "block",
          }}
        >
          Città di nascita:
          <input
            type="text"
            name="cittaNascita"
            value={this.state[CITTA_NASCITA]}
            onChange={function (e) {
              this.onSetField(e, CITTA_NASCITA);
            }.bind(this)}
            {...(this.state[LUOGO_NASCITA] !== "" && { required: true })}
          />
        </label>
        <button type="submit">Salva</button>
      </form>
    );
  }
}
export default Form;
