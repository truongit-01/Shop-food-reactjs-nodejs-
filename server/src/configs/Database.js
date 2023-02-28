const { Sequelize } = require("sequelize");

const db = new Sequelize('shop_food', 'root', '', {
    host: "localhost",
    dialect: 'mysql',
});

module.exports = db;


