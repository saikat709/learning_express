const { Sequelize } = require('sequelize');
require('dotenv').config({
    path: __dirname + '/.env'
});

console.log('nv:   ',  process.env.host);


const sequelize = new Sequelize(
    process.env.database,
    process.env.user,
    process.env.password,
    {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
         },

    }
);

module.exports = sequelize;