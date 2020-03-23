const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('hCBh6I6CEj', 'hCBh6I6CEj', 'jxLcOExAso', {
  host: 'remotemysql.com',
  dialect:'mysql',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  logging: false
});

module.exports  = sequelize;