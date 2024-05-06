//? Dependencies
const getDrivers = require("../controllers/getDrivers");

const getDriversHandler = async (req, res) => {
  try {
    const {
      name,
      team,
      origin,
      orderType,
      order,
    } = req.query;  // Aquí asumo que usarás los parámetros en la query string, más adecuado para filtros y ordenación.

    const drivers = await getDrivers(
      name,
      team,
      origin,
      orderType,
      order
    );
    return res.status(200).json(drivers);
  } catch (error) {
    console.log("Error retrieving drivers", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getDriversHandler;
