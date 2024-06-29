const { Sequelize } = require("sequelize");
const db = new Sequelize({
    username: 'myuser',
    password: 'mypassword',
    database: 'mydatabase',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
});

module.exports = db;