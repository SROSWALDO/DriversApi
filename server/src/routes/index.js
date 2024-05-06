const { Router } = require('express');
const getDrivers = require('../controllers/getDrivers');
const searchDrivers = require('../controllers/SearchDrivers');


const router = Router();

router.get("/drivers", getDrivers);
router.get("/drivers/search", searchDrivers);




module.exports = router;