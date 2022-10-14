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

  for (const team of teamData) {
    await Team.create({
      ...team,
    });
  }

  process.exit(0);
};

seedDatabase();
