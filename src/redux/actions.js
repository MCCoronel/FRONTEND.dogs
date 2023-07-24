import {
  GET_BREEDS,
  GET_BREEDS_BY_ID,
  GET_BREEDS_BY_NAME,
  GET_TEMPERAMENTS,
  ORDER_BREEDS_ALPHABETICALLY,
  ORDER_WEIGHT,
  FILTER_ORIGIN,
  FILTER_TEMPERAMENTS,
  RESET_FILTERS,
  FILTER_AND_ORDER,
  PAGINATED_BREEDS,
} from "./action-types";
import axios from "axios";

export const getBreeds = () => {
  const endpoint = "http://localhost:3001/dogs";
  return async function (dispatch) {
    try {
      const fromAPI = await axios.get(endpoint);
      const breeds = fromAPI.data;
      dispatch({ type: GET_BREEDS, payload: breeds });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getBreedByName = (name) => {
  const endpoint = `http://localhost:3001/dogs?name=${name}`;
  return async function (dispatch) {
    try {
      const fromAPI = await axios.get(endpoint);
      const breed = fromAPI.data;
      dispatch({ type: GET_BREEDS_BY_NAME, payload: breed });
    } catch (error) {
      window.alert(error.response.data.error);
    }
  };
};

export const getBreedByID = (id) => {
  const endpoint = `http://localhost:3001/dogs/${id}`;
  return async function (dispatch) {
    try {
      const fromAPI = await axios.get(endpoint);
      const breed = fromAPI.data;
      dispatch({ type: GET_BREEDS_BY_ID, payload: breed });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export function getTemperaments() {
  const endpoint = "http://localhost:3001/temperaments";
  return async function (dispatch) {
    try {
      const APITemperaments = await axios.get(endpoint);
      const temperaments = APITemperaments.data
        .map((temp) => ({
          id: temp.id,
          name: temp.name,
        }))
        .sort((a, b) => a.name.localeCompare(b.name));
      return dispatch({
        type: GET_TEMPERAMENTS,
        payload: temperaments,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export const temperamentFiltered = (value) => {
  return async function (dispatch) {
    try {
      dispatch({ type: FILTER_TEMPERAMENTS, payload: value });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const orderWeight = (value) => {
  return async function (dispatch) {
    try {
      dispatch({ type: ORDER_WEIGHT, payload: value });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const orderBreedsAlphabetically = (value) => {
  return async function (dispatch) {
    try {
      dispatch({ type: ORDER_BREEDS_ALPHABETICALLY, payload: value });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterOrigin = (value) => {
  return async function (dispatch) {
    try {
      dispatch({ type: FILTER_ORIGIN, payload: value });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterAndOrder = (configs) => {
  return async function (dispatch) {
    try {
      dispatch({ type: FILTER_AND_ORDER, payload: configs });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const resetFilters = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: RESET_FILTERS });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const paginatedBreeds = (value) => {
  return async function (dispatch) {
    try {
      dispatch({ type: PAGINATED_BREEDS, payload: value });
    } catch (error) {
      console.log(error.message);
    }
  };
};
