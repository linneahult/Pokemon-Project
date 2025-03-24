import "../styles/PokedexGallery.css";
import { motion } from "framer-motion";
import SearchBarV_2 from "./SearchBarV_2";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useEffect, useState } from "react";

const PokedexGallery = () => {
  const [pokemonData, setPokemonData] = useState([]); // variabel för pokemon-information
  const [searchTerm, setSearchTerm] = useState(""); // variabel för sökning
  const [loading, setLoading] = useState(true); // variabel för laddning

  //REFERENS: chatGPT har använts som stöd för att generera kod på rad 16-28
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=500" //extert API för att hämta pokemons
        );
        const data = await response.json();

        const fetchedPokemon = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return {
              name: pokemon.name,
              image: details.sprites.other["official-artwork"].front_default,
            };
          })
        );

        setPokemonData(fetchedPokemon);
      } catch (error) {
        console.error("Error fetching Pokémon", error);
      } finally {
        setLoading(false); // slutar ladda oavsett om det lyckas eller inte
      }
    };

    fetchPokemon();
  }, []);

  const filteredPokemon = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loading-container">
        <img src="/gif.gif" alt="Loading Pokémon" className="loading-gif" />
        <p className="loading-text">Loading Pokémon...</p>
      </div>
    );
  }

  return (
    <div className="pokemon-gallery-container">
      <motion.h1
        className="mb-4 pokedex-heading"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Pokédex
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <SearchBarV_2 searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </motion.div>

      <div className="pokemon-gallery">
        {filteredPokemon.length === 0 ? (
          <p className="no-pokemon-found">No Pokémon matched your search</p>
        ) : (
          filteredPokemon.map((pokemon, index) => (
            <motion.div
              key={index}
              className="pokemon-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="pokemon-image-gallery"
              />
              <p className="pokemon-name-gallery">
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </p>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default PokedexGallery;
