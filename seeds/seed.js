const sequelize = require('../config/connection');
const { User, Team } = require('../models');

const userData = require('./userData.json');
const teamData = require('./teamData.json');
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const teams = await Team.bulkCreate(teamData,{
    individualHooks: true,
    returning: true,
  });

  // //for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
