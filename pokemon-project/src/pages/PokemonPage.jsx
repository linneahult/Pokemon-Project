import "../styles/PokemonPage.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../components/SearchBar";
import { useParams, useNavigate } from "react-router-dom";

function PokemonPage() {
  const { pokemonName } = useParams(); // hämtas från URL via UseParams
  const navigate = useNavigate(); // används för att navigera vid ny sökning
  const [pokemonData, setPokemonData] = useState(null); // pokemonData lagrar hämtad data
  const [loading, setLoading] = useState(true); // visar laddningsindikator
  const [newSearch, setNewSearch] = useState(""); // hanterar ny sökning

  useEffect(() => {
    // hämtar Pokémon-data varje gång pokemonName ändras, viktig då API endast anropas när pokemonName ändras
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
        );
        if (!response.ok) throw new Error("Pokémon was not found..."); //felhantering om API-anropet misslyckas

        const data = await response.json(); // om API-anropet lyckas omvandlas svaret till JavaScrip-objekt
        setPokemonData(data); // pokemonData uppdateras
      } catch (error) {
        // felhantering vid hämtning av pokémon
        console.error("Error fetching Pokémon data:", error);
        setPokemonData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemonName]); // REFERENS: chatGPT användes som stöd för att generera kod från rad 16-35

  const handleSearch = () => {
    if (newSearch.trim() !== "") {
      navigate(`/pokemon/${newSearch.toLowerCase()}`);
      setLoading(true);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <img src="/gif.gif" alt="Loading Pokémon" className="loading-gif" />
        <p className="loading-text">Loading pokémon...</p>
      </div>
    );
  }
  if (!pokemonData) {
    return (
      <div className="text-center mt-5">
        <h2>Pokémon could not to be found...</h2>

        <SearchBar
          placeholder="Search for Pokémon..."
          buttonText="Search"
          value={newSearch}
          onChange={(e) => setNewSearch(e.target.value)}
          onSearch={handleSearch}
        />
      </div>
    );
  }

  return (
    <div className="pokemon-container">
      <h1 className="pokemon-name text-uppercase">{pokemonData.name}</h1>

      <img
        src={pokemonData.sprites.front_default} // används för att visa bild på Pokémon från API
        alt={pokemonData.name} // används för att visa Pokémon-namn från API
        className="searched-pokemon-image"
      />

      <h3 className="pokemon-stats-text">Stats:</h3>
      <ul className="list-group">
        {pokemonData.stats.map(
          (stat) => (
            <li
              key={stat.stat.name}
              className="list-group-item d-flex justify-content-between"
            >
              <span className="text-capitalize">{stat.stat.name}</span>
              <span className="fw-bold">{stat.base_stat}</span>
            </li>
          ) // REFERENS: chatGPT användes som stöd för att generera kod från rad 80-87
        )}
      </ul>
    </div>
  );
}

export default PokemonPage;
