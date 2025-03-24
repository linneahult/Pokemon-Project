import "../Styles/SearchBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = ({ placeholder, buttonText, value, onSearch, onChange }) => {
  return (
    <div className="custom-search-bar">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => e.key === "Enter" && onSearch(value)}
      />
      <button onClick={() => onSearch(value)}>{buttonText}</button>
    </div>
  );
};

export default SearchBar;
