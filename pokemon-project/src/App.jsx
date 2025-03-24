import "./App.css";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import SecretPage from "./pages/SecretPage";
import PokemonPage from "./pages/PokemonPage";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutWebsite from "./pages/AboutWebsite";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutWebsite />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokemon/:pokemonName" element={<PokemonPage />} />
        <Route path="/secret" element={<SecretPage />} />
      </Routes>
    </div>
  );
}

export default App;
