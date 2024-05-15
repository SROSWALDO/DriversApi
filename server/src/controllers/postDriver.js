const { Driver, Team } = require("../db");

const createDriver = async (driverData) => {
    try {
        const { name, description, image, nationality, dob, teams } = driverData;

        // Crea el conductor
        const newDriver = await Driver.create({
            name,
            description,
            image,
            nationality,
            dob,
            isCreate: true
        });

        // Buscar los equipos por nombre, asumiendo que `teams` es un array de nombres de equipo
        if (teams && teams.length > 0) {
            const teamsFound = await Team.findAll({
                where: { name: teams }
            });
            if (teamsFound.length > 0) {
                await newDriver.addTeams(teamsFound);
            } else {
                console.log('No se encontraron equipos para asociar con el conductor');
            }
        }

        return newDriver;
    } catch (error) {
        console.error("Error al crear el conductor:", error);
        throw new Error("Error al crear el conductor: " + error.message);
    }
};

module.exports = createDriver;
