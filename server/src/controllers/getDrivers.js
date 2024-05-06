const { Driver, Team } = require("../db");

const getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.findAll({
      include: [{
        model: Team,
        as:'teams',
        attributes: ['id', 'name'],
        through: {
          attributes: []
        }
      }],
      order: [['id', 'ASC']] 
    });

    return res.status(200).json({drivers});
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Internal server error" });
  }
};

module.exports = getDrivers;
