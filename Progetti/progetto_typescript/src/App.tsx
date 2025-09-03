import { Routes, Route } from "react-router";
import HomeUova from "./HomeUova";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeUova />} />
    </Routes>
  );
}

export default App;
