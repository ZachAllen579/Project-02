const User = require('./User');
const Team = require("./Team");
const UserPickedTeams = require("./UserPickedTeams");

//need to associate user to team and team to user with a many to many relationship

User.belongsToMany(Team, {
  // Define the third table needed to store the foreign keys
  through: {
    model: UserPickedTeams,
    unique: false
  },
  // Define an alias for when data is retrieved
  //as: 'user_picked_team'
});

Team.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: UserPickedTeams,
    unique: false
  },
  // Define an alias for when data is retrieved
 // as: 'location_travellers'
});



module.exports = { User, Team};

