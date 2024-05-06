const { Driver, Team } = require("../db");
const { Op } = require("sequelize");

const searchDrivers = async (req, res) => {
  // Obtenemos el nombre del conductor desde los parámetros de la consulta (query parameters)
  const { name } = req.query;

  try {
    // Verificamos que se haya proporcionado el nombre en la consulta
    if (!name) {
      return res.status(400).json({ message: "Name parameter is required." });
    }

    // Buscamos en la base de datos por conductores que coincidan con el nombre proporcionado
    const drivers = await Driver.findAll({
      where: {
        // Usamos la operación de comparación 'ILIKE' para una búsqueda insensible a mayúsculas y minúsculas
        // y que coincida parcialmente
        name: { [Op.iLike]: `%${name}%` }
      },
      include: [{
        model: Team,
        as: 'teams',
        attributes: ['id', 'name'],
        through: {
          attributes: []
        }
      }],
      order: [['name', 'ASC']]  // Ordenamos los resultados por nombre en orden ascendente
    });

    // Si no encontramos conductores con ese nombre
    if (drivers.length === 0) {
      return res.status(404).json({ message: "No drivers found with that name." });
    }

    // Si encontramos conductores, retornamos los datos
    return res.status(200).json({ drivers });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = searchDrivers;
