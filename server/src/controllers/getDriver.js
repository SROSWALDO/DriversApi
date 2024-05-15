const { Driver, Team } = require("../db");

const getDriver = async (id) => {
    try {
        const driverDetail = await Driver.findOne({
            where: { id: id },
            include: [{
                model: Team,
                as:'teams',
                attributes: ['id', 'name'],
                through: {
                  attributes: []
                }
              }]
        })
        return driverDetail;
    } catch (error) {
        console.log(error);
    }
}

module.exports = getDriver;