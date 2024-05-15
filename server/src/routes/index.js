const { Router } = require('express');
const getDrivers = require('../controllers/getDrivers');
const searchDrivers = require('../controllers/SearchDrivers');
const getDriverHandler = require('../handlers/getDriverHandler');
const getTeams = require('../controllers/getTeams');
const createDriverHandler = require('../handlers/postDriverHandler');


const router = Router();

router.get("/drivers", getDrivers);
router.get("/drivers/search", searchDrivers);
router.get("/drivers/:id", getDriverHandler);
router.get("/teams", getTeams);
router.post("/drivers", createDriverHandler)




module.exports = router;