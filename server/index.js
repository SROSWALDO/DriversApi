const server = require('./src/server');
const { conn, Driver,Team } = require('./src/db.js');
const axios = require('axios');
const initializeIdSequence = require('./initializedIdSequence.js');

//? utilities
const PORT = 3001;
const API_URL = "http://localhost:5000/drivers";

const startServer = async () => {
  try {
    await conn.sync({ force: true }); //! true borra
    await initializeIdSequence();
    await saveInformation();
    server.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`));
  } catch (error) {
    console.log("Server not started", error.message);
    
  }
}

const saveInformation = async () => {
  try {
    const { data } = await axios(API_URL);

    for (let driver of data) {
      const driverName = driver.name.forename + " " + driver.name.surname;
      const imageUrl = driver.image.url;

      const [driverInstance, created] = await Driver.findOrCreate({
        where: { id: driver.id },
        defaults: {
          name: driverName,
          image: imageUrl,
          dob: driver.dob,
          nationality: driver.nationality,
          url: driver.url,
          description: driver.description,
        }
      });

      // Procesar los equipos si existen
      if (typeof driver.teams === 'string' && driver.teams.trim().length > 0) {
        const teamNames = driver.teams.split(',').map(team => team.trim());
        for (let teamName of teamNames) {
            const [teamInstance] = await Team.findOrCreate({
                where: { name: teamName }
            });
            await driverInstance.addTeam(teamInstance);
        }
    } else {
        console.error('Unexpected type or empty teams:', driver.teams);
    }
    }
    console.log("Information saved");
  } catch (error) {
    console.log("Information not saved", error);
  }
};

startServer();

//conn.sync({ force: true }).then(() => {
// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// })
// }).catch(error => console.error(error))
