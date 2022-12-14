const router = require('express').Router();
const { UserPickedTeams, User, Team } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    // const projectData = await Project.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ['name'],
    //     },
    //   ],
    // });

    // Serialize data so the template can read it

    //const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
     
      
    res.render('homepage', {  

      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// router.get('/project/:id', async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });

//     res.render('project', {
//       ...project,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     console.log(err)
//     res.status(500).json(err);
//   }
// });
router.get('/teamselect', withAuth, async (req, res) => {
  try {
    const allTeamsData = await Team.findAll()
    


    const allTeams = allTeamsData.map(team => team.get({plain:true})).slice(0,32);




    const allUserPicksData = await UserPickedTeams.findAll(
        {where:{userId:req.session.user_id}}
    )

    const allUserPicks = allUserPicksData.map(team => team.get({plain:true}))
    console.log(allUserPicks);
    
    console.log(allTeams);
    const teamsUsed = allTeams.filter(x => allUserPicks.some((y) => x.id === y.teamId))
    console.log(teamsUsed)

    // console.log(req.session.user_id)//current logged in user id
    // Find the logged in user based on the session ID
    // const userData = await User.findByPk(req.session.user_id, {
    //   attributes: { exclude: ['password'] }
    // });
    // const user = userData.get({ plain: true });
    // console.log("USER=======",user)
    res.render('teamselect', {
      logged_in: true,
      allTeams,
      allUserPicks,
      teamsUsed
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

//function to select a team
// router.post('/teamselect', withAuth, async(req,res))

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    const allUserPickData = await UserPickedTeams.findAll(
      { where: { userId:req.session.user_id} }
    )

    const userPicks = allUserPickData.map(pick => pick.get({plain:true}))
    console.log(userPicks)
    // console.log(req.session.user_id)//current logged in user id
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] }
    });
    const user = userData.get({ plain: true });
console.log("USER=======",user)
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// router.get('teamselect', withAuth, (req, res) => {

//   const currentMatchups = await Team.

// })

module.exports = router;
