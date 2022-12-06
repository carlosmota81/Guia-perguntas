const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','1260',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;