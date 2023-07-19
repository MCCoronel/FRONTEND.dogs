import style from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { getBreedByName, paginatedBreeds } from "../../redux/actions";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState({
    name: "",
  });

  const searchHandler = (event) => {
    setSearch({
      name: event.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const name = search.name;

    if (!name) {
      return alert("Please input a name to start the search");
    } else {
      await dispatch(getBreedByName(name));
      dispatch(paginatedBreeds(1));
      setSearch({
        name: "",
      });
    }
  };

  return (
    <div className={style.container}>
      <input
        id="search"
        placeholder="Search Breed..."
        type="search"
        name="search"
        value={search.name}
        onChange={searchHandler}
        className={style.input}
      />
      <NavLink to="/">
        <button
          onClick={submitHandler}
          value="Search"
          type="submit"
          className={style.button}
        >
          Search
        </button>
      </NavLink>
    </div>
  );
};

export default SearchBar;
