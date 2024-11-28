import s from "./SearchBox.module.css";
const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        name="search"
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default SearchBox;
