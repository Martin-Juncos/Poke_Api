import {
  FILTER_TYPES,
  FILTER_CREATED,
  GET_ALL_POKEMONS,
  GET_ALL_TYPES,
  GET_POKEMON,
  SEARCH_BY_NAME,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK
} from "./actions";

const initialState = {
  allPokemons: [],
  allPokemonsCopy: [],
  allTypes: [],
  pokemon: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
        allPokemonsCopy: action.payload,
      };
    case GET_ALL_TYPES:
      return {
        ...state,
        allTypes: action.payload,
      };
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        allPokemons: action.payload,
      };
    case FILTER_CREATED:
      return {
        ...state,
        allPokemons: action.payload,
      };
    case FILTER_TYPES:
      return {
        ...state,
        allPokemons: action.payload,
      };
      case ORDER_BY_NAME:
        return {
          ...state,
          allPokemons: action.payload,
        };
        case ORDER_BY_ATTACK:
          return {
            ...state,
            allPokemons: action.payload,
          };
    default:
      return { ...state };
  }
}
