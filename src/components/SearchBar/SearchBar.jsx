import styles from "./SearchBar.module.css";

const SearchBar = ({ inputValue, handleChange }) => {
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
};

export default SearchBar;
