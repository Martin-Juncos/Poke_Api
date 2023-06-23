const { getTypeController } = require("../controllers/typeControllers");

const getTypeHandler = async (req, res) => {
  try {
    const results = await getTypeController();
    res.status(200).json(results);
  } catch (error) {
    res.status(404).send("Error al traer los Type");
  }
};

module.exports = { getTypeHandler };
