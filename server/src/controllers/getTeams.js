const { Team } = require("../db");

const getTeams = async (req, res) => {
    try {
        const teams = await Team.findAll({
            attributes: ['name'], // Solo incluye el atributo 'name'
            order: [['name', 'ASC']] // Ordena los resultados por nombre en orden ascendente
        });

        return res.status(200).json({teams})
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = getTeams;