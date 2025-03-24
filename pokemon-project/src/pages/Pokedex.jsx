import "../styles/Pokedex.css";
import PokedexGallery from "../components/PokedexGallery";

const Pokedex = () => {
  return (
    <div className="text-center mt-4 pokedex-background">
      <PokedexGallery />
    </div>
  );
};

export default Pokedex;
