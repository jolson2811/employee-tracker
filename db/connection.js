// import mysql2
const mysql = require('mysql2');
// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: console.log
},
    console.log('Connected to the company database.')
);


module.exports = sequelize;