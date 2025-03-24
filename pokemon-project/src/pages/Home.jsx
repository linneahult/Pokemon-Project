import "../styles/Home.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../components/SearchBar";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState(""); // lagrar vad användaren anger i sökfältet
  const navigate = useNavigate(); // navigerar användaren

  function handleSearch(searchTerm) {
    // funktion som tar emot användarens inmatning
    if (searchTerm.trim() !== "") {
      navigate(`/pokemon/${searchTerm.toLowerCase()}`); // navigerar användaren baserat på söktermen
    }
  }

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center">
      <div className="row w-100 justify-content-ccenter align-items-center">
        <div className="col-md-6 text-container">
          <h1 className="display-4 fw-bold custom-text">Find your pokémon</h1>
          <p className="lead text-muted">
            Search for any Pokémon to discover its stats
          </p>
          <div className="mt-4">
            <SearchBar
              placeholder="Search for Pokémon..."
              buttonText="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onSearch={handleSearch}
            />
          </div>
        </div>
        <div className="col-md-6 text-center">
          <div className="background-text">VAPOREON</div>
          <img
            src="/picture2.png"
            className="img-fluid pokemon-image"
            alt="Pokémon"
            style={{ maxHeight: "450px" }}
          />
        </div>
        <div className="secret-page">
          <Link to="/secret">Secret Page</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
