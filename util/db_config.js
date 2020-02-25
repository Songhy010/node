const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('attendence', 'root', '$3m$0ngHy', {
  host: 'localhost',
  dialect:'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

module.exports  = sequelize;