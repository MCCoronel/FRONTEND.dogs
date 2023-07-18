import style from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { getBreedByName } from "../../redux/actions";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SearchBar = () => {
   
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [search, setSearch] = useState({
    name: "",
  });

  const searchHandler = (event) => {
    setSearch({
      name: event.target.value,     
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const name = search.name;

    if (!name) {
      return alert("Please input a name to start the search");
    } else {
      dispatch(getBreedByName(name));
      setSearch({
        name: "",
      });
      navigate("/home");
    }
  };
  return (
    <div className={style.container}>
      
      <input
        id="search"
        placeholder="Search Breed..."
        type="search"
        name="search"
        onChange={searchHandler}
        className={style.input}
      />
     <NavLink to="/">      
      <button onClick={submitHandler} value="Search" type="submit" className={style.button}>
        Search
      </button>
      </NavLink>
    

    
    </div>
  );
};

export default SearchBar;
