const router = require('express').Router();
const { Team } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const allTeamsData = await Team.findAll({
    });
    const allTeams = allTeamsData.map(team => team.get({plain:true}))

    res.status(200).json(allTeams);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
