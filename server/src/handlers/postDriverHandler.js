const  createDriver  = require("../controllers/postDriver");

const createDriverHandler = async (req, res) => {
  try {
    const driverData = req.body;
    const newDriver = await createDriver(driverData);

    res.status(201).json(newDriver);
  } catch (error) {
    console.error("Error al crear el conductor:", error);
    // Enviar una respuesta de error si ocurre algún problema durante la creación del conductor
    res.status(500).json({ error: "Error al crear el conductor" });
  }
};

module.exports = createDriverHandler;
