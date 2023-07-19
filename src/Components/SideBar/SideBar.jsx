import style from "./SideBar.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTemperaments,
  getBreeds,
  filterAndOrder,
  paginatedBreeds,
} from "../../redux/actions";
import SearchBar from "../SearchBar/SearchBar";
import imgfilter from "../../../assets/filter.png";

const SideBar = () => {
  const dispatch = useDispatch();

  const allTemperaments = useSelector((state) => state.temperaments);
  //const Page = useSelector((state) => state.Page);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  //ESTADOS

  const [filter, setFilter] = useState({
    temperament: "Select one",
    order: "All",
    origin: "All",
  });

  const [configs, setConfigs] = useState({
    temperamentsFilter: {
      active: false,
      value: "",
    },

    originFilter: {
      active: false,
      value: "",
    },

    order: {
      active: false,
      type: "",
      value: "",
    },
  });

  //HANDLERS  

  const handleChangeTemperamentFilter = (event) => {
    const value = event.target.value;
    let auxConfigs = configs;
    if (value !== "Select One") {
      auxConfigs = {
        ...auxConfigs,
        temperamentsFilter: {
          active: true,
          value: value,
        },
      };
    } else {
      console.log("no");
      auxConfigs = {
        ...auxConfigs,
        temperamentsFilter: {
          active: false,
          value: "",
        },
      };
    }

    setConfigs(auxConfigs);
    dispatch(filterAndOrder(auxConfigs));
    dispatch(paginatedBreeds(value));
    setFilter((prevFilter) => ({ ...prevFilter, temperament: value }));

  };
  const filterOriginHandler = (event) => {
    const value = event.target.value;
    let auxConfigs = configs;
    if (value !== "all") {
      auxConfigs = {
        ...auxConfigs,
        originFilter: {
          active: true,
          value: value,
        },
      };
    } else {
      auxConfigs = {
        ...auxConfigs,
        originFilter: {
          active: false,
          value: "",
        },
      };
    }

    setConfigs(auxConfigs);
    dispatch(filterAndOrder(auxConfigs));
    dispatch(paginatedBreeds(value))
    setFilter((prevFilter) => ({ ...prevFilter, origin: value }));
  };

  const orderHandler = (event) => {
    const value = event.target.value;
    let auxConfigs = configs;
    if (value !== "All") {
      if (value === "LowToHigh" || value === "HighToLow") {
        auxConfigs = {
          ...auxConfigs,
          order: {
            active: true,
            type: "weight",
            value: value,
          },
        };
      }
      if (value === "A-Z" || value === "Z-A") {
        auxConfigs = {
          ...auxConfigs,
          order: {
            active: true,
            type: "alphabetically",
            value: value,
          },
        };
      }
    }else{
      auxConfigs = {
        ...auxConfigs,
        order: {
          active: false,
          type: "",
          value: "",
        },
      };
    }

    setConfigs(auxConfigs);
    dispatch(filterAndOrder(auxConfigs));
    dispatch(paginatedBreeds(value))
    setFilter((prevFilter) => ({ ...prevFilter, order: value }));
  };

  const resetFiltersHandler = () => {
    setFilter({
      temperament: "Select one or more typical temperaments of the breed",
      order:"All",
      origin: "Select Origin",
    });
    dispatch(getBreeds());
  };

  const [show, setShow] = useState({
    filter: true,
  });

  const toggle = () => {
    setShow({
      ...show,
      filter: !show.filter,
    });
  };

  return (
    <div>     
      
       <img src={imgfilter} alt="filter" className={style.filter} onClick={toggle}/>
      {!show.filter && (
      <div className={style.containerFilters}>
      <div className={style.containerFilter}>
        <label className={style.label}>Temperaments: </label>
        <select
          name="temperaments"
          value={filter.temperament}
          onChange={handleChangeTemperamentFilter}
          className={style.option}
        >
          <option value="Select one">Select one</option>
          <option name="all" value="all" className={style.option}>
            All
          </option>
          {allTemperaments?.map((temperament) => (
            <option
              key={temperament.name}
              id={temperament.id}
              value={temperament.name}
              className={style.option}
            >
              {temperament.name}
            </option>
          ))}
        </select>
      </div>

      <div className={style.containerFilter}>
        <label className={style.label}>Creation time: </label>
        <select
          name="origin"
          value={filter.origin}
          onChange={filterOriginHandler}
          className={style.option}
        >
          <option value="all" className={style.option}>All</option>
          <option name="New breeds" value="New breeds" className={style.option}>
            New breeds
          </option>
          <option name="Breeds API" value="Breeds API" className={style.option}>
            Other breeds
          </option>
        </select>
      </div>

      <div className={style.containerFilter}>
        <label className={style.label}>Order:</label>
        <select name="order" value={filter.order} onChange={orderHandler} className={style.option}>
          <option name="LowToHigh" value="LowToHigh" className={style.option}>
            Low to High
          </option>
          <option name="HighToLow" value="HighToLow" className={style.option}>
            High to Low
          </option>
          <option name="A-Z" value="A-Z" className={style.option}>
            A-Z
          </option>
          <option name="Z-A" value="Z-A" className={style.option}>
            Z-A
          </option>
          <option name="All" value="All" className={style.option}>
            All
          </option>
        </select>
      </div>


      <button onClick={resetFiltersHandler} className={style.buttonReset}>Reset Filters</button>

      <div>
        <SearchBar />
        </div>

    </div>
    
    
    )}
    </div>
  );
};

export default SideBar;
