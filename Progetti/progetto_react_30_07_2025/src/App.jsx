import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import { View } from "./components/View";
import { Insert } from "./components/Insert";
import { Navbar } from "./components/Navbar";

function App() {
  //stato
  const [lista, setLista] = useState([]); //array vuoto

  console.log("lista", lista);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home </div>} />
        <Route path="/view" element={<View lista={lista} />} />
        <Route
          path="/insert"
          element={<Insert onSave={(el) => setLista([...lista, el])} />}
        />
        <Route path="/*" element={<div>Pagina non trovata</div>} />
      </Routes>
    </div>
  );
}

export default App;
