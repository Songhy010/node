const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('catalog', 'root', '', {
  host: 'localhost',
  dialect:'mysql',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  logging: false
});

module.exports  = sequelize;