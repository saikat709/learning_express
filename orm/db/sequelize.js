const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log(process.env);


const sequelize = new Sequelize(
    process.env.database,
    process.env.user,
    process.env.password,
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;