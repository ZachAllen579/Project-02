const router = require('express').Router();
const userRoutes = require('./userRoutes');
const teamSelectRoutes = require('./teamSelectRoutes');
const teamsRoutes = require("./team")

router.use('/users', userRoutes);
router.use('/userPick', teamSelectRoutes)
router.use('/team', teamsRoutes)

module.exports = router;
