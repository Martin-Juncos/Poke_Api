import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const GET_POKEMON = "GET_POKEMON";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const FILTER_CREATED = "FILTER_CREATED";
export const FILTER_TYPES = "FILTER_TYPES";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK = 'ORDER_BY_ATTACK'

export const getAllPokemons = () => {
  return async function (dispatch) {
    const pokemons = (await axios.get("http://www.localhost:3001/pokemons"))
      .data;
    dispatch({ type: GET_ALL_POKEMONS, payload: pokemons });
  };
};

export const getAllTypes = () => {
  return async function (dispatch) {
    const types = (await axios.get("http://www.localhost:3001/type")).data;
    dispatch({ type: GET_ALL_TYPES, payload: types });
  };
};

export const getPokemon = (id) => {
  return async function (dispatch) {
    const pokemon = await axios.get(`http://www.localhost:3001/pokemons/${id}`);
    dispatch({ type: GET_POKEMON, payload: pokemon.data[0] });
  };
};

export const searchPoke = (name) => {
  return async function (dispatch) {
    const pokemon = await axios.get(
      `http://www.localhost:3001/pokemons?name=${name}`
    );
    dispatch({ type: SEARCH_BY_NAME, payload: pokemon.data });
  };
};

export const filterCreated = (option) => {
  return async function (dispatch, getState) {
    const allPokemons = [...getState().allPokemonsCopy];
    if (option === "Api") {
      const pokeFilterApi = allPokemons.filter(
        (poke) => poke.created === false
      );
      dispatch({ type: FILTER_CREATED, payload: pokeFilterApi });
    }
    if (option === "Bdd") {
      const pokeFilterBdd = allPokemons.filter((poke) => poke.created === true);
      dispatch({ type: FILTER_CREATED, payload: pokeFilterBdd });
    }
    if (option === "All") {
      const pokeFilterAll = allPokemons;
      dispatch({ type: FILTER_CREATED, payload: pokeFilterAll });
    }
  };
};

export const filterTypes = (type) => {
  return async function (dispatch, getState) {
    const allPokemons = [...getState().allPokemonsCopy];
    const pokeFilterType = allPokemons.filter((p) =>
      p.types.some((t) => t === type)
    );
    dispatch({ type: FILTER_TYPES, payload: pokeFilterType });
  };
};

export const orderByName = (ordenName) => {
  return function (dispach, getState) {
    const allPokemons = [...getState().allPokemonsCopy];
    if (ordenName === "a_z") {
      allPokemons.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    } else {
      allPokemons.sort(function (a, b) {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
    }
    dispach({ type: ORDER_BY_NAME, payload: allPokemons });
  };
};

export const orderByAttack = (ordenAttack) => {
  return function (dispach, getState) {
    const allPokemons = [...getState().allPokemonsCopy];
    if (ordenAttack === "menor") {
      allPokemons.sort(function (a, b) {
        if (a.attack > b.attack) {
          return 1;
        }
        if (a.attack < b.attack) {
          return -1;
        }
        return 0;
      });
    } else {
      allPokemons.sort(function (a, b) {
        if (a.attack < b.attack) {
          return 1;
        }
        if (a.attack > b.attack) {
          return -1;
        }
        return 0;
      });
    }
    dispach({ type: ORDER_BY_ATTACK, payload: allPokemons });
  };
};

// export const orderByName = (orderName) => {
//   return async function (dispatch, getState) {
//     const allPokemons =  [...getState().allPokemons]; // necesito hacer una copia de mi pokemon originales, la guardo en un array, luego se mapea
//     let sortedPokemons;
//     if (orderName === "a-z") {
//       sortedPokemons = allPokemons.sort((a, b) => a.name.localeCompare(b.name));
//     } else if (orderName === "z-a") {
//       sortedPokemons = allPokemons.sort((a, b) => b.name.localeCompare(a.name));
//     }
//     dispatch({ type: ORDER_BY_NAME, payload: sortedPokemons });
//   };
// };
