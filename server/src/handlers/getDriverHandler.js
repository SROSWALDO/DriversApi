const getDriver = require("../controllers/getDriver");

const getDriverHandler = async (req, res) => {
    try {
        const { id } = req.params;

        const driver = await getDriver(id);
        if (!driver) {
            return res.status(404).send(`Driver with id: ${id} not exist`);
        }
        return res.status(200).json(driver)
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal error server" })
        
    }
}

module.exports = getDriverHandler;