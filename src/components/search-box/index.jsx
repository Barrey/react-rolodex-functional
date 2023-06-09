import "./search-box.styles.css";

const SearchBox = (props) => {
  const { className, placeholder, onChangeHandler } = props;
  return (
    <div className="search-box">
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
