const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Trip model
class UserPickedTeams extends Model { }

// create fields/columns for Trip model
UserPickedTeams.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        unique: false
      }
    },
    teamId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'team',
        key: 'id',
        unique: false
      }
    },
    week: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userpickedteams'
  }
);

module.exports = UserPickedTeams;

