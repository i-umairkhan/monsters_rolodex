import "./Search-Box.styles.css";

const SearchBox = (props) => {
  return (
    <input
      className={props.className}
      placeholder={props.placeholder}
      type="search"
      onChange={props.onChangeHandler}
    />
  );
};

export default SearchBox;
