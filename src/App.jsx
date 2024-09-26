import { Route, Routes } from "react-router";
import "./App.css";
import { Context } from "./context/Context";
import { Home } from "./pages/home/Home";
import { Personaje } from "./pages/personaje/Personaje";

function App() {
  return (
    <>
      <Context>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personaje/:id" element={<Personaje />} />
        </Routes>
      </Context>
    </>
  );
}

export default App;
