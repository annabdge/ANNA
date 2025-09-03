**REACT**

React è una **libreria JavaScript** (non un framework) sviluppata da Facebook, usata per creare interfacce utente (UI), soprattutto per applicazioni web a pagina singola (SPA).
React ti aiuta a costruire un'interfaccia dividendo tutto in **componenti riutilizzabili**.

---

## COMPONENTI IN REACT

### Cos’è un componente?

* Un componente è come un **mattoncino LEGO**: costruisci un’interfaccia componendo tanti piccoli pezzi indipendenti.
* Può essere utilizzato in diverse parti dell’applicazione e anche in progetti diversi, riducendo la duplicazione del codice.
* Contiene uno **stato interno (state)** e può ricevere dati dall’esterno tramite **props**.

---

### Tipi di componenti

#### 1. Class Components

* Sono **classi** JavaScript che estendono `React.Component`.
* Hanno il **metodo render()** obbligatorio, che ritorna JSX.
* Usano `this` per accedere a `props` e `state`.
* Gestiscono lo **stato interno** con `this.state` e lo aggiornano con `this.setState()`.
* Hanno un **ciclo di vita** con metodi come `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.

**Esempio di class component con state:**

```js
import React, { Component } from 'react';

class Contatore extends Component {
  constructor(props) {
    super(props);
    this.state = { conteggio: 0 };
    this.incrementa = this.incrementa.bind(this);
  }

  incrementa() {
    this.setState({ conteggio: this.state.conteggio + 1 });
  }

  render() {
    return (
      <div>
        <p>Conteggio: {this.state.conteggio}</p>
        <button onClick={this.incrementa}>Aumenta</button>
      </div>
    );
  }
}
```

#### 2. Functional Components

* Sono **funzioni JavaScript** che restituiscono JSX.
* **Non usano `this`**.
* Gestiscono lo stato e gli effetti collaterali tramite **Hooks** (`useState`, `useEffect`).
* Permettono di creare **Custom Hooks** (funzioni che richiamano altri hook).

**Esempio di functional component con useState e useEffect:**

```js
import React, { useState, useEffect } from 'react';

function Contatore() {
  const [conteggio, setConteggio] = useState(0);

  useEffect(() => {
    console.log("Componente montato");
  }, []);

  return (
    <div>
      <p>Conteggio: {conteggio}</p>
      <button onClick={() => setConteggio(conteggio + 1)}>Aumenta</button>
    </div>
  );
}
```

---

### Differenze principali tra Class e Functional Components

| Aspetto        | Class Component                     | Functional Component |
| -------------- | ----------------------------------- | -------------------- |
| Sintassi       | `class ... extends React.Component` | `function ... () {}` |
| Stato          | `this.state`                        | `useState()`         |
| Modifica stato | `this.setState()`                   | funzione `setX()`    |
| Ciclo di vita  | `componentDidMount`, etc.           | `useEffect()`        |
| Uso del `this` | sì                                  | no                   |
| Hook           | no                                  | sì                   |

---

## JSX

* JSX = **JavaScript + XML**, sintassi simile all’HTML dentro JavaScript.
* Permette di:

  * Essere usato all’interno di `if`, cicli `for`
  * Assegnarlo a variabili
  * Restituirlo da funzioni

**Esempio:**

```js
const nome = "Sofia";
const elemento = <h1>Ciao, {nome}</h1>; // JSX
```

---

## PROPS

* Servono per **passare dati ai componenti** (come parametri di una funzione).
* Sono **leggibili dal componente**, ma **non modificabili** internamente.
* Possono anche essere **funzioni passate da un componente all’altro**.

**Esempio:**

```js
function Welcome(props) {
  return <h1>Ciao, {props.nome}</h1>;
}
<Welcome nome="Sofia" />
```

---

## STATE

* Ogni componente può memorizzare dati interni nel **proprio stato**.
* Nei class component: `this.state` e `this.setState()`.
* Nei functional component: `useState()`.

**Esempio functional component con useState:**

```js
const [numero, setNumero] = useState(0);
<button onClick={() => setNumero(numero + 1)}>Clicca</button>
```

---

## HOOKS

* Funzioni speciali per i functional component.
* Principali:

  1. **useState** → crea e modifica lo stato.
  2. **useEffect** → esegue effetti collaterali (timer, fetch API, modifiche al DOM).

**Esempio completo Timer:**

```js
function Timer() {
  const [secondi, setSecondi] = useState(0);

  useEffect(() => {
    const intervallo = setInterval(() => {
      setSecondi(prev => prev + 1);
    }, 1000);
    return () => clearInterval(intervallo);
  }, []);

  return <p>Tempo trascorso: {secondi} secondi</p>;
}
```

---

## CICLO DI VITA (solo class component)

**Fasi principali:**

1. **Mounting (creazione)**

   * `constructor()` → inizializza stato e bind dei metodi
   * `static getDerivedStateFromProps()`
   * `render()` → obbligatorio
   * `componentDidMount()` → operazioni dopo il render

2. **Update (aggiornamento)**

   * `static getDerivedStateFromProps()`
   * `shouldComponentUpdate()` → true/false
   * `render()`
   * `getSnapshotBeforeUpdate()`
   * `componentDidUpdate()` → chiamate API, effetti

3. **Unmounting (rimozione)**

   * `componentWillUnmount()`

---

## ALTRE NOZIONI IMPORTANTI

### Virtual DOM

* Copia virtuale del DOM.
* Aggiorna solo le parti che cambiano → più efficiente.

### setState()

* Aggiorna lo stato e provoca il **re-render** del componente.
* Funzione **asincrona** → il nuovo valore non è immediatamente disponibile.

---

## DIFFERENZE JS vs JSX

* **JS** = JavaScript puro.
* **JSX** = sintassi simile all’HTML dentro JS, usata da React per descrivere l’interfaccia.

**Esempio:**

```js
const oggi = { giorno: "17", mese: "07", anno: "2025" };
function formattaData(data) {
  return data.giorno + "/" + data.mese + "/" + data.anno;
}
function dammiIlBuongiorno(data) {
  if(data) {
    return <div>Buon {formattaData(data)}</div>;
  }
  return <div>Buona giornata</div>;
}
```

---

## CREARE UN PROGETTO REACT

* `npm init` → inizializza progetto
* `npm create react app` → crea progetto completo
* `npm start` → avvia il progetto

**Alternativa più leggera:** Vite

---

## REDUX (cenno)

* Libreria per **stato globale** condiviso tra componenti.
* Principi: store unico, stato immutabile, azioni (actions), reducer, dispatch.
* Functional component leggono lo stato con `useSelector` e modificano con `useDispatch`.
