const axios = require("axios");
const { Op } = require("sequelize");
const { Pokemon, Type } = require("../db");

const clearData = (arr) =>
  arr.map((elem) => {
    return {
      id: elem.id,
      name: elem.name,
      types: elem.types.map((e) => e.type.name),
      hp: elem.stats[0].base_stat,
      attack: elem.stats[1].base_stat,
      defense: elem.stats[2].base_stat,
      speed: elem.stats[5].base_stat,
      height: elem.height,
      weight: elem.weight,
      image: elem.sprites.other.dream_world.front_default,
      created: false,
    };
  });

// const getPokeController = async () => {
//   // Traer de la BDD
//   const pokesDbb = await Pokemon.findAll();

//   // Traer de la API
//   const apiPoke = (
//     await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
//   ).data.results;
//   const dataPoke = apiPoke.map((e) => axios.get(e.url));
//   const promisePokemon = await Promise.all(dataPoke);
//   const pokeResult = promisePokemon.map((e) => e.data);
//   const pokesApi = clearData(pokeResult);
//   // Juntamos resultados de la BDD y API
//   return [...pokesDbb, ...pokesApi];
// };
var pokeAll = [];
var pokemonDbb = [];
const getPokeController = async () => {
  //traer desde dbb
  pokemonDbb = await Pokemon.findAll();
  if (pokeAll.length > 0) {
     return [...pokemonDbb, ...pokeAll];
   };
  // traer desde la api
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=60"
  );
  const results = response.data.results;
  const result2 = results.map((e) => axios.get(e.url));
  const result3 = await Promise.all(result2);
  const result4 = result3.map((e) => e.data);
  pokeAll = clearData(result4);
  //aca concatenamos las dos 
  return [...pokemonDbb, ...pokeAll];
};

// const getPokeByNameController = async (name) => {
//   // Traemos a todos y filtramos por nombre
//   const pokeAll = await getPokeController(name);
//   const pokeFilterName = pokeAll.filter(
//     (e) => e.name.toLowerCase() === name.toLowerCase()
//   );
//   return pokeFilterName.length
//     ? pokeFilterName
//     : "Pokemon no encontrado por nombre";
// };
const getPokeByNameController = async (name) => {
  const allPokemon = await getPokeController();
  const pokeName = allPokemon.filter((e) =>
    e.name.toLowerCase().includes(name.toLowerCase())
  );
  return pokeName;
};

const getPokeByIdController = async (id, source) => {
  if (source === "api") {
    //Traer poke por Id de la API
    const pokeIdDataRow = (
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    ).data;
    const pokeIdApi = clearData([pokeIdDataRow]);
    return pokeIdApi;
  } else {
    // Traer Poke por Id de la Bdd
    const pokeIdDbb = await Pokemon.findByPk(id);
    return pokeIdDbb;
  }
};
const createPokeController = async (dataBody) => {

  const { name, types, hp, attack, defense, speed, height, weight, image } =
    dataBody;
  const newPoke = await Pokemon.create({
    name,
    types,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    image,
  });

  const typeDb = await Type.findAll({ where: { name: types } });
  await newPoke.addType(typeDb);
  return newPoke;
};

module.exports = {
  getPokeController,
  getPokeByNameController,
  getPokeByIdController,
  createPokeController,
};
