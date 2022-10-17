const router = require('express').Router();
const { UserPickedTeams } = require('../../models');
const withAuth = require('../../utils/auth');

router.get("/", withAuth, async (req,res)=> {
const allUserPickData = await UserPickedTeams.findAll({})

const userPicks = allUserPickData.map(pick => pick.get({plain:true}))
console.log(userPicks)
})

router.post('/', withAuth, async (req, res) => {
  try {
    const newuserPickedTeam = await UserPickedTeams.create({
      ...req.body,
      userId: req.session.user_id,
    });

    res.status(200).json(newuserPickedTeam);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const userPickedTeamData = await UserPickedTeams.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!userPickedTeamData) {
      res.status(404).json({ message: 'No userPickedTeam found with this id!' });
      return;
    }

    res.status(200).json(userPickedTeamData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;
