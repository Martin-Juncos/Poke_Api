const axios = require("axios");
const { Type } = require("../db");

const getTypeController = async () => {
  const typesApi = await axios.get("https://pokeapi.co/api/v2/type");
  const types = typesApi.data.results;
  // const tipos = types.map(e => e.name)
  // console.log(tipos)
  types.map((e) => {
    Type.findOrCreate({
      where: {
        name: e.name,
      },
    });
  });
  return await Type.findAll();
};
module.exports = { getTypeController };
