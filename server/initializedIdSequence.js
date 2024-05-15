// initializeIdSequence.js
const { conn } = require('./src/db'); // Asegúrate de ajustar la ruta

async function initializeIdSequence() {
  try {
    // Asegúrate de que la consulta SQL está correctamente formulada
    const [results, metadata] = await conn.query("SELECT MAX(id) AS max_id FROM \"Drivers\"");
    const maxId = results[0]?.max_id || 0; // Comprueba que esta línea obtiene correctamente el max_id

    console.log("Max ID found:", maxId); // Agrega esta línea para depurar

    // Ajusta la secuencia basándote en el resultado
    const nextVal = maxId > 0 ? maxId + 1 : 510;
    await conn.query(`SELECT setval('public."Drivers_id_seq"', ${nextVal}, false)`);

    console.log("Secuencia de ID inicializada correctamente a:", nextVal);
  } catch (error) {
    console.error('Error al inicializar la secuencia de ID:', error);
  }
}

module.exports = initializeIdSequence;
